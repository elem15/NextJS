import { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import Head from 'next/head'
interface Review {
  body: string,
  email: string,
  id: number,
  name: string
  postId: number,
}
interface Props {
  reviews: Review[]
}
const Reviews: FunctionComponent<Props> = ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Жирные бургеры | Отзывы клиентов</title>
        <meta name='title' content='Отзывы клиентов' />
      </Head>
      <h1>
        Отзывы клиентов
      </h1>
      <div className='reviews'>
        {!!reviews.length && reviews.map((review) => {
          return (
            <div key={review.id} className='review'>{review.id}.  {review.body.slice(0, 90).padEnd(95, '...')}</div>
          )
        })

        }
      </div>
    </>
  )
}
export async function getServerSideProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/comments')
  const response = await data.json() as Review[]
  return {
    props: {
      reviews: response.slice(0, 30)
    }
  }
}
export default Reviews
