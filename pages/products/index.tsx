import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link';
import React from 'react'
import useSWR from 'swr'

type ProductProps = {
    products: any[];
}
const url = 'http://localhost:3001/products'

const fetcher = async (url: string) => await (await fetch(url)).json()

const ProductsPage = () => {
    const { data, error } = useSWR(url, fetcher)
    if (error) return <div>Fail to load</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            {data.map((item: any) => (
                <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
            ))}
        </div>
    )

}

// const ProductsPage = ({ products }: ProductProps) => {
//     if (!products) return null;
//     return (
//         <div className='min-h-[680px]'>
//             {products.map((item) =>
//                 <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
//             )}
//         </div>
//     )
// }

// export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
//     const data = await (await fetch(`http://localhost:3001/products`)).json()
//     if (!data) {
//         return {
//             notFound: true
//         }
//     }
//     return {
//         props: {
//             products: data
//         }
//     }
// }

export default ProductsPage