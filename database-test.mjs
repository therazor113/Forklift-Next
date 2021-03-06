import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

(async () => {
  try {
    const db = await open({
      filename: './tmp/database.db',
      driver: sqlite3.Database
    })
    await db.migrate({ force: true, migrationsPath: './migrations' })
    // console.logs ALL FREIGHT in database
    const trailers = await db.all('SELECT * FROM Trailers')
    console.log('ALL TRAILERS', trailers)
    // console.logs ALL TRAILERS in database
    const freight = await db.all('SELECT * FROM Freight')
    console.log('ALL FREIGHT', freight)
  } catch (err) { console.log(err) }

  try {
    const db = await open({
      filename: './tmp/users.db',
      driver: sqlite3.Database
    })
    await db.migrate({ force: true, migrationsPath: './migrations' })
    // console.logs ALL USERS in database
    const users = await db.all('SELECT * FROM Users')
    console.log('ALL USERS', users)
  } catch (err) { console.log(err) }
})()
