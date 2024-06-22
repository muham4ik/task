import React from 'react'
import {Signin,Signup,Users} from "@components"
import App from "./../App"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"



const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App/>}>
        <Route index element={<Signup />} />
        <Route path="signin" element={<Signin />}/>
        <Route path="users" element={<Users />}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default Router