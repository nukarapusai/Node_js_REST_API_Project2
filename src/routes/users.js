const express = require("express")
const router = express.Router()

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sai" }
]

router.get("/", (req, res) => {
  res.json(users)
})

module.exports = router