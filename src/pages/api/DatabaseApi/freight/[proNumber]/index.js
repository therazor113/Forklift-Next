import pool from 'lib/db'

const getFreightByPro = async (req, res) => {
  try {
    const freight = await pool.query('SELECT * FROM freight WHERE pronumber = $1', [req.query.proNumber])
    res.json(freight.rows[0])
  } catch (err) {
    console.error(err.message)
  }
}

export default getFreightByPro
