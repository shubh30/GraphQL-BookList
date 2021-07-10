require('dotenv').config()
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const app = express()

const dbUri = process.env.MONGODB_URI

mongoose.connect(dbUri, { 
  useNewUrlParser: true
})

mongoose.connection.once('open', () => {
  console.log('Connected to DB')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(8080, () => {
  console.log('Listening on 8080');
})