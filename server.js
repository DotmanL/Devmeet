const express = require('express');
const connectDB = require('./config/db');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config()

if (process.env.NODE_ENV !== 'production') require ('dotenv').config();

//Connect Database
connectDB();


app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));
app.use(bodyParser.json());

//Define Routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
