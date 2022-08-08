const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

//Routes for notepad
// router.get("/", (req, res) => res.send("This is root!"))

router.get("/get-note", controllers.getNote)

router.post("/add-note", controllers.addNote)

router.delete("/delete-note/:Id", controllers.deleteNote)

router.put("/update-note/:Id", controllers.updateNotes)

//Routes for login/register user
router.get("/get-users/", controllers.getUser)

router.post("/new-user", controllers.newUser)

//Routes for user added GIFs
router.post("/new-image", controllers.newImage)

router.get("/get-image", controllers.getImage)

router.delete("/delete-image/:Id", controllers.deleteImage)

module.exports = router
