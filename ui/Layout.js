import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
   <>
   <div style={{
    backgroundColor:"black",
   }}>
   <Header/>
   </div>
    <div 
    style={{
      paddingInline:"110px",
      marginTop:"20px"
    }}
    >
    {children}
    </div>
   <Footer/>
   </>
  )
}

export default Layout