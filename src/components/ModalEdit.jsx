import { getCategories } from '../functions/getCategorys';
import styles from '../styled/ModalEdit.module.scss';
import React, { useEffect, useState } from 'react';

export const ModalEdit = ({ product, onSave, onClose, onImageUpload }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });
  const [selectedImage, setSelectedImage] = useState(null);
  const [categoriesOption, setCategoriesOption] = useState([])
  const [subCategoriesOption, setSubCategoriesOption] = useState([])
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [sizes, setSizes] = useState([{ size: '', stock: '' }]);


  useEffect(() => {
    const categories = getCategories()
    setCategoriesOption(categories)
  }, [])

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubcategory(''); // Reset subcategory
    const subcategories = categoriesOption.find((cat) => cat.name === selectedCategory)?.subcategorias || [];
    setSubCategoriesOption(subcategories);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });
  };

  const handleRemoveSize = (index) => {
    // Evitar eliminar el último talle
    if (updatedProduct.sizes.length > 1) {
      const updatedSizes = updatedProduct.sizes.filter((_, idx) => idx !== index);
      setUpdatedProduct({ ...updatedProduct, sizes: updatedSizes });
    }
  };

  const handleAddSize = () => {
    setUpdatedProduct({
      ...updatedProduct,
      sizes: [...updatedProduct.sizes, { size: '', stock: '' }]
    });
  };

  const handleSizeChange = (index, value, field) => {
    const updatedSizes = updatedProduct.sizes.map((sizeObj, i) =>
      i === index ? { ...sizeObj, [field]: value } : sizeObj
    );
    setUpdatedProduct({ ...updatedProduct, sizes: updatedSizes });
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSave = () => {
    if (selectedImage) {
      onImageUpload(selectedImage, updatedProduct);
    } else {
      onSave(updatedProduct);
    }
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Editar Producto</h2>

        <div className={styles.formGroup}>
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={updatedProduct.title}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Imagen del producto:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.inputField}
          />
          {updatedProduct.pictureUrl && (
            <img
              src={updatedProduct.pictureUrl}
              alt={updatedProduct.title}
              className={styles.previewImage}
            />
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={updatedProduct.description}
            onChange={handleChange}
            className={styles.textareaField}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={updatedProduct.price}
            onChange={handleChange}
            className={styles.inputField}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Categoría:</label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className={styles.select}
          >
            <option value="">Seleccione una categoría</option>
            {categoriesOption.map((cat) => (
              <option key={cat.id} value={cat.name} className={styles.option}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Subcategoría</label>
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}>
            <option value="">Seleccione una subcategoría</option>
            {subCategoriesOption.map((sub) => (
              <option key={sub.id} value={sub.name}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.sizesContainer}>
          <h3>Tamaños y stock:</h3>
          {updatedProduct.sizes.map((sizeObj, index) => (
            <div key={index} className={styles.sizeGroup}>
              <input
                type="text"
                value={sizeObj.size}
                onChange={(e) => handleSizeChange(index, e.target.value, 'size')}
                className={styles.inputFieldSmall}
              />
              <input
                type="number"
                value={sizeObj.stock}
                onChange={(e) => handleSizeChange(index, e.target.value, 'stock')}
                className={styles.inputFieldSmall}
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

        <div className={styles.buttonGroup}>
          <button onClick={handleSave} className={styles.saveButton}>Guardar</button>
          <button onClick={onClose} className={styles.cancelButton}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};
