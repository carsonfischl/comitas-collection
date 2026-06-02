import Link from 'next/link'
import Meta from '../../../components/Meta'
import Image from 'next/image'
import { Card, Text } from '@mantine/core'
import { items } from '../../../data'
import styles from '../../../styles/Item.module.css'
import TypeWriter from '../../../components/TypeWriter'
import { useState } from 'react'

const TypedField = ({ label, text, speed, onComplete }) => (
  <Text mb="xs" ta="left" style={{ position: 'relative' }}>
    <strong>{label} </strong>
    <span style={{ visibility: 'hidden' }}>{text}</span>
    <span style={{ position: 'absolute', left: 0, top: 0, paddingLeft: label ? `${label.length + 1}ch` : 0 }}>
      <TypeWriter text={text ?? ''} speed={speed} onComplete={onComplete} />
    </span>
  </Text>
);

const ItemPage = ({ result }) => {
  const [phase, setPhase] = useState(0);
  const advance = () => setPhase(p => p + 1);
  const done = (n) => phase > n;

  return (
    <>
      <Meta title={result.title} description={result.excerpt} />
      <Card shadow="sm" padding="xl" radius="md" withBorder style={{ maxWidth: '800px', margin: '2rem auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1rem', minHeight: '1.4em' }}>
          <TypeWriter text={result.title} speed={60} onComplete={advance} />
        </h2>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <Image
            src={result.pic}
            alt={result.title}
            width={600}
            height={420}
            style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <Text mb="sm" ta="left" style={{ position: 'relative' }}>
          <span style={{ visibility: 'hidden', display: 'block' }}>{result.body}</span>
          <span style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
            {done(0) && <TypeWriter text={result.body ?? ''} speed={15} onComplete={advance} />}
          </span>
        </Text>

        {done(1) && <TypedField label="Date:" text={result.date ?? ''} speed={40} onComplete={advance} />}
        {done(2) && <TypedField label="Obverse:" text={result.obverse ?? ''} speed={30} onComplete={advance} />}
        {done(3) && <TypedField label="Reverse:" text={result.reverse ?? ''} speed={30} onComplete={advance} />}
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
