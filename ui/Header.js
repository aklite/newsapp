import React from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      position:"relative"
    }}>
        <Navigation/>
        <SearchBar/>
    </div>
  )
}

export default Header