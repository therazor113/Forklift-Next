import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const editFreightByPro = async (req, res) => {
  const db = await open({
    filename: './tmp/database.db',
    driver: sqlite3.Database
  })
  if (req.method === 'PUT') {
    const statement = await db.prepare(
      'UPDATE Freight SET loaded = ?, docked = ?, onTrailer = ? WHERE proNumber = ?'
    )
    await statement.run(
      req.body.loaded,
      req.body.docked,
      req.body.onTrailer,
      req.query.proNumber
    )
    await db.migrate({ force: true })
  }
  const freight = await db.get('SELECT * FROM Freight WHERE proNumber = ?', [req.query.proNumber])
  res.json(freight)
}

export default editFreightByPro
