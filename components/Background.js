import Image from 'next/image'
import { bgWrap, bgText } from '../styles/Home.module.css'
//import { photo } from '../public/images/mainheader.jpeg'

const Background = () => (
  <div>
    <div className={bgWrap}>
      {/* <Image
        alt="background"
        src='/images/mainheader.jpeg'
        layout="fill"
        objectFit="cover"
        quality={100}
      /> */}
    </div>
  </div>
)

export default Background