import styles from '../../styled/Size.module.scss'

export const Size = ({ size, selectSize, setSelectSize }) => {
    const handleState = () => {
        if (selectSize === size) {
            setSelectSize(null);
        } else {
            setSelectSize(size);
        }
    };
    
    return(
        <div className={`${styles.size__container} ${selectSize === size ? styles.select : ''}`}
        onClick={ handleState } >
            <span>{size}</span>
        </div>
    )
}