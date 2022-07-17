import { names } from 'data/names'

export default function handler (req, res) {
  const { userId } = req.query
  const user = names.find((user) => user.id === parseInt(userId))
  res.status(200).json(user)
}
