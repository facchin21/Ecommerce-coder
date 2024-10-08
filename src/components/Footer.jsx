import { Link } from "react-router-dom"
import "../styled/Footer.scss"

export const Footer = () => {
    const dataRedes = [
        {
            id: '01',
            name: 'Instagram',
            link: 'https://www.instagram.com/programate__/'
        },
        {
            id: '02',
            name: 'TikTok',
            link: 'https://www.tiktok.com/@programate_'
        },
        {
            id: '03',
            name: 'Youtube',
            link: 'https://www.youtube.com/@Programate_'
        }
    ]
    const dataNosotros = [
        {
            id: '01',
            name: "Sobre Nosotros",
            link: '/nosotros'
        },
        {
            id: '02',
            name: 'Contacto',
            link: '/contacto'
        }
    ]
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
                                className="nosotros__link"
                                target="_blank">
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