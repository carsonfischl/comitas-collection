import Item from './Item'

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Item item={item} key={item.id}/>
      ))}
      <br></br>
    </div>
  )
}

export default ItemList