const express = require('express')

const app = express()
const path = require('path')
console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log("Server starting... on port", PORT))