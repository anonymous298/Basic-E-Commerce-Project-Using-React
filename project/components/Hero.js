import React from 'react'
import Image from "next/image";


const Hero = () => {
    return (
        <div className='bg-[#d9dbdd]'>
            {/* <div className='w-full bg-black p-3 '>
            <div>Don't miss our holiday offer - up to <span>50% OFF!</span></div>
        </div> */}

            <div className="hero min-h-[120vh] max-sm:min-h-[90vh] pt-15 flex justify-end max-md:justify-center max-w-[1920px] mx-auto relative">
                <div id="lefthero" className=' max-sm:pt-20 w-[35%] max-lg:w-[45%] max-md:w-[60%] max-sm:w-[90%] flex flex-col gap-12 absolute top-1/2 max-md:left-8 left-15 -translate-y-1/2 z-10'>
                    <h1 className='text-black font-mono text-7xl font-extrabold max-lg:text-6xl max-md:text-5xl'>Brand New Collection</h1>

                    <p className='font-semibold text-[#333333]'>Mauris vitae ultricies leo integer malesuada tempor orci dapibus ultrices diam in arcu cursus euismod purus viverra accumsan.</p>

                    <div className='flex justify-between'>
                        <li className='flex gap-2 items-center textce   '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className='bg-[#333333] rounded-full' viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                            <span className='font-semibold'>Top Brands</span>
                        </li>

                        <li className='flex gap-2 items-center textce   '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className='bg-[#333333] rounded-full' viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                            <span className='font-semibold'>High Quality</span>
                        </li>

                        <li className='flex gap-2 items-center textce   '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className='bg-[#333333] rounded-full' viewBox="0 0 256 256"><path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
                            <span className='font-semibold'>Free Delivery</span>
                        </li>
                    </div>

                    <button className='self-start text-lg bg-[#e33a3f] py-4 px-10 text-white font-bold border-none cursor-pointer hover:bg-[#980207]'>Explore Shop</button>
                </div>

                <div id="righthero" className=' w-[55%] relative z-0 '>
                    <Image src={'/home-hero-bg.png'} fill={true} alt='img' />
                </div>
            </div>

            <div className='w-full bg-black p-20'>
                <div className='w-full mx-auto flex justify-between items-center max-w-[1920px] max-md:flex-col gap-y-10'>
                    <div className='flex flex-col items-center justify-center'>
                        <svg className="ugb-custom-icon" xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 55 55" aria-hidden="true" width="48" height="48"><path d="M22.8 33.9H6c-1.4 0-2.5-1.2-2.5-2.6V14h43.3v7.6c0 .9.8 1.7 1.7 1.7 1 0 1.8-.7 1.8-1.7v-12c0-3.3-2.7-6.1-6-6.1H6c-3.3 0-6 2.8-6 6.1v21.7c0 3.3 2.7 6.1 6 6.1H22.9c1 0 1.7-.8 1.7-1.8s-.8-1.7-1.8-1.7zM6 7h38.3c1.4 0 2.5 1.2 2.5 2.6v.9H3.5v-.9C3.5 8.2 4.6 7 6 7zm.6 16c0-1 .8-1.8 1.8-1.8h4.7c1 0 1.8.7 1.8 1.7s-.7 1.8-1.7 1.8H8.4c-1 .1-1.8-.7-1.8-1.7zm0 5.9c0-1 .8-1.8 1.8-1.8h9.4c1 0 1.7.8 1.7 1.8 0 .9-.8 1.7-1.7 1.7H8.4c-1 0-1.8-.8-1.8-1.7zm34.9-4.3c-7.4 0-13.5 6-13.5 13.5 0 7.4 6 13.5 13.5 13.5C49 51.5 55 45.5 55 38c0-7.4-6-13.4-13.5-13.4zm0 24C35.7 48.6 31 43.8 31 38s4.7-10.5 10.5-10.5S52.1 32.2 52.1 38s-4.8 10.6-10.6 10.6zm5.2-14c.6.6.6 1.5 0 2.1l-5.5 5.5c-.3.3-.7.4-1 .4-.4 0-.8-.1-1-.4l-2.8-2.8c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0l1.8 1.8 4.4-4.4c.5-.7 1.4-.7 2-.1z"></path></svg>
                        <h4 className='text-white font-bold text-lg mt-5'>Secure Payment</h4>
                        <p className='text-gray-400'>100% secure payment</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <svg className="ugb-custom-icon" xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 55 55" aria-hidden="true" width="48" height="48">
                            <path d="M54.8 24.5c-.1-.9-.9-1.5-1.8-1.4-.9.1-1.5.9-1.4 1.8 1.5 13.3-8.2 25.3-21.5 26.8-.9.1-1.8.1-2.7.1-7.5 0-14.6-3.4-19.3-9.3h3.2c.8-.1 1.4-.8 1.4-1.7 0-.8-.6-1.5-1.4-1.6H4.5c-.4 0-.9.1-1.2.4-.3.4-.5.8-.5 1.3v7.3s0 1.2 1.6 1.2c.7.2 1.4-.4 1.6-1.1v-3.4c7.3 8.9 19.3 12.3 30.3 8.7 12.2-4.1 19.9-16.2 18.5-29.1zm-54.6 6c.1.9.9 1.5 1.8 1.4.9-.1 1.5-.9 1.4-1.8C1.9 16.8 11.5 4.8 24.8 3.4c.9-.1 1.8-.1 2.7-.1 7.5 0 14.6 3.4 19.3 9.3h-3.2c-.8.1-1.4.8-1.4 1.7 0 .8.6 1.5 1.4 1.6h6.9c.4 0 .9-.1 1.2-.4.3-.4.5-.8.5-1.3V6.7s0-1.2-1.6-1.2c-.7-.1-1.4.5-1.6 1.2v3.4C41.7 1.3 29.7-2.2 18.8 1.4 6.5 5.5-1.2 17.6.2 30.5zm25.1-3 3.8 2.8c.2.2.3.5.1.8-.1.1-.3.2-.4.2h-1.2c-.3 0-.6-.2-.6-.6 0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6 0 1.7 1.1 3.2 2.8 3.6v.1c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-.1c1.6-.5 2.8-2 2.8-3.7 0-1.2-.6-2.3-1.5-3l-3.8-2.8c-.2-.2-.3-.5-.1-.8.1-.1.3-.2.4-.2h1.2c.3 0 .6.2.6.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-1.7-1.1-3.2-2.8-3.6v-.1c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6v.1c-2 .6-3.2 2.6-2.6 4.6.2.9.6 1.6 1.3 2.1zm2.9 13.8c7.5 0 13.6-6.1 13.6-13.6s-6.1-13.6-13.6-13.6-13.6 6.1-13.6 13.6 6.1 13.5 13.6 13.6zm0-24c5.7 0 10.4 4.7 10.4 10.4S33.9 38 28.2 38s-10.4-4.7-10.4-10.4 4.6-10.3 10.4-10.3z"></path>
                        </svg>

                        <h4 className='text-white font-bold text-lg mt-5'>30 Days Return</h4>
                        <p className='text-gray-400'>If goods have problems</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <svg className="ugb-custom-icon" xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 55 55" aria-hidden="true" width="48" height="48">
                            <path d="M27.5 0C14.2 0 3.3 10.8 3.3 24.2v13.1c0 2.7 2.2 4.8 4.8 4.8H10c.9 2.5 3.6 3.8 6.2 2.9 1.9-.7 3.2-2.5 3.2-4.6v-13c0-2.7-2.2-4.8-4.8-4.8-2 0-3.9 1.3-4.6 3.2H8.1c-.5 0-1.1.1-1.6.3v-1.9c-.2-11.6 9-21.1 20.6-21.3 11.6-.2 21.1 9 21.3 20.6V26.1c-.5-.2-1.1-.3-1.6-.3h-1.9c-.9-2.5-3.6-3.8-6.2-2.9-1.9.7-3.2 2.5-3.2 4.6v13.1c0 2.7 2.2 4.8 4.8 4.8.5 0 .9-.1 1.4-.2-.6 2-2.5 3.4-4.6 3.4H32c-.9-2.5-3.7-3.8-6.2-2.9-2.5.9-3.8 3.7-2.9 6.2.9 2.5 3.7 3.8 6.2 2.9 1.4-.5 2.5-1.6 2.9-2.9h5.1c4.4 0 8.1-3.6 8.1-8.1v-1.6h1.6c2.7 0 4.8-2.2 4.8-4.8V24.2C51.7 10.8 40.8 0 27.5 0zM13 27.4c0-.9.8-1.6 1.7-1.6.9 0 1.5.7 1.6 1.6v13.1c0 .9-.8 1.6-1.7 1.6-.9 0-1.5-.7-1.6-1.6V27.4zM8.2 29h1.6v9.9H8.2c-.9 0-1.6-.7-1.6-1.6v-6.7c0-.9.7-1.6 1.6-1.6zm19.3 22.8c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zM42 40.5c0 .9-.8 1.6-1.7 1.6-.9 0-1.5-.7-1.6-1.6V27.4c0-.9.8-1.6 1.7-1.6.9 0 1.5.7 1.6 1.6v13.1zm6.4-3.2c0 .9-.7 1.6-1.6 1.6h-1.6V29h1.6c.9 0 1.6.7 1.6 1.6v6.7z"></path>
                        </svg>

                        <h4 className='text-white font-bold text-lg mt-5'>24/7 Support</h4>
                        <p className='text-gray-400'>Dedicated support</p>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <svg className="ugb-custom-icon" xmlns="http://www.w3.org/2000/svg" fill='#fff' viewBox="0 0 55 55" aria-hidden="true" width="48" height="48">
                            <path d="m32.8 13.5 3.8 2.8c.2.2.3.5.1.8-.1.1-.3.2-.4.2h-1.2c-.3 0-.6-.2-.6-.6 0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6 0 1.7 1.1 3.2 2.8 3.6v.1c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-.1c1.6-.5 2.8-2 2.8-3.7 0-1.2-.6-2.3-1.5-3l-3.8-2.8c-.2-.2-.3-.5-.1-.8.1-.1.3-.2.4-.2h1.2c.3 0 .6.2.6.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-1.7-1.1-3.2-2.8-3.6 0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6v.1c-2 .6-3.2 2.6-2.6 4.6.1.8.6 1.5 1.3 2zm2.9 13.7c7.5 0 13.6-6.1 13.6-13.6S43.2 0 35.6 0C28.1 0 22 6.1 22 13.6c.1 7.5 6.1 13.6 13.7 13.6zm0-24C41.4 3.2 46 7.9 46 13.6S41.4 24 35.6 24c-5.7 0-10.4-4.7-10.4-10.4.1-5.7 4.7-10.4 10.5-10.4zm18.2 27.7c-1.7-2.2-4.9-2.7-7.2-1.1l-6.1 4.1c-.9-1.6-2.6-2.7-4.5-2.7h-4.4c-4.8-4.5-12.4-4.3-16.9.5-.7.8-1.3 1.6-1.8 2.5l-.8.5-.2-.6c-.3-.8-1.2-1.3-2-1l-8.9 3c-.8.3-1.3 1.2-1 2l5.4 15.7c.3.8 1.2 1.3 2 1l8.9-3c.8-.3 1.3-1.2 1-2v-.1l14.1-.4c3.8 0 7.5-1.2 10.7-3.4l10.6-7.6c2.4-1.7 2.9-5 1.2-7.3l-.1-.1zM8 51.3 3.7 38.7l5.8-2 4.3 12.7L8 51.3zm42.9-15.6-10.6 7.6c-2.6 1.8-5.7 2.8-8.8 2.8l-15.1.5-3-8.7 1.8-1.1c.3-.2.5-.4.6-.7 2.1-4.3 7.4-6.1 11.7-4 .9.5 1.8 1.1 2.5 1.8.3.3.7.5 1.2.5h5c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8h-9.1c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h9.1c2.3 0 4.4-1.6 4.9-3.9l7.5-5c.9-.6 2.2-.4 2.8.5.6 1 .4 2.3-.5 2.9z"></path>
                        </svg>

                        <h4 className='text-white font-bold text-lg mt-5'>Free Delivery</h4>
                        <p className='text-gray-400'>For all order over 80$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
