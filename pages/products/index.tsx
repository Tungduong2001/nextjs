import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link';
import React from 'react'

type ProductProps = {
    products: any[];
}

const ProductsPage = ({ products }: ProductProps) => {
    if (!products) return null;
    return (
        <div>
            {products.map((item) =>
                <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
            )}
        </div>
    )
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
    const data = await (await fetch(`http://localhost:3001/products`)).json()
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            products: data
        }
    }
}

export default ProductsPage