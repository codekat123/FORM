import { Routes, Route } from 'react-router-dom'

import Layout from './components/views/Layout'
import Home from './pages/views/Home'
import Shop from './pages/views/Shop'
import ProductDetail from './pages/views/ProductDetail'
import NotFound from './pages/views/NotFound'
import Cart from './pages/views/Cart'
import Checkout from './pages/views/Checkout'
import Login from './pages/views/login'
import AuthLayout from './components/views/AuthLayout'
import Register from './pages/views/Register'
import Account from './pages/views/Account'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/Account" element={<Account />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
