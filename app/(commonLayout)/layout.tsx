import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return( 
    <div className=" w-[100vw] h-[100vh] bg-white overflow-y-auto">{children}</div>
  )
}

export default Layout
