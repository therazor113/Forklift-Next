import { trailers } from 'data/trailers'

export default function handler (req, res) {
  const { trailerID } = req.query
  const trailer = trailers.find((trailer) => trailer.number === parseInt(trailerID))
  res.status(200).json(trailer)
}
