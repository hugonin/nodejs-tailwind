const express = require("express")
const path = require("path");

const app = express()
const port = 3000 

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "website")));

app.get("/", function (req, res) {
    res.sendFile(__dirname +  "/website/index.html")
})

app.listen(port, () => {
    console.log(`The server started on port ${port}`)
})