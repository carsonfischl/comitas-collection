import Link from 'next/link'
import { Card, Text } from '@mantine/core';
import Image from 'next/image'
import styles from '../styles/Item.module.css'
import useFadeInOnScroll from '../hooks/useFadeInOnScroll'

const Item = ({ item }) => {
  const { ref, visible } = useFadeInOnScroll();

  return (
    <div ref={ref} className={`${styles.fadeItem} ${visible ? styles.fadeVisible : ''}`}>
      <Link href={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
        <Card shadow="sm" padding="sm" radius="md" withBorder className={styles.card} style={{ width: '14rem', height: '16rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '9rem', overflow: 'hidden', borderRadius: '4px', flexShrink: 0 }}>
            <Image src={item.pic} alt={item.title} fill style={{ objectFit: 'cover' }} />
          </div>
          <div className={styles.cardText}>
            <Text fw={500} size="sm" lineClamp={2} ta="center">{item.title}</Text>
            <Text size="xs" c="dimmed" ta="center">{item.date}</Text>
          </div>
        </Card>
      </Link>
    </div>
  )
}

export default Item
