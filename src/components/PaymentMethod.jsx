import { useEffect, useState } from "react"
import "../styled/PaymentMethod.scss"
import { Icons } from "../data/Icons"

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
            <span className='item__pagos'
            onClick={() => setIsVisible(true)}>Medios de pago</span>

            {isVisible && (
                <div className='modal__backdrop'>
                    <div className='modal__content'>
                        <span className='modal__close'
                        onClick={() => setIsVisible(false)}>&times;</span>
                        <div className="modal__container-icon">
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

