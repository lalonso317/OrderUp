const express = require("express")
const createError = require("http-errors")
const cors = require("cors")
const recipeRouter = require("./routes/recipes")
const usersRouter = require("./routes/users")
const loginRouter = require("./routes/login")
const registerRouter = require("./routes/registration")
const connectDb = require("./mongoDB")
const ratingRouter = require("./routes/ratings")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/", registerRouter)
app.use("/", loginRouter)
app.use("/", usersRouter)
app.use("/", recipeRouter)
app.use("/", ratingRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({
    status: err.status,
    error: err
  })
})

connectDb()
app.listen(8080, () => {
  console.log("Listening on port 8080")
})
