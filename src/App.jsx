import { ItemListContainer } from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./components/NotFound"
import { Layout } from "./layout/Layout"

function App() {
  const title = 'CoderMarket'
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={title}/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
