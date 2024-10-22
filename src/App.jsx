import { BrowserRouter } from "react-router-dom"
import { CartContainer } from "./components/Cart/CartContainer";
import { CartProvider } from "./contexts/CartProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"
import { AppRouter } from "./routes/Route";
import { Layout } from "./layout/Layout"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <ToastContainer />
          <AppRouter/>
          <CartContainer />
        </Layout>
      </CartProvider>
    </BrowserRouter>
  )
}
export default App
