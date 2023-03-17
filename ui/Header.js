import React from 'react'
import Navigation from './Navigation'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div style={{
      display:"flex"
    }}>
        <Navigation/>
        <SearchBar/>
    </div>
  )
}

export default Header