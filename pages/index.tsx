import classNames from 'classnames'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={classNames(styles.title, 'font-effect-fire-animation')}> Home</h1>
      <p className={styles.text}>Что такое идеальный бургер? Лист свежего салата, мягкие булочки, сочное мясо. О других составляющих начинки можно поспорить, ведь это дело вкуса.</p>
      <p className={styles.text}>Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество обслуживания, правильная атмосфера заведения.</p>
      <Link href='/burgers'><a className={styles.btn}>Бургеры</a> </Link>
    </div>
  )
}