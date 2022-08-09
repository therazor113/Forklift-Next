/* eslint-disable no-unused-vars */
import pool from 'lib/db'

const editFreightByPro = async (req, res) => {
  try {
    const freight = await pool.query(
      'UPDATE freight SET loaded = $1, docked = $2, ontrailer = $3 WHERE pronumber = $4',
      [req.body.loaded, req.body.docked, req.body.onTrailer, req.query.proNumber])
    res.json('Freight location Updated')
  } catch (err) {
    console.error(err.message)
  }
}

export default editFreightByPro
