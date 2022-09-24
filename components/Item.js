import Link from 'next/link'
import { Card, Grid, Text, Loading } from "@nextui-org/react";
import { useState } from 'react';
import Loader from '../components/Loader'
import spinner from '../public/images/spinner.svg'

const Item = ({ item }) => {

  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <Link href={`/item/${item.id}`}>
      <Card flat isHoverable isPressable css={{ mw: "400px", alignContent: 'center'}}>
         <Card.Image src={item.pic} alt={item.id} layout='responsive' css={{ padding: '1rem', alignContent: 'center'}} placeholder='blur' blurDataURL='/../public/images/spinner.svg'/>
            <Card.Body css={{ display: 'contents', textAlign: 'center'}}>
                <Text>{item.title}</Text>
                <Text>{item.date}</Text>
            </Card.Body>
        </Card>
    </Link>
  )
}

export default Item