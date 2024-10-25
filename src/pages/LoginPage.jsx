import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import styles from '../styled/Login.module.scss'

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Intentar iniciar sesión con las credenciales de Firebase
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard/welcome'); // Redirige al dashboard si el login es exitoso
    } catch (err) {
      setError('Algo salió mal. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Login Administrador</h2>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Iniciar sesión</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}
