import Nav from './Nav'
import Loader from './Loader'
import styles from '../styles/Layout.module.css'
import { Analytics } from '@vercel/analytics/react';

const Layout = ({ children, isLoading }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {isLoading ? <Loader /> : children}
          <Analytics />
        </main>
      </div>
    </>
  )
}

export default Layout
