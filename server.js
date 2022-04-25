const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors);

app.get('/', (req, res) => {
    res.send('hellor world')

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('You are connected!');
});