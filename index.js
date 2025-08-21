// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const linkRoutes = require('./routes/linkRoutes');
const cors = require('cors');
const {getLinksByUserName} = require('./controller/linkController')

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: true,
    methods: '*',
    credentials: true,
}));

app.use(express.json());


app.use('/api/user', authRoutes);
app.use('/api/link', linkRoutes);
app.get('/:email', getLinksByUserName);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
