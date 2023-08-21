const router = require("express").Router();
const path = require("path");
const fs = require("fs/promises")
dbFilePath = path.join(__dirname, "..", "db", "db.json")
const nanoid = require('nanoid')


// GET route
router.get('/api/notes', async (req,res) => {
  try{
    const notes = await JSON.parse(await fs.readFile(dbFilePath))
    res.json(notes)
  } catch (err) {
    res.status(500).send(err)
    console.log("An error occurred")
  }
})

// POST route
router.post("/api/notes", async (req,res) => {
  try{
    const content = await fs.readFile(dbFilePath, 'utf-8')
    const notes = JSON.parse(content)
    
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: nanoid()
    }
    notes.push(newNote)
    await fs.writeFile(dbFilePath, JSON.stringify(notes))

    res.status(201).json(notes)
  } catch (err) {
    res.status(500).send(err)
    console.log("An error occurred.")
  }
})

module.exports = router;