const router = require("express").Router()
const projectController = require("../../controllers/Project")

// Match with "api/project"
router
    .route("/")
    .get(projectController.findAll)
    // .post(projectController.create)

// Match with "api/project/:id"
router
    .route("/:id")
    .get(projectController.findOne)
    // .post(projectController.update)
    // .delete(projectController.remove)

module.exports = router;