import React from 'react'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

const MainLayout = ({children}:{children:React.ReactElement}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer />
    </>
  )
}

export default MainLayout