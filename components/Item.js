import Link from 'next/link'
import { Card, Grid, Text, Loading } from "@nextui-org/react";
import { useState } from 'react';
import Loader from '../components/Loader'
import spinner from '../public/images/spinner.svg'
import styles from '../styles/Item.module.css'

const Item = ({ item }) => {
  
  return (
    <Link href={`/item/${item.id}`}>
      <Card flat isHoverable isPressable css={{ mw: "400px"}} className={styles.card}>
         <Card.Image src={item.pic} alt={item.id} layout='responsive' css={{ padding: '1rem', alignContent: 'center' }} placeholder='blur' blurDataURL={spinner}/>
            <Card.Body className={styles.card}>
                <Text className={styles.card}>{item.title}</Text>
                <Text className={styles.card}>{item.date}</Text>
            </Card.Body>
        </Card>
    </Link>
  )
}

export default Item