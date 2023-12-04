import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import Image from 'next/image'
import { Card, Grid, Text, Loading } from "@nextui-org/react"
import { items } from '../../../data'
import { useState, useEffect } from 'react'
import spinner from '../../../public/images/spinner.svg'
import styles from '../../../styles/Item.module.css'

const item = ({ result }) => {

  return (
    <>
      <Meta title={result.title} description={result.excerpt} />
      <Card style={{ alignContent: 'center', justifyContent: 'center', padding: '3rem' }}>
        <Card.Image src={result.pic} alt={result.id} layout='responsive' css={{ padding: '1rem', alignContent: 'center'}} placeholder='blur' blurDataURL={spinner}/>
        <Card.Body css={{ display: 'contents', placeItems: 'center', textAlign: 'center' }}>
          <Card.Header css={{ fontSize: '$lg', fontWeight: 'bold', display: 'block', fontSize: 'xx-large'}}>{result.title}</Card.Header>
          <br></br>
            <div>
              {result.body}
            </div>
            <br></br>
            <div>
              <strong>Date: </strong>{result.date}<br/>
            </div>
            <br></br>
            <div>
              <strong>Obverse: </strong>{result.obverse}<br/>
            </div>
            <br></br>
            <div>
             <strong>Reverse: </strong>{result.reverse}<br/>
            </div>
        </Card.Body>
      </Card>
      <br />
      <Link href='/' css={{paddingBottom: '1rem' }} className={styles.link}>Go Back</Link>
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
  const ids = Array.from(range(1,50,1)) //increment every time
  const paths = ids.map((i) => ({params:{ id: String(i)}}))
  return {
    paths,
    fallback: false,
  }
}

export default item