import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config'
import { toast } from 'react-toastify';

export const handleSubmitOrder = async (orderData, cart, totalPrice, clearCart) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      ...orderData,
      items: [
        {
          products: cart,
          total: totalPrice,
        },
      ],
      date: new Date(),
    });
    toast.success(`Orden generada con éxito! Número de orden: ${docRef.id}`);

    clearCart();

    return {
      id: docRef.id,
      ...orderData,
      items: cart,
      total: totalPrice,
      date: new Date(),
    };
  } catch (error) {
    toast.error("Hubo un error al generar la orden. Inténtalo de nuevo.");
  }
};
