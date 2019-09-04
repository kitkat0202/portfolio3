const router = require("express").Router()
const messageRouter = require("./message")
const projectRouter = require("./project")

router.use("/message", messageRouter) // for all api calls to "/api/message"
router.use("/project", projectRouter) // for all api calls to "/api/project"

module.exports = router