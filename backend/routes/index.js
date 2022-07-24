const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

router.get("/", (req, res) => res.send("This is root!"))

router.get("/get-note", controllers.getNote)

router.post("/save-note", controllers.saveNote)

router.delete("/delete-note/:Id", controllers.deleteNote)

router.put("/update-note/:Id", controllers.updateNotes)

module.exports = router
