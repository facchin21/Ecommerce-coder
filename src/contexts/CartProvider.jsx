import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Cart = createContext();

export const CartProvider = ({ children }) => {
    const initialCart = JSON.parse(localStorage.getItem('productsCart')) || [];
    
    const [cart, setCart] = useState(initialCart);
    const [quantityTotal, setQuantityTotal] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        updateQuantityTotal(cart)
    },[])

    // Guardar carrito en el localStorage cada vez que se actualize
    useEffect(() => {
        localStorage.setItem('productsCart', JSON.stringify(cart))
    }, [cart])

    const addCart = (product, productQuantity, selectSize) => {
        // Obtener el objeto de tamaño correspondiente del producto
        const sizeObj = product.sizes.find(item => item.size === selectSize);
        const stockAvailable = sizeObj ? sizeObj.stock : 0;

        // Calcular la cantidad total de ese producto en el carrito
        const totalInCart = cart.reduce((acc, cartProduct) => {
            if (cartProduct.id === product.id && cartProduct.sizeSelect === selectSize) {
                return acc + cartProduct.quantity;
            }
            return acc;
        }, 0);

        // Verificar si hay suficiente stock disponible
        if (totalInCart + productQuantity > stockAvailable) {
            toast.error(`Lo siento, no es posible agregar más ${product.title} por falta de stock`);
            return;
        }

        // Actualizar el carrito
        const productInCart = cart.find(cartProduct => cartProduct.id === product.id && cartProduct.sizeSelect === selectSize);
        let updatedCart = [...cart];

        if (productInCart) {
            updatedCart = cart.map(cartProduct => {
                if (cartProduct.id === product.id && cartProduct.sizeSelect === selectSize) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity,
                    };
                }
                return cartProduct;
            });
        } else {
            updatedCart.push({ ...product, quantity: productQuantity, sizeSelect: selectSize });
            toast.success(`Se agregó ${product.title} con éxito!`);
        }

        setCart(updatedCart);
        updateQuantityTotal(updatedCart);
    };

    const updateQuantityTotal = (updatedCart) => {
        const total = updatedCart.reduce((acc, cartProduct) => acc + cartProduct.quantity, 0);
        setQuantityTotal(total);
        getTotalPrice(updatedCart); // Actualiza el precio total cada vez que se actualiza la cantidad
    };

    const getTotalPrice = (updatedCart) => {
        const newPrice = updatedCart.reduce((acc, product) => acc + product.quantity * product.price, 0);
        setTotalPrice(newPrice);
    };

    const removeCartItem = (productId) => {
        const newCart = cart.filter(cartProduct => cartProduct.id !== productId);
        setCart(newCart);
        updateQuantityTotal(newCart);
    };

    const toggleCartVisibility = () => {
        setIsVisible(prev => !prev);
    };

    useEffect(() => {
        getTotalPrice(cart);
    }, [cart]);

    const clearCart = () => {
        setCart([]);
        setQuantityTotal(0);
        setTotalPrice(0)
    }
    return (
        <Cart.Provider value={{
            cart,
            addCart,
            clearCart,
            quantityTotal,
            isVisible,
            toggleCartVisibility,
            removeCartItem,
            totalPrice
        }}>
            {children}
        </Cart.Provider>
    );
};