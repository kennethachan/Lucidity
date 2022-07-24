const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

router.get("/", (req, res) => res.send("This is root!"))

router.get("/get-note", controllers.getNote)

router.post("/add-note", controllers.addNote)

router.delete("/delete-note/:Id", controllers.deleteNote)

router.put("/update-note/:Id", controllers.updateNotes)

router.get("/get-users/:user-:password", controllers.getUser)

router.post("/new-user", controllers.newUser)

module.exports = router
