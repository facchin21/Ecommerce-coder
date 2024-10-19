import { ItemListDetailContainer } from "./components/Detail/ItemListDetailContainer"
import { ItemListContainer } from "./components/Item/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartContainer } from "./components/Cart/CartContainer";
import { CartProvider } from "./contexts/CartProvider";
import { NotFoundPage } from "./pages/NotFoundPage"
import { ContactPage } from "./pages/ContactPage"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"
import { AboutPage } from "./pages/AboutPage"
import { HomePage } from "./pages/HomePage";
import { Layout } from "./layout/Layout"

function App() {
  const title = 'CoderMarket'

  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <ToastContainer />
          <Routes>
            {/* Rutas para la entrega */}
            <Route path="/" element={<HomePage/>}/>
            <Route path="/item/:id" element={<ItemListDetailContainer />} />
            <Route path="/category/:categoryId"
              element={<ItemListContainer/>} />
            {/* Rutas Extras */}
            <Route path="/productos" element={<ItemListContainer/>} />
            <Route path="/category/" element={<ItemListContainer/>} />
            <Route path="/category/:categoryId/:subcategoryId"
              element={<ItemListContainer/>} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <CartContainer />
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}
export default App
