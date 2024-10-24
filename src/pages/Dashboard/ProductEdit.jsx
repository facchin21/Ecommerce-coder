import React, { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"; // Asegúrate de importar deleteDoc
import { useParams, useNavigate } from 'react-router-dom'; // Importa useNavigate para redireccionar
import { db } from '../../firebase/config';
import { Loader } from '../../components/Loader';
import { ModalEdit } from '../../components/ModalEdit';
import styles from '../../styled/ProductEdit.module.scss';
import { toast } from 'react-toastify';

export const ProductEdit = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const navigate = useNavigate(); // Inicializa useNavigate para redirigir después de eliminar

  useEffect(() => {
    const getProduct = async () => {
      if (!productId) {
        console.error("No product ID provided");
        return;
      }

      const docRef = doc(db, "productos", productId);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    getProduct();
  }, [productId]);

  const handleEditClick = () => {
    setModalIsVisible(true);
  };

  const handleSave = async (updatedProduct) => {
    try {
      const productRef = doc(db, "productos", productId);
      await updateDoc(productRef, updatedProduct);
      setProduct(updatedProduct); // Actualiza el producto en el estado local
      toast.success(`Producto ${updatedProduct.title} actualizado correctamente.`);
    } catch (error) {
      console.error("Error updating document:", error);
      toast.error("Error al actualizar el producto.");
    }
  };
  const handleImageUpload = async (imageFile, updatedProduct) => {
    const storage = getStorage();
    const imageRef = ref(storage, `productos/${productId}/${imageFile.name}`);

    try {
      await uploadBytes(imageRef, imageFile);
      const downloadURL = await getDownloadURL(imageRef);

      const updatedProductWithImage = { ...updatedProduct, pictureUrl: downloadURL };
      await handleSave(updatedProductWithImage);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const deleteProduct = async () => {
    if (!product) return; // Asegúrate de que el producto está definido

    try {
      const productDocRef = doc(db, "productos", productId);
      await deleteDoc(productDocRef);
      toast.success(`El producto ${product.title} eliminado correctamente.`);

      navigate('/dashboard/listproducts');
    } catch (error) {
      toast.error("Error al eliminar el producto: " + error.message);
    }
  };

  return (
    <main className={styles.container__editProduct}>
      {product ? (
        <article className={styles.container__product}>
          <span
            className={styles.delete__product}
            onClick={deleteProduct}
          >
            Eliminar producto
          </span>
          <h1 className={styles.product__title}>{product.title}</h1>

          <img src={product.pictureUrl}
            alt={product.title}
            className={styles.image__product} />

          <p className={styles.subtitle}>Descripción:
            <span className={styles.text}> {product.description}</span>
          </p>

          <p className={styles.subtitle}>Categoría:
            <span className={styles.text}> {product.category}</span>
          </p>

          <p className={styles.subtitle}>Subcategoría:
            <span className={styles.text}> {product.subcategory}</span>
          </p>

          <p className={styles.subtitle}>Precio:
            <span className={styles.text}> ${product.price}</span>
          </p>

          <div>
            <h3 className={styles.title__size}>Talles y Stock disponibles:</h3>
            <ul className={styles.list_size}>
              {product.sizes.map((sizeObj, index) => (
                <li key={index}>
                  {sizeObj.size} (Stock: {sizeObj.stock})
                </li>
              ))}
            </ul>
          </div>
          <button onClick={handleEditClick} className={styles.button}>Editar producto</button>
        </article>
      ) : (
        <Loader />
      )}

      {modalIsVisible && (
        <ModalEdit
          product={product}
          onSave={handleSave}
          onImageUpload={handleImageUpload}
          onClose={() => setModalIsVisible(false)}
        />
      )}
    </main>
  );
};
