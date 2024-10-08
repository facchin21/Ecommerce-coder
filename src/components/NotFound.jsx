import { Link } from 'react-router-dom'
import '../styled/NotFound.scss'

export const NotFound = () => {
    return (

        <div className='container__notFound'>
            <span className='span__notFound'>Lo siento</span>
            <h1 className='text__notFound'>
                No se pudo encontrar esta ruta.
            </h1>
            <span className='span__volver'>Te sujerimos volver al inicio👇🏼</span>
            <Link to={'/'} className='button__toHome'>
                Volver al Inicio
            </Link>
        </div>
    )
}