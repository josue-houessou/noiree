import React from 'react'
import Img from '../assets/img.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'



const Collection = () => {
    return (
        <div className='bg-black text-white flex flex-col md:flex-row
        justify-between items-center md:items-start gap-10 px-6 py-10'>
            {/* text Section  */}
            <div className='flex flex-col md:w-1/2 text-left md:items-start
            items-center mt-0 md:mt-20 pt-10 md:pt-0 gap-2'>
                <h1 className='text-5xl font-serif'>Best Collection</h1>
                <p className='text-sm'>A curated range of timeless fragrances.</p>
                    <p className='text-sm'>From classics to exclusives, all in one place.</p>
                        <button className='w-fit px-4 py-1 bg-[#977a36] font-medium
                        rounded-full shadow hover:bg-[#4d260f] hover:text-white
                        transition'>
                            Shop Now
                        </button>
            </div>
            {/* image section  */}
            <div className='flex flex-col md:flex-row gap-4 md:w-1/2 justify-center
            md:justify-start md:border items-center'>
                <div className='w-2/3 md:ml-30'>
                    <img src={Img2} alt="" className='h-auto'/>
                </div>
                <div className='flex flex-col justify-start md:w-2/3 
                items-center gap-3 mb-2'>
                    <img src={Img} alt="" className='md:w-32 w-2/3 h-auto'/>
                    <img src={Img3} alt="" className='md:w-32 w-2/3 h-auto'/>
                </div>
            </div>
        </div>
    )
}

export default Collection