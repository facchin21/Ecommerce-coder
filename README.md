# 🛒 CoderMarket

Este proyecto es una tienda de E-commerce creada como parte de las entregas del curso **ReactJS** de **CoderHouse**.  
El objetivo de esta primera entrega es implementar componentes esenciales para la estructura inicial del proyecto.

## 📦 Primer Entrega

### 🔹 Consigna 1: Implementación del NavBar

- **NavBar:** Dentro de la carpeta `components` en `src`, se crea el componente `NavBar.js`. Este componente tiene la funcionalidad de renderizar una barra de menú (Navbar) para la tienda.
- **CartWidget:** Se crea el componente `CartWidget.js`, que incluye un ícono de carrito y una notificación con un número hardcodeado. En versiones futuras, este número representará la cantidad de productos en el carrito.
- **Estilos:** Se incorporan estilos utilizando **Sass** para personalizar la apariencia del NavBar y el CartWidget.

### 🔹 Consigna 2: Contenedor de productos

- **ItemListContainer:** Se crea el componente `ItemListContainer.js`, que recibe una prop llamada `greeting` y muestra un mensaje dentro de un contenedor con estilos integrados.

---

## 📦 Segunda Pre-Entrega

### 🔹 Objetivos:

En esta segunda pre-entrega se desarrolló la **navegabilidad básica** de la aplicación, permitiendo a los usuarios ver el catálogo de productos y navegar hacia los detalles de cada uno.

### 🔹 Implementación de Navegabilidad:

1. Se configuraron las rutas utilizando **BrowserRouter** de `react-router-dom` en el archivo `App.js`.
   
2. Se crearon los siguientes componentes:
   - **NavBar con Cart**: Incluye el widget del carrito de compras y enlaces a las diferentes secciones.
   - **Catálogo**: Componente `ItemListContainer` que muestra la lista de productos.
   - **Detalle de Producto**: Componente `ItemDetailContainer` que muestra el detalle del producto seleccionado.

### 🔹 Rutas Configuradas:

- `/` navega al componente `<ItemListContainer />`, mostrando el catálogo completo de productos.
- `/category/:categoryId` navega al componente `<ItemListContainer />`, filtrando los productos según la categoría seleccionada.
- `/item/:itemId` navega al componente `<ItemDetailContainer />`, mostrando el detalle del producto seleccionado.

### 🔹 Links Configurados:

- Al hacer clic en el **brand** del NavBar, se navega a la ruta raíz `/`.
- Al hacer clic en un producto de la lista, se navega a `/item/:id`.
- Al hacer clic en una categoría del NavBar, se navega a `/category/:categoryId`.

### 🔹 Integración de Parámetros:

- Se utilizaron hooks como `useParams` y `useEffect` para reaccionar a los parámetros `:itemId` y `:categoryId` en las rutas.
- La app detecta la navegación entre diferentes categorías y vuelve a cargar los productos correspondientes según el `categoryId` seleccionado.

---

## 🎯 Objetivos

- Implementar un NavBar con un ícono de carrito.
- Crear un contenedor de productos utilizando el componente `ItemListContainer`.
- Aplicar **Sass** para el manejo de los estilos.
- Desarrollar la navegabilidad básica de la aplicación usando **React Router Dom**.
- Permitir la navegación entre el catálogo y el detalle de productos.
- Integrar parámetros dinámicos para categorías e ítems en la URL.

---

## 💻 Tecnologías Utilizadas

- **ReactJS**
- **React Router Dom** para la gestión de rutas.
- **Sass** para los estilos

---

## 📦 Dependencias Utilizadas

- **react-router-dom**: Utilizada para implementar la navegación en la aplicación. Permite la creación de rutas dinámicas que mejoran la experiencia del usuario al navegar entre el catálogo y los detalles de los productos.
- **sass**: Elegida para el manejo de estilos debido a sus características avanzadas de CSS, como la anidación y las variables, que ayudan a mantener un código más limpio y modular.
- **react-icons**: Incluida para facilitar el uso de iconos en los componentes, como el ícono del carrito en el `CartWidget`. Proporciona una gran colección de iconos personalizables.
- **firebase/firestore**: Elegida como backend y base de datos en tiempo real, ideal para manejar el almacenamiento y la sincronización de datos de la tienda de forma rápida y escalable.
- **framer-motion**: Utilizada para animaciones en el Hero principal del home.
- **React-medium-image-zoom**: Utilizada en el detalle del producto, para poder acceder al zoom de una imagen.
- **React-toastify** : Utilizada para las notificaciones en la app.

---

## 🎥 Demostración

[Ver demostración en vivo](https://codermarket.netlify.app/)

## 🎥 Gif demostracion

![Descripción del GIF](/src/assets/gif/CoderMark-Brave-2024-10-13-11-17-26.gif)