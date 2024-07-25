import { useId, useState } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import {useCart} from '../hooks/useCart.jsx'

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li className='border-b border-solid border-[#444] pb-4'>
      <img className='aspect-square w-full'
        src={thumbnail}
        alt={title}
      />
      <div className='text-center'>
        <strong>{title}</strong> - ${price}
      </div>

      <footer className='flex gap-1 justify-center items-center'>
        <small>
          <span className='font-bold pr-1'>Qty:</span>   {quantity}
        </small>
        <button className="" onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const [openAside,setOpenAside] = useState(false)
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  function toggleAside() {
    setOpenAside(!openAside)
  }

  return (
    <>
      <label className='items-center bg-blue-400 rounded-full cursor-pointer flex h-[32px] justify-center p-1 absolute
      right-2 top-2 transition-all w-8 z-50 hover:scale-110' htmlFor={cartCheckboxId} onClick={toggleAside}>
        <CartIcon />
      </label>
      {
        openAside && 
        <aside className='bg-primary-palet-900 p-[32px] fixed right-0 top-0 w-[200px] text-white'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
      }
      
    </>
  )
}