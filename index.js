const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3250;

app.use(cors());
app.use(express.json());

app.get("/url", (req, res, next) => {
    return res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

const server = app.listen(PORT, () => {
    console.log(`Server running at ${PORT}!`);
});

module.exports = server;