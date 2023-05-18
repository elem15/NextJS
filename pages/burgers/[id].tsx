import Image from 'next/image'
import styles from '../../styles/Burger.module.css'

import React from 'react'
interface Props {
  params: {
    id: string
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/items')
  const data = await res.json()
  const paths = data.map((burger: Record<string, string>) => ({ params: { id: burger.id } }))
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async ({ params }: Props) => {
  const res = await fetch(`http://localhost:5000/items/${params.id}`)
  const data = await res.json()
  return {
    props: { burger: data }
  }
}
export default function Details({ burger }: { burger: Record<string, string> }) {
  return (
    <div className={styles.singleBurger}>
      <h1>{burger.name}</h1>
      <div className={styles.imageContainer}>
        <Image src={burger.image} width='400' height="300" style={{ objectFit: 'cover' }} alt={burger.name} />
      </div>
      <div>
        <p>{burger.desc}</p>
      </div>
    </div>
  )
}
