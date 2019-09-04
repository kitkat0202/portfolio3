const db = require("../models")

// Defining the CRUD methods
module.exports = {
    findAll: function(req, res) {
        db.Project.find(req.query)
            .sort({ date: -1 }) // decending order
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    findOne: function(req, res) {
        db.Project.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        db.Project.findOneAndUpdate({_id: req.params.id}, req.body, (err. data))
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    create: function(req, res) {
        db.Project.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    remove: function(req, res) {
        db.Project.findByIdAndRemove({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    }
}