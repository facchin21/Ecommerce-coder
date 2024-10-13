import { ItemListDetailContainer } from "./components/Detail/ItemListDetailContainer"
import { ItemListContainer } from "./components/Item/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"
import { NotFoundPage } from "./pages/NotFoundPage"
import { ContactPage } from "./pages/ContactPage"
import { Layout } from "./layout/Layout"
import { AboutPage } from "./pages/AboutPage"

function App() {
  const title = 'CoderMarket'
  
  return (
    <BrowserRouter>
      <Layout>
        <ToastContainer />
        <Routes>
          {/* Rutas para la entrega */}
          <Route path="/" element={<ItemListContainer greeting={title}/>}/>
          <Route path="/item/:id" element={<ItemListDetailContainer/>}/>
          <Route path="/category/:categoryId" 
            element={<ItemListContainer greeting={title}/>}/>
          {/* Rutas Extras */}
          <Route path="/category/" element={<ItemListContainer greeting={title}/>}/>
          <Route path="/category/:categoryId/:subcategoryId" 
            element={<ItemListContainer greeting={title}/>}/>
          <Route path="/nosotros" element={<AboutPage/>}/>
          <Route path="/contacto" element={<ContactPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
