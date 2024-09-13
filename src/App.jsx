import { useState } from 'react'
import './core/css/App.css'
import logo_wompi from './core/images/logo-wompi.svg'
import Product from './core/components/product'
import CreditcardModal from './core/components/creditcardModal';

function App() {
  const [showCart, setShowCart] = useState(false)
  const [showModal, setShowModal] = useState(false);

    const handleModal = (e) => {
        e.preventDefault()
        setShowModal(!showModal)
    }


  const handleOnClickShow = (e) =>{
    e.preventDefault()
    setShowCart(!showCart)
  }

  return (
    <>
      <div className='back_layer'>
        {showModal ? 
         <div className={'modal' + (showModal ? '' : '_hidden')}>
          <h2>Please complete the next inputs</h2>
          <div>
              <input/> <h2>Card number</h2>
          </div>
          <div>
              <input/><h2>cvc</h2>
          </div>
          <div>
              <input/><h2>month</h2>
          </div>
          <div>
              <input/><h2>year</h2>
          </div>
          <div>
              <input/><h2>Name of the holder</h2>
          </div>
          <button type='submit' onClick={handleModal}>Save card</button>
         </div>
         : <></>}
        

        <div className='stickbar'>
          <div className='logo_wompi'>
            <img src={logo_wompi}/>
          </div>
          <div className='payment_button'>
            <button className='modal_button' onClick={handleModal}>
              Pay with credit card
            </button>
          </div>
        </div>

        <Product/>

        

        <div className={'front_layer' + (showCart ? '' : '_hidden')}
          onClick={(showCart ? '' : handleOnClickShow)}
        >
          <h1> Cart</h1>
          <h1 className={(showCart ? '': 'no') + 'hide'} onClick={handleOnClickShow}>X</h1>

          <div className='info'>
            <p>Product amount:</p>
            <p>Base fee:</p>
            <p>Delivery fee:</p>
            <button>Confirm payment</button>
          </div>

        </div>
        
      </div>
    </>
  )
}

export default App
