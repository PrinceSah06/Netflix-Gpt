import React from 'react'
import Browse from './Browse'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './login.jsx'



const Body = () => {
    const approuter = createBrowserRouter([
        {
            path:'/'
            ,element:<Login/>
        },{
            path:'/browser'
            ,element : <Browse/>
        }
    ])
  return (
    <div>
   <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body
