import { ItemCount } from './ItemCount'
import { ItemList } from './ItemList'
import '../styled/ItemListContainer.scss'

export const ItemListContainer = ({greeting}) => {
  return (
    <div className="ItemList__container">
        <h1>Bienvenidos a <span>{greeting}</span> !!</h1>
        <ItemCount/>
        <ItemList/>
    </div>
  )
}
