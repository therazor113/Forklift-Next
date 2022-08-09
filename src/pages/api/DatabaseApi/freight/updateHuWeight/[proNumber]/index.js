/* eslint-disable no-unused-vars */
import pool from 'lib/db'

const updateFreightHuWeight = async (req, res) => {
  try {
    const freight = await pool.query('UPDATE freight SET handlingunits = $1, totalweight = $2 WHERE pronumber = $3',
      [req.body.handlingUnits, req.body.totalWeight, req.query.proNumber])
    res.json('Freight Updated')
  } catch (err) {
    console.error(err.message)
  }
}

export default updateFreightHuWeight
