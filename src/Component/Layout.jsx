import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Cart from '../Pages/Cart'
import ProductDetails from '../Pages/ProductDeatils'
import Checkout from '../Pages/Checkout';
import Payment from '../Pages/Payment'
import Wishlist from '../Pages/Wishlist'

const Layout = ({children}) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path:'/shop',
          element:<Shop/>
        },
        {
          path:'/product/:id',
          element:<ProductDetails/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<SignUp/>
        },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/wishlist',
          element:<Wishlist/>
        },
        {
          path:'/checkout',
          element:<Checkout/>
        },
        {
          path:'/payment',
          element:<Payment/>
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