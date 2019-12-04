var dynamo = require("dynamodb")
dynamo.AWS.config.updata({
  accessKeyId: "AKIAQPFOQRDHIEHFGOUI",
  sercretAccessKey: "h8CBha0u+g8XHzl8eM+vMZGuge2SnSAtTtiL+WLw",
  region: "us-west-2"
})

var Account = dynamo.define("Account", {
  hashKey: "email",

  timestamps: true,
  schema: {
    email: Joi.string().email(),
    name: Joi.string(),
    age: Joi.number(),
    roles: dynamo.types.stringSet(),
    settings: {
      nickname: Joi.string(),
      acceptedTerms: Joi.boolean().default(false)
    }
  }
})
var BlogPost = dynamo.define("BlogPost", {
  haskKey: "email",
  rangeKey: "title",
  schema: {
    email: Joi.string().email(),
    title: Joi.string(),
    content: Joi.binary(),
    tags: dynamo.types.stringSet()
  }
})

dynamo.createTabels(
  {
    BlogPost: { readCapacity: 5, writeCapacity: 10 },
    Account: { readCapacity: 20, wrtieCapacity: 4 }
  },
  function(err) {
    if (err) {
      console.log("Error creating tables", err)
    } else {
      console.log("Tables have been created")
    }
  }
)
Account.create({ email: "foo@example.com", name: "Foo Bar", age: 21 }, function(
  err,
  acc
) {
  console.log("created account in DynamoDB", acc.get("email"))
})

BlogPost.create(
  {
    email: "werner@example.com",
    title: "Expanding the Cloud",
    content: "Today, we are excited to announce the limited preview..."
  },
  function(err, post) {
    console.log("created blog post", post.get("title"))
  }
)

// "use strict"
// var AWS = require("aws-sdk")

// AWS.config.update({
//   region: "us-west-2",
//   endpoint: "http://localhost:8000",
//   accessKeyId: []

// })

// var dynamodb = new AWS.DynamoDB()

// var params = {
//   TableName: "Movies",
//   KeySchema: [
//     { AttributeName: "year", KeyType: "HASH" }, //Partition key
//     { AttributeName: "title", KeyType: "RANGE" } //Sort key
//   ],
//   AttributeDefinitions: [
//     { AttributeName: "year", AttributeType: "N" },
//     { AttributeName: "title", AttributeType: "S" }
//   ],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 10,
//     WriteCapacityUnits: 10
//   }
// }

// dynamodb.createTable(params, function(err, data) {
//   if (err) {
//     console.error(
//       "Unable to create table. Error JSON:",
//       JSON.stringify(err, null, 2)
//     )
//   } else {
//     console.log(
//       "Created table. Table description JSON:",
//       JSON.stringify(data, null, 2)
//     )
//   }
// })
