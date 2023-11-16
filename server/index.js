import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const PORT = process.env.PORT || '8000'

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})