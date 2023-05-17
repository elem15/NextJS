import Link from 'next/link'
import React from 'react'

export default function NotFountPage() {
  return (
    <div className='not-found'>
      <h1>Ой... </h1>
      <h2>Такой страницы здесь нет</h2>
      <p>Перейти на <Link href='/'>Главную станицу</Link></p>
    </div>
  )
}
