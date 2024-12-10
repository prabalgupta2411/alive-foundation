const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const patientRoutes = require('./routes/patientRouter');
const volunteerRoutes = require('./routes/volunteerRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRouter'); // Adjust the path as necessary
const donorRouter = require('./routes/donorRouter');
const paymentRoutes = require('./routes/paymentRoutes');

const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public')); 

app.use('/api/payments', paymentRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/donors', donorRouter);
  
const testRoutes = require('./routes/testRoutes');

app.use('/api', testRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
