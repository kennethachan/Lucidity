const express = require("express")
const cors = require("cors")
const logger = require("morgan")
const db = require("./db")
const Note = require("./models/Notes")
const Parser = require("body-parser")
const routes = require("./routes/index")

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger("dev"))
app.use(Parser.json())
app.use(routes)

// app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  console.error(err)
  res.status(err.status || 500)
  res.render("error", {
    message: err.message,
    error: err,
  })
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
