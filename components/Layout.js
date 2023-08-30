
import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Background from './Background'
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
          <Analytics/>
        </main>
      </div>
    </>
  )
}

export default Layout