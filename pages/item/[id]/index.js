import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import Image from 'next/image'
import { Card, Grid, Text, Loading} from "@nextui-org/react"
import { items } from '../../../data'
import { useState, useEffect } from 'react'

const item = ({ result }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
 
      const i = await result;  
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Meta title={result.title} description={result.excerpt} />
      <Card>
        { isLoading ? <Loading /> :
          <Card.Image src={result.pic} alt={result.id} layout='fill' css={{ padding: '1rem' }}/>
        }
        <Card.Body>
        {result.title} 
        {result.body}
        </Card.Body>
      </Card>
      <br />
      <Link href='/' css={{color: '$black'}}>Go Back</Link>
    </>
  )
}

export const getStaticProps = async ({ params: { id } }) => {
  const single = items.filter(items => items.id === id)
  console.log(single)
  const result = single[0]
  console.log(result)
  return {
    props: {
      result,
    },
  }
}

function* range(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}

export const getStaticPaths = async () => {
  const ids = Array.from(range(1,47,1))
  const paths = ids.map((i) => ({params:{ id: String(i)}}))
  return {
    paths,
    fallback: false,
  }
}

export default item