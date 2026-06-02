import Link from 'next/link'
import Meta from '../../../components/Meta'
import Image from 'next/image'
import { Card, Text, Title } from '@mantine/core'
import { items } from '../../../data'
import styles from '../../../styles/Item.module.css'

const ItemPage = ({ result }) => {
  return (
    <>
      <Meta title={result.title} description={result.excerpt} />
      <Card shadow="sm" padding="xl" radius="md" withBorder style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <Title order={2} ta="center" mb="md">{result.title}</Title>
        <div style={{ position: 'relative', width: '100%', height: '350px', marginBottom: '1.5rem' }}>
          <Image src={result.pic} alt={result.title} fill style={{ objectFit: 'contain' }} />
        </div>
        <Text mb="sm">{result.body}</Text>
        <Text mb="xs"><strong>Date:</strong> {result.date}</Text>
        <Text mb="xs"><strong>Obverse:</strong> {result.obverse}</Text>
        <Text mb="xs"><strong>Reverse:</strong> {result.reverse}</Text>
      </Card>
      <div style={{ textAlign: 'center', margin: '1rem' }}>
        <Link href='/' className={styles.link}>Go Back</Link>
      </div>
    </>
  )
}

export const getStaticProps = async ({ params: { id } }) => {
  const single = items.filter(items => items.id === id)
  const result = single[0]
  return { props: { result } }
}

function* range(start, end, step) {
  while (start < end) { yield start; start += step; }
}

export const getStaticPaths = async () => {
  const ids = Array.from(range(1, 52, 1))
  const paths = ids.map((i) => ({ params: { id: String(i) } }))
  return { paths, fallback: false }
}

export default ItemPage
