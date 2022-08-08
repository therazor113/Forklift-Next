import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const getUserById = async (req, res) => {
  const db = await open({
    filename: './src/data/tmp/users.db',
    driver: sqlite3.Database
  })
  const user = await db.get('SELECT * FROM Users WHERE id = ?', [req.query.id])

  res.json(user)
}

export default getUserById
