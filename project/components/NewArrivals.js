"use client"

import React, { useState } from 'react'
import products from '@/data/products'
import Link from 'next/link'
import ProductCard from './ProductCard'
import { useRouter } from 'next/navigation'
// import { userAgent } from 'next/server'

const NewArrivals = () => {
    const newArrivals = products.slice(0, 4);
    const router = useRouter();
    // console.log(newArrivals)

    return (
        <div className='flex items-center justify-center py-22 px-2'>
            <div className='w-[95%] max-w-[1920px] flex flex-col gap-y-18'>
                <div id="upper" className='flex justify-between items-center'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-gray-400 font-semibold text-lg'>Check out latest products</p>
                        <h3 className='text-black font-bold text-5xl font-mono'>New Arrivals</h3>
                    </div>

                    <Link href={'/products'} className='border-2 border-gray-500 px-6 py-2 text-black font-bold hover:bg-[#e33a3f] hover:border-[#e33a3f] transition-all hover:text-white'>View All</Link>
                </div>

                <div id="lower" className='grid grid-cols-4 gap-7 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                    {newArrivals.map((item, idx) => {
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

export default NewArrivals
