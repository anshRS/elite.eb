import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express()

const PORT = process.env.PORT || '8000'

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})