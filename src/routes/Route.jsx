import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ItemListDetailContainer } from '../components/Detail/ItemListDetailContainer';
import { ItemListContainer } from '../components/Item/ItemListContainer';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { AdminDashboard } from '../pages/Dashboard/AdminDashboard';
import { LoginPage } from '../pages/LoginPage';
import { PrivateRoute } from './PrivateRoute';
import { AuthProvider } from '../contexts/AuthProvider';
import { WelcomePage } from '../pages/Dashboard/WelcomePage'
import { ProductForm } from '../pages/Dashboard/ProductFrom';
import { ProductEdit } from '../pages/Dashboard/ProductEdit';

export function AppRouter() {
  return (
    <AuthProvider>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<ItemListDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/category" element={<ItemListContainer />} />
        <Route path="/category/:categoryId/:subcategoryId" element={<ItemListContainer/>} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas privadas */}
        <Route path="/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>}>
          <Route path="welcome" element={<PrivateRoute><WelcomePage /></PrivateRoute>} />
          <Route path="productos" element={<PrivateRoute><ProductForm /></PrivateRoute>} />
          <Route path="listproducts" element={<PrivateRoute><ItemListContainer/></PrivateRoute>}/>
          <Route path="edit/:productId" element={<PrivateRoute><ProductEdit></ProductEdit></PrivateRoute>}/>
        </Route>

        {/* Ruta de error para cualquier página no encontrada */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider>
  );
}

