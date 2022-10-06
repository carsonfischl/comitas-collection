import Link from 'next/link'
import { Card, Grid, Text, Loading } from "@nextui-org/react";
import { useState } from 'react';

const Item = ({ item }) => {
  
  return (
    <Link href={`/item/${item.id}`}>
      <Card flat isHoverable isPressable css={{ mw: "400px"}}>
         <Card.Image src={item.pic} alt={item.id} layout='responsive' css={{ padding: '1rem', alignContent: 'center' }} placeholder='blur'/>
            <Card.Body>
                <Text>{item.title}</Text>
                <Text>{item.date}</Text>
            </Card.Body>
        </Card>
    </Link>
  )
}

export default Item