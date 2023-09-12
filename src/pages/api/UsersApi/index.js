import pool from 'lib/db'

const getUserById = async (req, res) => {
  try {
    if (req.method !== 'POST' || !/^\d+$/.test(req.body.id)) {
      res.json(false)
      return
    }
    const { id } = req.body
    const userExists = await pool.query(
      'SELECT EXISTS (SELECT id FROM users WHERE id = $1)',
      [id]
    )
    if (!userExists.rows[0].exists) {
      res.json(false)
      return
    }
    const user = await pool.query(
      'SELECT * FROM users WHERE id = $1',
      [id]
    )
    res.json(user.rows[0])
  } catch (err) {
    console.error(err.message)
    res.json('error')
  }
}

export default getUserById
