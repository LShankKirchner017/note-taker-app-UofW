const express = require('express')
const routes = require(/routes/routes)
const apiRoutes = requires(/routes/apiRoutes)
const PORT = 3001;
const app = express();

app.use(express)
app.use(routes)
app.use(apiRoutes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})