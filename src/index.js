require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const PORT = process.env.PORT || 3333;
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());
app.use(routes);

try {
    app.listen(PORT)
} catch (err) {
    console.log(err)
}