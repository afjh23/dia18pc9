import { products as initialProducts } from './mocks/products.json'

import { useFilters } from './hooks/useFilters.jsx'

import { CartProvider } from './context/cart.jsx'

import { Header, Cart, Products, Footer } from './components'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App