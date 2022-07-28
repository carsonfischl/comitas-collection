import Link from 'next/link'
import { Card, Grid, Text, Loading } from "@nextui-org/react";
import { useState, useEffect } from 'react';

const Item = ({ item }) => {
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    const fetchData = async (item) => {
      setIsLoading(true);
 
      const result = await item.pic;
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Link href={`/item/${item.id}`}>
      <Card flat isHoverable isPressable css={{ mw: "400px" }}>
        {isLoading ? <Loading /> :
          <Card.Image src={item.pic} css={{ padding:'1rem' }}/>
        }
            <Card.Body>
                <Text>{item.title}</Text>
                <Text>{item.date}</Text>
            </Card.Body>
        </Card>
    </Link>
  )
}

export default Item