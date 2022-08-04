import { headers } from '../../../headers'

export default function handler(req, res) {
  res.status(200).json(headers)
}