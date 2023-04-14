const mongoose = require("mongoose")
const iceSchema = mongoose.Schema({
    shape: String,
    weight: Number,
    cost: Number
})
module.exports = mongoose.model("Ice", iceSchema)