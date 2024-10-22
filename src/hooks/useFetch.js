import { useEffect, useState } from "react";
// import { products } from '../data/Mock.Products'
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export function useFetch() {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllProducts(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setError("No hay productos encontrados");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  return { allProducts, error, loading };
}
