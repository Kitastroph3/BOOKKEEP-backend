const express = require("express");
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database');
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ROUTES ==> Route folder
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/books', require('./routes/bookRoutes'));
app.use('/api/books', require('./routes/noteRoutes')); 


app.use(errorHandler);

app.listen(port, () => console.log(`It's alive on port ${port}`));