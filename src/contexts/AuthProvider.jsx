import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const adminEmails = ['codermarket00@gmail.com']

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const userEmail = currentUser.email.trim().toLowerCase();
                const adminEmailsLowercase = adminEmails.map(email => email.trim().toLowerCase());

                if (adminEmailsLowercase.includes(userEmail)) {
                    setUser(currentUser);
                } else {
                    setUser(null); // Si no es admin, no se autentica
                }
            } else {
                setUser(null); // No hay usuario autenticado
            }
            setLoading(false); // Asegurarse de que loading se actualiza correctamente
        });

        return () => unsubscribe();
    }, [adminEmails]);

    // Función para cerrar sesión
    const logOut = async () => {
        try {
            await signOut(auth); // Cierra la sesión en Firebase
            setUser(null);       // Reinicia el estado del usuario
            navigate("/login");  // Redirige a la página de login
        } catch (error) {
            console.error("Error al cerrar sesión: ", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, logOut }}>
            {!loading && children} {/* Solo renderizar children si no está cargando */}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
