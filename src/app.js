const express = require("express")

const healthRoute = require("./routes/health")
const usersRoute = require("./routes/users")

const app = express()

app.use(express.json())

app.use("/health", healthRoute)
app.use("/users", usersRoute)

const PORT = 3000

// Start server only if not in test environment
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

module.exports = app