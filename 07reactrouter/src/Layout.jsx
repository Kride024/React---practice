import React from 'react'
import Header from  './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import {Outlet} from 'react-router-dom'
// This is the main layout component that includes the header and footer
function Layout() {
  return (
    <>
     <Header/>
<Outlet/>
 <Footer/>
    </>
  )
}

export default Layout
