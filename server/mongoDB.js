const mongoose = require("mongoose")

const URI =
  "mongodb+srv://recipe-user_01:A2RhAmPSrgJ5iAw@cluster007-qpl0j.mongodb.net/test?retryWrites=true&w=majority"

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  console.log("db connected!")
}

module.exports = connectDB
