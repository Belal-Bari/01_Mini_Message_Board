const express = require("express")
const messages = require("./messages")
const path = require("node:path")
const news = require("./routes/news")

const PORT = 3001;

const app = express()

app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('index', {messages: messages})
})
app.use("/news", news)

app.listen(PORT, () => {
    console.log("Server running on port: 3001")
})
