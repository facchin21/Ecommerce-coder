import { Footer } from "../components/Footer/Footer"
import { NavBar } from "../components/NavBar/NavBar"
import styles from '../styled/Main.module.scss'

export const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main className={styles.container__main}>
                {children}
            </main>
            <Footer />
        </>
    )
}