import React from 'react'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'


export const Products = ({ products }) => {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='w-full flex justify-center items-center'>
            <ul className='w-3/4 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8'>
                {products.slice(0, 20).map(product => {
                    const isProductInCart = checkProductInCart(product)

                    return (
                        <li className="flex flex-col h-[400px] mx-h-[400px] space-y-4" key={product.id}>
                            <img className="w-full aspect-square object-cover block bg-white rounded" src={product.thumbnail} alt={product.title}></img>
                            <div className='text-center mb-auto'>
                                <strong>{product.title}</strong> -${product.price}
                            </div>
                            <div className='mt-auto'>
                                <button className={` mt-auto p-2 rounded flex mx-auto ${isProductInCart ? 'bg-red-400' : 'bg-blue-400'} text-white`} 
                                onClick={() => {isProductInCart ? removeFromCart(product) : addToCart(product) }}
                                >
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )})
                }

            </ul>


        </main>
    )
}
