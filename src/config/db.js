const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://Saravana:0258Saro@cluster0.cl4pj.mongodb.net/oauth")
}