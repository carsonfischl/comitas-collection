import { items } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = items.filter((item) => item.id === id)
    res.status(200).json(filtered[0])
}