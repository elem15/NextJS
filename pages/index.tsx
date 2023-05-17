import classNames from 'classnames'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Жирные бургеры | Главная страница</title>
        <meta name='title' content='Жирные бургеры' />
      </Head>
      <div className={styles.container}>
        <h1 className={classNames(styles.title, 'font-effect-fire-animation')}> Home</h1>
        <div className={styles.mainImage}>
          <Image src="/fatburger.png" width={400} height={300} alt="fat burger" />
        </div>
        <p className={styles.text}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
        <p className={styles.text}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера заведения.</p>
        <Link href='/burgers'><span className={styles.btn}>Бургеры</span> </Link>
      </div>
    </>
  )
}