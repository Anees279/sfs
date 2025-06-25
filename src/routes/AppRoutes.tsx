import React from 'react'
import {createBrowserRouter, Route, Routes} from 'react-router-dom'
import  ResponsiveRootsBar  from '../components/navBar'
import { MainHome } from '../layouts/mainHome'
import Footer from '../components/Footer'
export const Root = () => {
  return (
    <div>
      <MainHome />
      <Footer />
    </div>
  )
}
