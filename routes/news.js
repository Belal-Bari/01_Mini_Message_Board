const { Router } = require("express")
const messages = require("../messages")

const router = Router()

router.get("/", (req, res) => {
    res.render("form", {messages: messages})
})

router.post("/", (req, res) => {
    console.log(req.body)
    const { user, text } = req.body;
    messages.push({
        user: user,
        text: text,
        added: new Date()
    })
    res.redirect("/");
})

module.exports = router;
