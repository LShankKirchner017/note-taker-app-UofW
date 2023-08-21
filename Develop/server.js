const express = require('express')
const routes = require(/routes/page_routes)
const apiRoutes = requires(/routes/api_routes)
const PORT = 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// routes to use
app.use(page_routes)
app.use(api_routes)


// listener
app.listen(PORT, () => {
    console.log(`Note Taker Server running on http://localhost:${PORT}`)
})