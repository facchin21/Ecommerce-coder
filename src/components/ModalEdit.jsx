import { getCategories } from '../functions/getCategorys';
import styles from '../styled/ModalEdit.module.scss';
import React, { useEffect, useState } from 'react';
import { Reorder } from "framer-motion";
import { FaGripVertical, FaPlus, FaTrash } from 'react-icons/fa';

export const ModalEdit = ({ product, onSave, onClose, onImageUpload }) => {
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });
  const [selectedImage, setSelectedImage] = useState(null);
  const [categoriesOption, setCategoriesOption] = useState([]);
  const [subCategoriesOption, setSubCategoriesOption] = useState([]);
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  useEffect(() => {
    const categories = getCategories();
    setCategoriesOption(categories);
  }, []);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubcategory('');
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
          <label>Categoría Actual: {product.category}</label>
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
          <label>Subcategoría Actual: {product.subcategory}</label>
          <select
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className={styles.select}
          >
            <option value="">Seleccione una subcategoría</option>
            {subCategoriesOption.map((sub) => (
              <option key={sub.id} value={sub.name}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>

        {/* Sección de tamaños con reordenamiento */}
        <div className={styles.sizesContainer}>
          <h3>Tamaños y stock:</h3>
          <Reorder.Group
            axis="y"
            onReorder={(newOrder) => setUpdatedProduct({ ...updatedProduct, sizes: newOrder })}
            values={updatedProduct.sizes}
          >
            {updatedProduct.sizes.map((sizeObj, index) => (
              <Reorder.Item
                key={index}
                value={sizeObj}
                className={styles.sizeGroup}
                whileDrag={{ scale: 1.04 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
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
                <button type="button" onClick={() => handleRemoveSize(index)} className={styles.removeButton}>
                  <FaTrash />
                </button>
                <div className={styles.reorderHandle}>
                  <FaGripVertical />
                </div>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <button type="button" onClick={handleAddSize} className={styles.addButton}>
            <FaPlus /> Agregar Talle
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
