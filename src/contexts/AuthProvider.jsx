import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/config';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const adminEmails = [
        import.meta.env.VITE_ADMIN_EMAIL
    ];

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

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {!loading && children} {/* Solo renderizar children si no está cargando */}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}