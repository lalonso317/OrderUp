const db = require("../db")
const faker = require("faker")
const uuid = require("uuid/v4")
const sha512 = require("js-sha512")

const usersTimes = 100
const recipeTimes = 1000

for (let i = 0; i < usersTimes; i++) {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: sha512("password" + "abc"),
    salt: "abc"
  }

  const sql = `
      INSERT INTO users (name, email, password, salt) VALUES ("${user.name}","${user.email}","${user.password}","${user.salt}")
    `
  db.query(sql, (error, results, fields) => {
    console.log(results)
  })
}

for (let i = 0; i < recipeTimes; i++) {
  const recipe = {
    title: faker.random.words(),
    description: faker.lorem.paragraph(),
    directions: faker.lorem.paragraphs(),
    userId: Math.floor(Math.random() * 100)
  }

  const addRecipe = `
  INSERT INTO recipes (title,description,directions, user_id) VALUES ("${recipe.title}","${recipe.description}","${recipe.directions}",${recipe.userId})
`
  db.query(addRecipe, (error, results, fields) => {
    console.log(results)
  })
}
