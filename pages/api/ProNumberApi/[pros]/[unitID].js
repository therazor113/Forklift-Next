import { units } from '../../../../data/units'

export default function handler(req, res) {
  const { unitID } = req.query
  const unit = units.find((unit) => unit.proNumber === parseInt(unitID))
  res.status(200).json(unit)
}