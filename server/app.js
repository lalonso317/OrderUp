const express = require("express")
const createError = require("http-errors")
const cors = require("cors")

const ingredientsRouter = require("./protected/Full-Ingredients-List")
const testCreateRecipeRouter = require("./protected/createRecipe")
const protectedRouter = require("./routes/protected")
const recipeRouter = require("./routes/recipes")
const usersRouter = require("./routes/users")
const loginRouter = require("./routes/login")
const registerRouter = require("./routes/registration")

const connectDb = require("./mongoDB")
const config = require("config")
const jwt = require("express-jwt")
const expressValidator = require("express-validator")
const expressSession = require("express-session")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(expressValidator())
app.use("/", ingredientsRouter)
app.use("/", testCreateRecipeRouter)

app.use("/", registerRouter)
app.use("/", loginRouter)
app.use("/", usersRouter)
app.use("/", recipeRouter)


//app.use("/", recipeRouter)
// app.use("/", jwt({ secret: config.get("secret") }), protectedRouter)
// app.use("/", recipeRouter)
// app.use(
//   expressSession({
//     secret: config.get("secret"),
//     saveUninitialized: false,
//     resave: false
//   })
// )


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
