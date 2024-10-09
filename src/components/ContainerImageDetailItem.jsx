import '../styled/ContainerImageDetailItem.scss'

export const ContainerImageDetailItem = ({ product }) => {
    return(
        <div className="container__image">
            <div>
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
            </div>
            <div>
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
            </div>
        </div>
    )
}