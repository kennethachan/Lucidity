const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

router.get("/", (req, res) => res.send("This is root!"))

router.get("/get-todo", controllers.getNote)

router.post("/save-todo", controllers.saveNote)

router.post("/delete-todo", controllers.deleteNote)

router.post("/update-todo", controllers.updateNotes)

module.exports = router
