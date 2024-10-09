import { dataRedes, dataNosotros } from '../data/Footer.data'
import { Link } from "react-router-dom"
import "../styled/Footer.scss"


export const Footer = () => {
    
    return (
        <footer className="footer__container">
            <div className="container__redes">
                <h1 className="redes__title">Redes</h1>
                <ul>
                    {dataRedes.map(red => (
                        <li key={red.id}>
                            <Link to={red.link}
                            className="redes__link"
                            target="_blank">
                                {red.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container__nosotros">
                <h1 className="nosotros__title">Sobre Nostros</h1>
                <ul>
                    {
                        dataNosotros.map(data => (
                            <li key={data.id}>
                                <Link to={data.link}
                                className="nosotros__link">
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