const pg = require('pg')

const conString = process.env.DATABASE_URL

const client = new pg.Client(conString)
client.connect()

module.exports = {
  query: (text, params) => client.query(text, params)
}
