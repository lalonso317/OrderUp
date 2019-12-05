const createError = require("http-errors")
const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/users")
const ingredientsRouter = require("./protected/Full-Ingredients-List")
const testCreateRecipeRouter = require("./protected/createRecipe")
const recipeRouter = require("./routes/recipes")
const connectDb = require("./mongoDB")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", userRouter)
app.use("/", ingredientsRouter)
app.use("/", testCreateRecipeRouter)

app.use("/", recipeRouter)

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
