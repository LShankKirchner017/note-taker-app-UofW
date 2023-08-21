const router = require('express').Router()
const path = require('path')


// route to the index page
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

// route to the notes page
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

module.exports=router
