import { names } from 'data/names'

export default function handler (req, res) {
  res.status(200).json(names)
}
