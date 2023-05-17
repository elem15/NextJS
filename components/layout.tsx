import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='content'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
