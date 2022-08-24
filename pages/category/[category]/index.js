import { useRouter } from "next/router"
import Header from "../../../components/Header"
import ItemList from "../../../components/ItemList"
import Link from "next/link"
import { items } from "../../../data"
import { headers } from "../../../headers"
import Meta from "../../../components/Meta"

const Category = ({ result, header}) => {
    const router = useRouter()
    const category = router.query.category
    
  return (
      <>
       <Meta title={header.title}/>
        <div>
          <Header header={header}/>
        </div>
        <div>
          <ItemList items={result}/>
        </div>
        <Link style={{color: '$black', paddingBottom: 'center'}} href='/'>Go Back</Link>
      </>
    )
  }
  
  export const getStaticProps = async ({ params: { category } }) => {
    const result = items.filter(items => items.category === category)
    const single = headers.filter(headers => headers.category === category)
    const header = JSON.stringify(single[0])
    return {
      props: {
        result,
        header,
      },
    }
  }

  export const getStaticPaths = async () => {

    const categories = Array.from(new Set(items.map(items => items.category)))
    const paths = categories.map((category) => ({params:{ category: String(category)}}))
    return {  
      paths,
      fallback: false,
    }
  }

export default Category