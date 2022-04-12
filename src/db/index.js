const { connect } = require("mongoose");

const uri = "mongodb+srv://naresh:FgAjM_pfBGhcE8b@cluster0.su13v.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)
    