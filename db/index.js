const pg = require('pg')

const conString = process.env.CONNECTION_STRING

const client = new pg.Client(conString)
client.connect()

module.exports = {
  query: (text, params) => client.query(text, params)
}
