import pool from 'lib/db'

const getUserById = async (req, res) => {
  try {
    const user = await pool.query('SELECT * FROM users WHERE id = $1', [req.query.id])
    res.json(user.rows[0])
  } catch (err) {
    console.error(err.message)
  }
}

export default getUserById
