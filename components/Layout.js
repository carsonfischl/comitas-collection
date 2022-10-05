
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
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout