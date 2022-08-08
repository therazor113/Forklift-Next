import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const getFreightByPro = async (req, res) => {
  const db = await open({
    filename: './src/data/tmp/database.db',
    driver: sqlite3.Database
  })
  const freight = await db.get('SELECT * FROM Freight WHERE proNumber = ?', [req.query.proNumber])
  res.json(freight)
}

export default getFreightByPro
