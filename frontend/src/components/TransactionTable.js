import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchFields, setSearchFields] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [editingTransaction, setEditingTransaction] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/transactions`);
        setTransactions(data);
        setFilteredTransactions(data);
      } catch (err) {
        toast.error('Error fetching transactions.');
      }
    })();
  }, []);

  useEffect(() => {
    const filtered = transactions.filter(({ volunteerName, donorName, patientName, dateDonated }) =>
      [volunteerName, donorName, patientName].every((name, i) => name.toLowerCase().includes(Object.values(searchFields)[i]?.toLowerCase() || '')
      && (!searchFields.month || new Date(dateDonated).getMonth() + 1 === parseInt(searchFields.month))
      && (!searchFields.year || new Date(dateDonated).getFullYear() === parseInt(searchFields.year))
    ));
    setFilteredTransactions(filtered);
    setTotalAmount(filtered.reduce((sum, { status, amount }) => sum + (status === 'Confirmed' ? parseFloat(amount) : 0), 0));
  }, [searchFields, transactions]);

  const handleEdit = transaction => setEditingTransaction(transaction);
  const handleSave = async () => {
    try {
      const { data } = await axios.put(`${process.env.REACT_APP_API}/api/transactions/${editingTransaction._id}`, editingTransaction);
      setTransactions(prev => prev.map(t => (t._id === editingTransaction._id ? data : t)));
      setEditingTransaction(null);
      toast.success('Transaction updated successfully');
    } catch (error) {
      toast.error('Failed to update transaction');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Transaction List</h2>
      <div className="mb-4 flex gap-4 flex-wrap">
        {['name', 'donor', 'patient'].map(field => (
          <input key={field} type="text" placeholder={`Search by ${field}`} value={searchFields[field] || ''} onChange={(e) =>
            setSearchFields(s => ({ ...s, [field]: e.target.value }))} className="border rounded px-2 py-1" />
        ))}
        {['month', 'year'].map(field => (
          <select key={field} onChange={e => setSearchFields(s => ({ ...s, [field]: e.target.value }))} className="border rounded px-2 py-1">
            <option value="">{`Select ${field}`}</option>
            {Array.from({ length: field === 'month' ? 12 : 10 }, (_, i) => (
              <option key={i} value={i + (field === 'month' ? 1 : new Date().getFullYear() - i)}>
                {field === 'month' ? new Date(0, i).toLocaleString('default', { month: 'long' }) : new Date().getFullYear() - i}
              </option>
            ))}
          </select>
        ))}
      </div>
      <div className="mb-4">
        <button onClick={() => toast.info(`Total Amount: ₹${totalAmount.toFixed(2)}`)} className="bg-green-600 text-white py-2 px-4 rounded">
          Show Total Amount (Confirmed)
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          
          <thead className="bg-blue-600 text-white">
            <tr>
              {['Volunteer', 'Donor', 'Patient', 'Amount', 'Date', 'Status', 'Actions'].map(header => (
                <th key={header} className="py-2 px-4 border table-cell">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map(t => (
              <tr key={t._id} className="bg-gray-100 hover:bg-gray-200">
                {['volunteerName', 'donorName', 'patientName'].map(field => (
                  <td key={field} className="py-2 px-4 border">
                    {editingTransaction?._id === t._id ? (
                      <input type="text" value={editingTransaction[field]} onChange={(e) =>
                        setEditingTransaction(s => ({ ...s, [field]: e.target.value }))} className="border rounded px-2 py-1" />
                    ) : t[field]}
                  </td>
                ))}
                <td className="py-2 px-4 border">{`₹${parseFloat(t.amount).toFixed(2)}`}</td>
                <td className="py-2 px-4 border">{new Date(t.dateDonated).toLocaleDateString()}</td>
                <td className="py-2 px-4 border">
                  {editingTransaction?._id === t._id ? (
                    <select value={editingTransaction.status} onChange={(e) => setEditingTransaction(s => ({ ...s, status: e.target.value }))}>
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                    </select>
                  ) : t.status}
                </td>
                <td className="py-2 px-4 border">
                  {editingTransaction?._id === t._id ? (
                    <button onClick={handleSave} className="text-green-600"><FaSave /></button>
                  ) : (
                    <button onClick={() => handleEdit(t)} className="text-blue-600 mr-2"><FaEdit /></button>
                  )}
                  <button onClick={() => axios.delete(`/api/transactions/${t._id}`).then(() => setTransactions(ts => ts.filter(tx => tx._id !== t._id)))} className="text-red-600"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TransactionTable;
