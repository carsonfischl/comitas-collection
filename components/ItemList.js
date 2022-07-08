import Item from './Item'
import styles from '../styles/Itemgrid.module.css'

const ItemList = ({ items }) => {
  return (
    <div className={styles.itemgrid}>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </div>
  )
}

export default ItemList