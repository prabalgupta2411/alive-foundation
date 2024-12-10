const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    donorName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentId: { type: String },
    status: { type: String, default: "Pending" },
}, { timestamps: true });

module.exports = mongoose.model('Payment', PaymentSchema);
