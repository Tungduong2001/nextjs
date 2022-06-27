import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <ul className='main-menu'>
                <li><Link href={`/`}><a className='main-menu__item'>Home</a></Link></li>
                <li><Link href={`/products`}><a className='main-menu__item'>Products</a></Link></li>
                <li><Link href={`/about`}><a className='main-menu__item'>About</a></Link></li>
                <li><Link href={`/contact`}><a className='main-menu__item'>Contact</a></Link></li>
            </ul>
        </div>
    )
}

export default Header