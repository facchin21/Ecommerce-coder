import '../styled/ContainerImageDetailItem.scss'

export const ContainerImageDetailItem = ({ product }) => {
    return(
        <div className="container__image">
            <div className='container__image-three'>
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
            </div>
            <div className='container__image-large'>
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
            </div>
        </div>
    )
}