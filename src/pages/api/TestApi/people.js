import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const getPeople = async (req, res) => {
  const db = await open({
    filename: './tmp/database.db',
    driver: sqlite3.Database
  })
  const people = await db.all('SELECT * FROM person')

  res.json(people)
}

export default getPeople
