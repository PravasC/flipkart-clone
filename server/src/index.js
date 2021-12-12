//Import Express
const express = require("express");
const app = express();

//Mongodb server

require("./database/conn")

//Import DotEnv for hiddeninfo

const env = require("dotenv");

//Using Body Purser for json()

const bodyPurser = require("body-parser");
env.config();
const PORT = process.env.PORT;
app.use(bodyPurser());

//Use the Routes 

const authRoute = require("./routes/auth");
app.use(authRoute)

app.get("/" , (req , res) => {
    res.send("HELLO HOMEPAGE");
})

app.post("/data" , (req , res) => {
    res.send(req.body);
})

app.listen(PORT,() => {
    console.log(`Your Port Is ${PORT}`)
});