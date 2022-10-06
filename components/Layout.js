
import React from 'react'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Background from './Background'
import Nav from './Nav'

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