
import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Background from './Background'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout