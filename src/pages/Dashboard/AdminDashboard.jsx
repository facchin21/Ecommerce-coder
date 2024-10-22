import { Link, Outlet } from 'react-router-dom';
import styles from '../../styled/AdminDashboar.module.scss';

export const AdminDashboard = () => {
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
                </ul>
            </nav>
            <div className={styles.mainContent}>
                <Outlet /> {/* Aquí se renderizan las rutas hijas */}
            </div>
        </div>
    );
}