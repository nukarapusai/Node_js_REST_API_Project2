const express = require("express")

const healthRoute = require("./routes/health")
const usersRoute = require("./routes/users")

const app = express()

app.use(express.json())

app.use("/health", healthRoute)
app.use("/users", usersRoute)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app