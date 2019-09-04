const mongoose = require("mongoose")
const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: {
        type: String,
        index: true,
        trim: true,
        unique: true
    },
    note: String,
    link: String,
    tech: { 
        type: [String]
    },
    imgPath: String,
    type: String,
    date: Date,
    description: String
})

const Project = mongoose.model("Project", projectSchema)

module.exports = Project