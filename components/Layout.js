
import React from 'react'
import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'
import Background from './Background'
import { Navbar, Button, Text, useTheme } from "@nextui-org/react";

const Layout = ({ children }) => {

  const [variant, setVariant] = React.useState("sticky");
  const { isDark } = useTheme();
  // const variants = ["static", "floating", "sticky"];
  const [activeColor, setActiveColor] = React.useState("primary");
  const variants = [
    "default",
    "highlight",
    "highlight-solid",
    "underline",
    "highlight-rounded",
    "highlight-solid-rounded",
    "underline-rounded",
  ];

  const colors = ["primary", "secondary", "success", "warning", "error"];

  return (
    <>
      <Navbar isBordered={isDark} variant={variant}>
        <Navbar.Content hideIn="xs" className={styles.navbargroup}>
          <Navbar.Link href="/category/hellenistic">Hellenistic</Navbar.Link>
          <Navbar.Link href="/category/roman">Roman</Navbar.Link>
          <Navbar.Link href="/category/medieval">Medieval</Navbar.Link>
          <Navbar.Link href="/category/earlymodern">Early Modern</Navbar.Link>
        </Navbar.Content>
      </Navbar>
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout