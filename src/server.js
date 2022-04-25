const express = require("express");
require("./db");
const TodoRouter = require("./routes/todo.routes");
const cors = require('cors')


const app = express();

app.use(cors())

app.use(express.json());

app.get("/",(req, resp)  => {
    resp.sendFile(__dirname+"/public/index.html")
})


app.use("/api/todos", TodoRouter);

module.exports = app;