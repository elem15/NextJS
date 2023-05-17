import Head from 'next/head'
import React, { useEffect, useState } from 'react'
interface Review {
  body: string,
  email: string,
  id: number,
  name: string
  postId: number,
}
export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  useEffect(() => {
    const getData = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/comments')
      const response = await data.json() as Review[] | []
      setReviews(response)
    }
    getData()
  }, [])
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
        {!!reviews.length && reviews.slice(0, 30).map((review) => {
          return (
            <div key={review.id} className='review'>{review.id}.  {review.body.slice(0, 90).padEnd(95, '...')}</div>
          )
        })

        }
      </div>
    </>
  )
}
