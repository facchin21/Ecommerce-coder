import { useState } from "react"
import { FaShoppingCart } from "react-icons/fa"


export const CartWidget = () => {
    const [amount, setAmount] = useState(1)

  return (
    <div className="cart-widget">
        <FaShoppingCart size={24} className="cart__item"/>
        <span className="notification-badge">{amount}</span>
    </div>
  )
}
