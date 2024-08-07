import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import route from "./routes/userRoutes.js"

const app = express();
dotenv.config();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
.then(() => {
    console.log("연결 잘 됐어!");
    app.listen(PORT, () => {
        console.log(`연결 잘 됐어요. http://127.0.0.1:${PORT}`);
    })
})
.catch((error) => console.log(error));

app.use("/user", route);

// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// });
// const userModel = mongoose.model("users", userSchema);

// app.get("/users", async (req, res) => {
//     const userData = await userModel.find();
//     res.json(userData);
// })