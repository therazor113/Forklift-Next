import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const getByVehicleId = async (req, res) => {
  const db = await open({
    filename: './tmp/database.db',
    driver: sqlite3.Database
  })
  const vehicle = await db.get('SELECT * FROM vehicle WHERE id = ?', [req.query.id])

  res.json(vehicle)
}

export default getByVehicleId
