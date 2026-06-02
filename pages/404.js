import Link from 'next/link'
import TypeWriter from '../components/TypeWriter'
import { useState } from 'react'
import styles from '../styles/NotFound.module.css'

export default function NotFound() {
  const [lineDone, setLineDone] = useState(false);

  return (
    <div className={styles.container}>
      <p className={styles.code}>404</p>
      <h1 className={styles.heading}>
        <TypeWriter text="Page not found." speed={60} onComplete={() => setLineDone(true)} />
      </h1>
      <p className={styles.sub}>
        {lineDone && (
          <TypeWriter
            text="This coin has left the collection — or never entered it."
            speed={35}
          />
        )}
      </p>
      <Link href="/" className={styles.link}>Return to the collection</Link>
    </div>
  )
}
