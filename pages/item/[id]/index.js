import Link from 'next/link'
import Meta from '../../../components/Meta'
import Image from 'next/image'
import { Card, Text } from '@mantine/core'
import { items } from '../../../data'
import styles from '../../../styles/Item.module.css'
import TypeWriter from '../../../components/TypeWriter'
import { useState } from 'react'

const SpacedField = ({ label, text, active, speed, onComplete }) => (
  <Text mb="xs" ta="left" style={{ position: 'relative' }}>
    <strong>{label} </strong>
    <span style={{ visibility: 'hidden' }}>{text}</span>
    {active && (
      <span style={{ position: 'absolute', left: 0, top: 0, right: 0, paddingLeft: `${label.length + 1}ch` }}>
        <TypeWriter text={text ?? ''} speed={speed} onComplete={onComplete} />
      </span>
    )}
  </Text>
);

const ItemPage = ({ result }) => {
  const [phase, setPhase] = useState(0);
  const advance = () => setPhase(p => p + 1);

  return (
    <>
      <Meta title={result.title} description={result.excerpt} />
      <Card shadow="sm" padding="xl" radius="md" withBorder style={{ maxWidth: '800px', margin: '2rem auto' }}>

        <h2 style={{ textAlign: 'center', marginBottom: '1rem', position: 'relative' }}>
          <span style={{ visibility: 'hidden', display: 'block' }}>{result.title}</span>
          <span style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
            <TypeWriter text={result.title} speed={60} onComplete={advance} />
          </span>
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
            {phase > 0 && <TypeWriter text={result.body ?? ''} speed={15} onComplete={advance} />}
          </span>
        </Text>

        <SpacedField label="Date:"    text={result.date ?? ''}    active={phase > 1} speed={40} onComplete={advance} />
        <SpacedField label="Obverse:" text={result.obverse ?? ''} active={phase > 2} speed={30} onComplete={advance} />
        <SpacedField label="Reverse:" text={result.reverse ?? ''} active={phase > 3} speed={30} onComplete={advance} />

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
