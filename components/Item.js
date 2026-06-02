import Link from 'next/link'
import { Card, Text } from '@mantine/core';
import Image from 'next/image'

const Item = ({ item }) => {
  return (
    <Link href={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
      <Card shadow="sm" padding="sm" radius="md" withBorder style={{ width: '14rem', height: '16rem', cursor: 'pointer' }}>
        <Card.Section style={{ position: 'relative', height: '9rem' }}>
          <Image src={item.pic} alt={item.title} fill style={{ objectFit: 'cover' }} />
        </Card.Section>
        <Text fw={500} size="sm" mt="xs" lineClamp={2}>{item.title}</Text>
        <Text size="xs" c="dimmed">{item.date}</Text>
      </Card>
    </Link>
  )
}

export default Item
