import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const getTrailerById = async (req, res) => {
  const db = await open({
    filename: './tmp/database.db',
    driver: sqlite3.Database
  })

  const trailer = await db.get('SELECT * FROM Trailers WHERE trailerId = ?', [req.query.trailerId])

  res.json(trailer)
}

export default getTrailerById
