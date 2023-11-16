import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import ConnectDB from "./database/db.js";
import router from "./routes/index.js";


dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',router);

const PORT = process.env.PORT || '8000'
const MONGO_URL = process.env.MONGO_URL

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})

ConnectDB(MONGO_URL);