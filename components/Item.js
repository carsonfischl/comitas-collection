import Link from 'next/link'
import { Card, Grid, Text } from "@nextui-org/react";
const Item = ({ item }) => {
  return (
    <Link href={`/item/${item.id}`}>
      <Card flat isHoverable isPressable css={{ mw: "400px" }}>
          <Card.Image src={item.pic}/>
            <Card.Body>
                <Text>{item.title}</Text>
                <Text>{item.date}</Text>
            </Card.Body>
        </Card>
    </Link>
  )
}

export default Item