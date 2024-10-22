import React, { useEffect, useState } from 'react';
import { db, storage } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import styles from '../../styled/ProductFrom.module.scss';
import { itemsNavBar } from '../../data/itemsNavBar';

export function ProductForm() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [pictureFile, setPictureFile] = useState(null);
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [sizes, setSizes] = useState([{ size: '', stock: '' }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [subcategoryOptions, setSubcategoryOptions] = useState([]);

  useEffect(() => {
    const categories = itemsNavBar[2].subcategorias;
    setCategoryOptions(categories);
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubcategory(''); // Reinicia la subcategoría
    const subcategories = categoryOptions.find((cat) => cat.name === selectedCategory)?.subcategorias || [];
    setSubcategoryOptions(subcategories);
  };

  const handleAddSize = () => {
    setSizes([...sizes, { size: '', stock: '' }]);
  };

  const handleSizeChange = (index, key, value) => {
    const updatedSizes = sizes.map((item, idx) =>
      idx === index ? { ...item, [key]: value } : item
    );
    setSizes(updatedSizes);
  };

  const handleRemoveSize = (index) => {
    if (index !== 0) {
      const updatedSizes = sizes.filter((_, idx) => idx !== index);
      setSizes(updatedSizes);
    }
  };

  const handlePictureChange = (e) => {
    setPictureFile(e.target.files[0]); // Almacena el archivo seleccionado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let pictureUrl = ''; // Inicializa la URL de la imagen

    // Sube la imagen a Firebase Storage
    if (pictureFile) {
      const pictureRef = ref(storage, `images/${pictureFile.name}`); // Crea una referencia para el archivo
      try {
        await uploadBytes(pictureRef, pictureFile); // Sube el archivo
        pictureUrl = await getDownloadURL(pictureRef); // Obtiene la URL de descarga
      } catch (error) {
        console.error('Error al subir la imagen: ', error);
        setError('Error al subir la imagen');
        setLoading(false);
        return;
      }
    }

    try {
      await addDoc(collection(db, 'productos'), {
        title: productName,
        description,
        price: parseFloat(price),
        pictureUrl, // Usa la URL de la imagen subida
        category,
        subcategory,
        sizes: sizes.map(({ size, stock }) => ({ size, stock: parseInt(stock, 10) })),
        quantity: 0,
        sizeSelect: '',
        createdAt: new Date(),
      });

      // Limpiar el formulario
      setProductName('');
      setDescription('');
      setPrice('');
      setPictureFile(null); // Reinicia el archivo de imagen
      setCategory('');
      setSubcategory('');
      setSizes([{ size: '', stock: '' }]);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar el producto: ', error);
      setError('Hubo un error al cargar el producto');
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Cargar Producto</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Nombre del Producto</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label>Precio</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Imagen</label>
          <input
            type="file"
            accept="image/*" // Acepta solo imágenes
            onChange={handlePictureChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Categoría</label>
          <select
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Seleccione una categoría</option>
            {categoryOptions.map((cat) => (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Subcategoría</label>
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            required
          >
            <option value="">Seleccione una subcategoría</option>
            {subcategoryOptions.map((sub) => (
              <option key={sub.id} value={sub.name}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>

        {/* Manejo de tallas dinámicas */}
        <div className={styles.formGroup}>
          <label>Tallas y Stock</label>
          {sizes.map((sizeObj, index) => (
            <div key={index} className={styles.sizeStockRow}>
              <input
                type="text"
                placeholder="Talla"
                value={sizeObj.size}
                onChange={(e) => handleSizeChange(index, 'size', e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Stock"
                value={sizeObj.stock}
                onChange={(e) => handleSizeChange(index, 'stock', e.target.value)}
                required
              />
              <button type="button" onClick={() => handleRemoveSize(index)}
                className={styles.removeButton}>
                Eliminar
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddSize} className={styles.addButton}>
            Agregar Talle
          </button>
        </div>

        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Cargando...' : 'Cargar Producto'}
        </button>
      </form>
    </div>
  );
}