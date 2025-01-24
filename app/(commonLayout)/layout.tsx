import React from 'react'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return( 
    <div className="bg-black overflow-y-auto">{children}</div>
  )
}

export default Layout
