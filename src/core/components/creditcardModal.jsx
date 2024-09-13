import { useState } from 'react'
import '../css/creditcardModal.css'

function creditcardModal(data){
    
    const [showModal, setShowModal] = useState(data.params);

    const handleModal = (e) => {
        e.preventDefault()
        setShowModal(!showModal)
    }

    return (
        <>
            
            
            
        </>
    )
}

export default creditcardModal