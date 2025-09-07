import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Payment from '../Pages/Payment'
import ProductDetails from '../Pages/ProductDeatils'
import Shop from '../Pages/Shop'
import SignUp from '../Pages/SignUp'
import Wishlist from '../Pages/Wishlist'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/shop',
          element: <Shop />
        },
        {
          path: '/product/:id',
          element: <ProductDetails />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/wishlist',
          element: <Wishlist />
        },
        {
          path: '/checkout',
          element: <Checkout />
        },
        {
          path: '/payment',
          element: <Payment />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}>
      {children}
    </RouterProvider>
  )
}

export default Layout