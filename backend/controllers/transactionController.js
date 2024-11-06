const Transaction = require('../models/transactionModel');

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().sort({ dateDonated: -1 });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateTransactionStatus = async (req, res) => {
    try {
        const { id } = req.params; // Extract ID from request parameters
        const updatedData = req.body; // Get the entire body to allow partial updates

        // Find the transaction by ID and update it
        const updatedTransaction = await Transaction.findByIdAndUpdate(
            id,
            updatedData, // Update the fields provided in the request body
            { new: true, runValidators: true } // Return the updated document and run validators
        );

        // Check if the transaction was found and updated
        if (!updatedTransaction) {
            return res.status(404).json({ message: 'Transaction not found.' });
        }

        res.status(200).json(updatedTransaction); // Return the updated transaction
    } catch (error) {
        console.error('Error updating transaction:', error); // Log the error for debugging
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};


