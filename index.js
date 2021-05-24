const express = require('express');
const cors = require('cors');
const PORT = 3001;
const urlRoutes = require('./routes/url');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/url', urlRoutes);

app.listen(
    PORT,
    () => { console.log(`Listening on port ${PORT}`) }
);
