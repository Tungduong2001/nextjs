import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

type ProductProps = {
    product: any
}

const ProductsDetail = ({ product }: ProductProps) => {
    if (!product) return null
    return (
        <div>ProductsDetail: {product.name} </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await (await fetch(`http://localhost:3001/products`)).json()
    const paths = data.map((item: any) => {
        return { params: { id: item.id } }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context: GetStaticPropsContext) => {
    const data = await (await fetch(`http://localhost:3001/products/${context.params?.id}`)).json()
    if (!data) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            product: data
        }
    }
}

export default ProductsDetail