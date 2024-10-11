import { dataRedes, dataNosotros } from '../data/Footer.data'
import { Link } from "react-router-dom"
import styles from "../styled/Footer.module.scss"


export const Footer = () => {
    
    return (
        <footer className={styles.footer__container}>
            <div className={styles.container__redes}>
                <h1 className={styles.redes__title}>Redes</h1>
                <ul>
                    {dataRedes.map(red => (
                        <li key={red.id}>
                            <Link to={red.link}
                            className={styles.redes__link}
                            target="_blank">
                                {red.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.container__nosotros}>
                <h1 className={styles.nosotros__title}>Sobre Nostros</h1>
                <ul>
                    {
                        dataNosotros.map(data => (
                            <li key={data.id}>
                                <Link to={data.link}
                                className={styles.nosotros__link}>
                                    {data.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </footer>
    )
}