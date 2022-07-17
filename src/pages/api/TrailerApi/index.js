import { trailers } from 'data/trailers'

export default function handler (req, res) {
  res.status(200).json(trailers)
}
