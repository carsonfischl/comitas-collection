import { Dropdown, Navbar, Link, Button, Modal, Text } from "@nextui-org/react";
import navStyles from "../styles/Nav.module.css";
import React from "react";
import Form from "./Form";

import { GiRomanShield } from 'react-icons/gi';
import { GiGreekSphinx } from 'react-icons/gi';
import { GiMedievalPavilion } from 'react-icons/gi';
import { GiTowerBridge } from 'react-icons/gi';


export default function App() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
  return (
    <span className={navStyles.bar}>
        
        
    </span>
  );
}
