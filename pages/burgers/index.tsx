import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Burger.module.css'
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items')
  const data = await res.json()
  return {
    props: { burgers: data }
  }
}
export default function Burgers({ burgers }: { burgers: Record<string, string>[] }) {
  return (
    <div>
      <h1>
        Наши бургеры
      </h1>
      {burgers.map(burger => (
        <Link href={`/burger/${burger.id}`} key={burger.id} >
          <span className={styles.burgerCard}>
            <div className={styles.imageContainer}>
              <Image src={burger.image} width='150' height="140" style={{ objectFit: 'cover' }} alt={burger.name} />
            </div>
            <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
          </span>
        </Link>
      ))}
    </div>

  )
}
