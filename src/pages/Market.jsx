import React from 'react'
import { useSelector } from 'react-redux'

import Card from '../components/Card'
import CardSkeleton from '../components/CardSkeleton'

const Market = () => {
    const items = useSelector((state) => state.items)
    let isLoad = useSelector((state) => state.loaded)

    const CardsSkeleton = (
        [...Array(9)].map((_, index) => <CardSkeleton key={index} />)
    )
    const Cards = (
        items && Object.keys(items).map((name, index) => {
            return <Card key={index} item={items[name]} />
        })
    )
    return isLoad ? CardsSkeleton : Cards
}

export default Market