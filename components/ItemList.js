import Item from './Item'
import styles from '../styles/Itemgrid.module.css'

const ItemList = ({ items }) => {
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
 
      const result = await item;
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.itemgrid}>
      {isLoading ? <Loading /> :
        {items.map((item) => (
          <Item item={item} key={item.id}/>
        ))}
      }
    </div>
  )
}

export default ItemList