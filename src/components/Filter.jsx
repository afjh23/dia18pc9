import React, { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export default function Filter({}) {
    const {filters, setFilters} = useFilters()


    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        console.log(event.target)
        setFilters(prevState => ({
          ...prevState,
          minPrice: event.target.value
        }))
        console.log(filters)
      }
    
      const handleChangeCategory = (event) => {
        setFilters(prevState => ({
          ...prevState,
          category: event.target.value
        }))
      }


  return (
    <section className='flex items-center justify-between text-sm font-bold text-primary-palet-950' >
        <div className='flex gap-4'>
            <label htmlFor={minPriceFilterId}>Min Price</label>
            <input type='range' id='price' min='0' max='1000' onChange={handleChangeMinPrice} value={filters.minPrice}></input>
            <span>{filters.minPrice}</span>
        </div>
        <div className='flex gap-4'>
            <label htmlFor={categoryFilterId}>Categoria</label>
            <select id='category' onChange={handleChangeCategory}>
                <option value='all'>All</option>
                <option value='fragrances'>Fragrances</option>
                <option value='furniture'>Furniture</option>
                <option value='groceries'>Groceries</option>
            </select>
        </div>
    </section>
  )
}
