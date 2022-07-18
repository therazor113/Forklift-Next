import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const getByPersonId = async (req, res) => {
  const db = await open({
    filename: './tmp/database.db',
    driver: sqlite3.Database
  })

  if (req.method === 'PUT') {
    const statement = await db.prepare('UPDATE person SET name = ?, email = ? where id = ?')
    await statement.run(
      req.body.name,
      req.body.email,
      req.query.id
    )
    await db.migrate({ force: false })
  }

  const person = await db.get('SELECT * FROM person WHERE id = ?', [req.query.id])

  res.json(person)
}

export default getByPersonId
