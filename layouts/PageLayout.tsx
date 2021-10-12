import React, { ReactElement } from 'react'
import Navbar from '../components/TopNavbar'
import Footer from '../components/Footer'

interface IPageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children } : IPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}