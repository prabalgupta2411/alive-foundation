const Razorpay = require('razorpay');
const Payment = require('../models/paymentModel');
const dotenv = require('dotenv');
dotenv.config();

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { donorName, phone, email, amount } = req.body;

        if (!donorName || !phone || !email || !amount) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const options = {
            amount: amount * 100, // Razorpay accepts amount in paisa
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpayInstance.orders.create(options);

        const payment = new Payment({
            donorName,
            phone,
            email,
            amount,
            paymentId: order.id,
            status: "Pending",
        });

        await payment.save();

        res.status(201).json({ order, paymentId: payment._id });
    } catch (error) {
        console.error("Order creation error:", error.message);
        res.status(500).json({ message: "Failed to create order", error });
    }
};

// Verify payment and update status
exports.verifyPayment = async (req, res) => {
    try {
        const { paymentId, razorpayOrderId, razorpaySignature } = req.body;

        // Signature verification logic
        const crypto = require('crypto');
        const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET);
        hmac.update(razorpayOrderId + "|" + paymentId);
        const generatedSignature = hmac.digest('hex');

        if (generatedSignature !== razorpaySignature) {
            return res.status(400).json({ message: "Invalid signature" });
        }

        const payment = await Payment.findOneAndUpdate(
            { paymentId: razorpayOrderId },
            { status: "Paid" },
            { new: true }
        );

        if (!payment) {
            return res.status(404).json({ message: "Payment record not found" });
        }

        res.status(200).json({ message: "Payment verified successfully", payment });
    } catch (error) {
        console.error("Payment verification error:", error.message);
        res.status(500).json({ message: "Failed to verify payment", error });
    }
};
