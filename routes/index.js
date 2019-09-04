const apiRouters = require("./api")
const express = require("express")
const router = express.Router()

// API Routes
router.use("/api", apiRouters)

module.exports = router