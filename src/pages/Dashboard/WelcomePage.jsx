import React from 'react';
import styles from '../../styled/WelcomePage.module.scss';

export function WelcomePage() {
  return (
    <div className={styles.welcomeContainer}>
      <h1>¡Bienvenido al Panel de Administración!</h1>
      <p>Usa el menú para navegar entre las diferentes opciones del panel.</p>
    </div>
  );
}