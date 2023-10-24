import Link from 'next/link'
import { Card, Grid, Text, Loading, StyledPre } from "@nextui-org/react";
import { useState, useEffect } from 'react';
import Loader from '../components/Loader'
import spinner from '../public/images/spinner.svg'

const Item = ({ item }) => {

  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await {item};   
    };
    fetchData();
    setIsLoading(false);
  }, []);
  
  return (
    <Link href={`/item/${item.id}`}>
      <Card flat isHoverable isPressable css={{ alignContent: 'center', width: '14rem', minHeight: '12rem', height: '16rem'}}>
        {isLoading ? (
          <Loader />
        ) : (
         <Card.Image src={item.pic} alt={item.id} layout='responsive' css={{ alignContent: 'center', padding: '1rem'}} placeholder='blur' blurDataURL='/../public/images/spinner.svg'/>
        )}
            <Card.Body css={{ display: 'contents', textAlign: 'center', display: 'inline-grid'}}>
                <Text>{item.title}</Text>
                <Text>{item.date}</Text>
            </Card.Body>
        </Card>
    </Link>
  )
}

export default Item