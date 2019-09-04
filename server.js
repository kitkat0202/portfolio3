// Dependencies
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const keys = require("./config/keys")

const app = express()
const PORT = process.env.PORT || 8080

// Define middleware
// app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Add routes, both API and views
app.use(routes)

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))

    const path = require("path")

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

mongoose
    .connect(keys.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(`error: ${err}`))

// Start the server
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT} link to server is: http://localhost:${PORT}`)
})