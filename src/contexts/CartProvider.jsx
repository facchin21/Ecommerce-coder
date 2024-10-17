import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify";

export const Cart = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantityTotal, setQuantityTotal] = useState(0);
    const [isVisible, setIsVisible] = useState(false)
    const [totalPrice , setTotalPrice] = useState(0)

    const addCart = (product, productQuantity, selectSize) => {
        
        if (!isStockAvailable(product.stock[selectSize])) {
            toast.error(`Lo siento, no es posible agregar mas ${product.title} por falta de stock`);
            return;
        }

        const productInCart = isExits(product.id);
        let cartUpdated = [...cart];

        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {

                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: (cartProduct.quantity || 0) + productQuantity 
                    };
                }
                return cartProduct; // Devuelve el producto sin cambios si no es el que estás actualizando
            });
        } else {
            cartUpdated.push({ ...product, quantity: productQuantity, sizeSelect: selectSize});
            toast.success(`Se agrego ${product.title} con exito!`)
        }

        setCart(cartUpdated);
        updateQuantityTotal(cartUpdated);
    }

    const isStockAvailable = (stockSelect) => {
        return cart.reduce((acc, product) => acc + product.quantity, 0) < stockSelect;
    }
    
    const updateQuantityTotal = (updatedCart) => {
        const total = updatedCart.reduce((acc, cartProduct) => acc + cartProduct.quantity, 0)
        setQuantityTotal(total)
    }

    const isExits = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId)
    }

    const toggleCartVisibility = () => {
        setIsVisible(prev => !prev)
    }

    const removeCartItem = (productId) => {
        const newCart = cart.filter(cartProduct => cartProduct.id !== productId)
        setCart(newCart)
        updateQuantityTotal(newCart);
        getTotalPrice(newCart);
    }
    const getTotalPrice = () =>{
        const newPrice = cart.reduce((acc, product) => acc + product.quantity * product.price, 0)
        setTotalPrice(newPrice)
    }

    useEffect(() => {
        getTotalPrice();
    }, [cart]);

    return (
        <Cart.Provider value={{ cart,
         addCart,
         quantityTotal,
         isVisible,
         toggleCartVisibility,
         removeCartItem,
         totalPrice
          }}>
            {children}
        </Cart.Provider>
    );
}
