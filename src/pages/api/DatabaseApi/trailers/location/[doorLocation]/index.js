import pool from 'lib/db'

const getTrailerByLocation = async (req, res) => {
  try {
    const trailer = await pool.query('SELECT * FROM trailers WHERE doorlocation = $1', [req.query.doorLocation])
    res.json(trailer.rows[0])
  } catch (err) {
    console.error(err.message)
  }
}

export default getTrailerByLocation
