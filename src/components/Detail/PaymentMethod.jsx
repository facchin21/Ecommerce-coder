import styles from "../../styled/PaymentMethod.module.scss"
import { useEffect, useState } from "react"
import { Icons } from "../../data/Icons"

export const PaymentMethod = () =>{
    const [ isVisible, setIsVisible ] = useState(false)

    useEffect(() => {
        const closeModal = (e) => {
            if(e.key === "Escape"){
                setIsVisible(false)
            }
        }   
        window.addEventListener("keydown", closeModal)

        return () => {
            window.removeEventListener("keydown", closeModal)
        }
    },[])
    return(
        <>
            <span className={styles.item__pagos}
            onClick={() => setIsVisible(true)}>Medios de pago</span>

            {isVisible && (
                <div className={styles.modal__backdrop}>
                    <div className={styles.modal__content}>
                        <span className={styles.modal__close}
                        onClick={() => setIsVisible(false)}>&times;</span>
                        <div className={styles.modal__container_icon}>
                            {Icons.map(icon => (
                                <img src={icon.icon} 
                                alt={`Icono de ${icon.name}`}
                                width={50}
                                height={30} 
                                key={icon.id}/>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

