import React from 'react'
import Navbar from './Navbar'
import QuoteBar from './TopBar'
import ScrollingText from './ScrollingText'

function Header() {
  return (
    <header>
        <QuoteBar/>
        <Navbar/>
        <ScrollingText/>
    </header>
  )
}

export default Header