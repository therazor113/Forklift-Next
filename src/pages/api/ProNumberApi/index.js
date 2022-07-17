import { units } from 'data/units'

export default function handler (req, res) {
  res.status(200).json(units)
}
