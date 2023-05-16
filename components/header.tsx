import React from 'react'
import { FaHamburger } from 'react-icons/fa'
export default function Header() {
  return (
    <header>
      <div><FaHamburger /></div>
      <nav>
        <a href="">Домой</a>
        <a href="">О нас</a>
        <a href="">Отзывы</a>
        <a href="">бургеры</a>
      </nav>
    </header>
  )
}
