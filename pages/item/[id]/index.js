import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import Image from 'next/image'
import { Card, Grid, Text } from "@nextui-org/react";
import { items } from '../../../data'

const item = ({ result }) => {

  return (
    <>
      <Meta title={result.title} description={result.excerpt} />
      <Card>
        <Card.Image src={result.pic} alt={result.id} layout='fill' css={{ padding: '1rem' }}/>
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
  const ids = Array.from(range(1,46,1))
  const paths = ids.map((i) => ({params:{ id: String(i)}}))
  return {
    paths,
    fallback: false,
  }
}

export default item