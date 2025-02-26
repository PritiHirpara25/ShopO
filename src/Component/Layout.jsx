import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Cart from '../Pages/Cart'

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