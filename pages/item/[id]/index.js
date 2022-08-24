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
      <Card style={{ alignContent: 'center', justifyContent: 'center'}}>
        <Card.Image src={result.pic} alt={result.id} layout='fill' css={{ padding: '1rem', alignContent: 'center' }} placeholder='blur'/>
        <Card.Body>
          <Card.Header>{result.title}</Card.Header>
            {result.body}
            <strong>Date: </strong>{result.date}<br/>

            <strong>Obverse: </strong>{result.obverse}<br/>
            <strong>Reverse: </strong>{result.reverse}<br/>
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