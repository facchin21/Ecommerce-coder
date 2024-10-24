import styles from '../../styled/AdminDashboar.module.scss';
import { useAuth } from '../../contexts/AuthProvider';
import { Link, Outlet } from 'react-router-dom';

export const AdminDashboard = () => {
    const { logOut } = useAuth();
    return (
        <div className={styles.dashboardContainer}>
            <nav className={styles.sidebar}>
                <h2 className={styles.logo}>Admin Panel</h2>
                <ul>
                    <li>
                        <Link to="/dashboard/welcome">Bienvenida</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/productos">Cargar Productos</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/listproducts">Productos</Link>
                    </li>
                </ul>
                <button onClick={logOut}
                className={styles.button__logout}>Cerrar sesion</button>
            </nav>
            <div className={styles.mainContent}>
                <Outlet /> {/* Aquí se renderizan las rutas hijas */}
            </div>
        </div>
    );
}