import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const getAllVehiclesByOwnerId = async (req, res) => {
  const db = await open({
    filename: './tmp/database.db',
    driver: sqlite3.Database
  })
  const allVehicle = await db.all('SELECT * FROM vehicle WHERE ownerId = ?', [req.query.id])

  res.json(allVehicle)
}

export default getAllVehiclesByOwnerId
