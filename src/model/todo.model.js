const { Schema, model } = require("mongoose")

const todoSchema = new Schema({
    title : String,
    status : Boolean
})

module.exports = model("Todo", todoSchema);