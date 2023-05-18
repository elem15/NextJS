import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function NotFountPage() {
  const router = useRouter()
  const [counter, setCounter] = useState(5)
  useEffect(() => {
    let i = counter
    let interval = setInterval(() => {
      i--
      setCounter(i)
      if (i < 1) {
        clearInterval(interval)
        router.push('/')
      }
    }, 1000)
  }, [counter, router])
  return (
    <div className='not-found'>
      <h1>Ой... </h1>
      <h2>Такой страницы здесь нет</h2>
      <p>Перейхожу на <Link href='/'>Главную станицу</Link> через {counter} с.</p>
    </div>
  )
}
