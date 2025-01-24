import React from 'react'
const Layout = ({ children }: { children: React.ReactNode }) => {
  return( 
  <div>
    <div className="flex flex-col h-screen">
      <div className="flex-grow">{children}</div>
    </div>
  </div>
  )
}

export default Layout
