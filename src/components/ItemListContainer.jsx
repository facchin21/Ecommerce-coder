import '../styled/ItemList.scss'
export const ItemListContainer = ({greeting}) => {
  return (
    <div className="ItemList__container">
        <h1>Bienvenidos a <span>{greeting}</span> !!</h1>
    </div>
  )
}
