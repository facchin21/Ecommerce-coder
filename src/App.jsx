import { ItemListDetailContainer } from "./components/ItemListDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./components/NotFound"
import { Contact } from "./components/Contact"
import { About } from "./components/About"
import { Layout } from "./layout/Layout"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"

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
          <Route path="/nosotros" element={<About/>}/>
          <Route path="/contacto" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
