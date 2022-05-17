import React from 'react';
import Nav from './Nav';
import "../styles/global.scss"

const Layout = ({children}) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}

export default Layout;