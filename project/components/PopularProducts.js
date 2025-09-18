"use client"

import React, { useState } from 'react'
import products from '@/data/products'
import Link from 'next/link'
import ProductCard from './ProductCard'
import { useRouter } from 'next/navigation'

const PopularProducts = () => {
    const popularproducts = products.slice(0, 4);
    const router = useRouter();
    // console.log(newArrivals)

    return (
        <div className='flex items-center justify-center py-22 px-2'>
            <div className='w-[95%] max-w-[1920px] flex flex-col gap-y-18'>
                <div id="upper" className='flex justify-center items-center'>
                    <div className='flex flex-col gap-3 text-center'>
                        <p className='text-gray-400 font-semibold text-lg'>Check out popular products</p>
                        <h3 className='text-black font-bold text-5xl font-mono'>Popular Products</h3>
                    </div>
                </div>

                <div id="lower" className='grid grid-cols-4 gap-7 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                    {popularproducts.map((item, idx) => {
                        return (
                            <div key={idx} onClick={() => router.push(`/item/${item.id}`)}>

                                <ProductCard item={item} name={item.name} image={item.image} price={item.price} onSale={true} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PopularProducts
