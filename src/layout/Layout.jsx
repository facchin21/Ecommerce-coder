import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"

export const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <main style={{minHeight : '70vh'}}>
                {children}
            </main>
            <Footer />
        </>
    )
}