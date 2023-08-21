const router = require('express').Router();
const path = require('path')
con
const fs = require('fs/promises')
const dbPath = path.join(__dirname, "..", "db", "db.json")
const { v4: uuidv4 } = require('uuid')

// GET Route
router.get("/api/notes", async (req, res) =>{
  try{
    const parsedDBJson = JSON.parse(await fs.readFile(dbPath))
    res.json(parsedDBJson)
  } catch (err) {
    res.status(500).send(err)
    console.log("An error occurred")
  }
})

// POST Route
router.post("/api/notes", async (req,res) => {
  try{
    const notes = JSON.parse(await fs.readFile(dbPath, "utf-8"))
    notes.push({
      title: req.body.title,
      text: req.body.text,
      id: uuidv4()
    })
    await fs.writeFile(dbPath, JSON.stringify(notes))
    res.json(notes);
  } catch(err){
    res.status(500).send(err)
    console.log("An error occurred")
  }
})







module.exports = router