const mongoose = require("mongoose")
const iceSchema = mongoose.Schema({
    shape: {
        type: String,
        required: [true, "shape not entered"],
    },
    weight: {
        type: Number,
        required: [true, "weight not entered"],
        min: 0,
        max: 1000
    },
    cost: {
        type: Number,
        required: [true, "cost not entered"],
        min: 0,
        max: 100
    }
})
module.exports = mongoose.model("Ice", iceSchema)