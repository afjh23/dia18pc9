import React from 'react'
import Filter from './Filter'

export function Header({changeFilters}) {
  return (

    <header className='w-3/5 mx-auto my-8 font-PrincipalFont'>
      <h1 className='uppercase font-bold text-[32px] mb-4 text-center font-PrincipalFont text-primary-palet-950'> React Shop </h1>
      <Filter changeFilters={changeFilters}></Filter>
    </header>
  )
}
