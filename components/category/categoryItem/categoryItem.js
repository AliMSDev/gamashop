import React from 'react'
import Link from 'next/link';

// category item component
const CategoryItem = (props) => {
    return (
        <li>
            <Link href='/products/category/[name]' as={props.link}>
                <a>{props.text}</a>
            </Link>
        </li>
    )
}

export default CategoryItem
