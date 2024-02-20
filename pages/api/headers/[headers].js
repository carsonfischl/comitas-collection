import { headers } from '../../../headers'

export default function handler({ query: { category } }, res) {
  const filtered = headers.filter((header) => header.category === category)
    res.status(200).json(filtered[0])
}