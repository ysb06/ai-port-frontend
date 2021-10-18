import React from 'react'
import { useDispatch } from 'react-redux';
import Navbar from '../components/TopNavbar'
import Footer from '../components/Footer'
import { clickDown, clickUp } from '../store/module/controllerUI';

interface IPageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children } : IPageLayoutProps) {
  const dispatch = useDispatch();

  // const onDown = () => {
  //   dispatch(clickDown())
  // }

  const onUp = () => {
    dispatch(clickUp())
  }

  return (
    <div onMouseUp={onUp}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}