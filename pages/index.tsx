import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { useAuth } from '../hooks/auth'
import useProduct from '../hooks/use-product'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { data, error } = useAuth();
  const { data: products, error: errorProduct, remove } = useProduct()

  if (error || errorProduct) return <div>Fail to load</div>
  if (!data || !products) return <div>Loading...</div>

  return (
    <div className='min-h-[680px]'>
      {data.map((user: any, index: any) => <div key={index}>{user.email}</div>)}
      {products.map((item: any, index: any) => <div key={index}>{item.name} <button onClick={() => remove(item.id)}>Xóa</button> </div>)}
    </div>
  )
}

export default Home
