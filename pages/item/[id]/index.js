import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import Image from 'next/image'
import { Card, Grid, Text, Loading } from "@nextui-org/react"
import { items } from '../../../data'
import { useState, useEffect } from 'react'

const item = ({ result }) => {

  return (
    <>
      <Meta title={result.title} description={result.excerpt} />
      <Card>
        <Card.Image src={result.pic} alt={result.id} layout='fill' css={{ padding: '1rem', alignContent: 'center' }}/>
        <Card.Body>
        {result.title} 
        <br></br>
        {result.body}
        </Card.Body>
      </Card>
      <br />
      <Link href='/' css={{color: '$black', paddingBottom: '1rem' }}>Go Back</Link>
    </>
  )
}

export const getStaticProps = async ({ params: { id } }) => {
  const single = items.filter(items => items.id === id)
  const result = single[0]
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
  const ids = Array.from(range(1,45,1))
  const paths = ids.map((i) => ({params:{ id: String(i)}}))
  return {
    paths,
    fallback: false,
  }
}

export default item