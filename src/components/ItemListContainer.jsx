import '../styled/ItemList.scss'
import { ItemCount } from './ItemCount'
export const ItemListContainer = ({greeting}) => {
  return (
    <div className="ItemList__container">
        <h1>Bienvenidos a <span>{greeting}</span> !!</h1>
        <ItemCount/>
    </div>
  )
}
