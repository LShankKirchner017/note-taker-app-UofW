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
router.post("/api/notes")

// Delete Route







module.exports = router