import React from 'react'
import { LayoutProps } from '../../models/layouts'

type Props = {}

const LayoutEmpty = ({ children }: LayoutProps) => {
    return (
        <div>
            {children}
        </div>
    )
}
export default LayoutEmpty