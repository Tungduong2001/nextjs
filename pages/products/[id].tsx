import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const ProductsDetail = (props: Props) => {
    const router = useRouter();
    const id = router.query.id
    return (
        <div>ProductsDetail: {id}</div>
    )
}

export default ProductsDetail