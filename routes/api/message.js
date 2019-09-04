const router = require("express").Router()
const messageController = require("../../controllers/Message")

// Match with "api/message"
router
    .route("/")
    // .get(messageController.findAll)
    .post(messageController.create)

// Match with "api/message/:id"
router
    .route("/:id")
    // .get(messageController.findOne)
    .post(messageController.update)
    // .delete(messageController.remove)

module.exports = router;