import { trailers } from '../../../../data/trailers'

export default function handler(req, res) {
  const { locationID } = req.query
  const loaded = trailers.find((loaded) => loaded.location === parseInt(locationID))
  res.status(200).json(loaded)
}