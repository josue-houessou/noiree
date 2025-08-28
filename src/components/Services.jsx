import React from 'react'
import Img from '../assets/images.png'
import Img2 from '../assets/image.png'
const Services = () => {
    return (
        <div className='flex flex-col items-center w-full'>
            <div className='flex flex-col md:flex-row justify-center
            items-stretch py-5 px-3 md:px-10 mt-4 gap-6'>
                {/* card 1 */}
                <div className='w-full md:w-1/2 flex items-center border py-6 px-6 gap-4 min-h-[230px]'>
                    <div>
                        <img src={Img} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-serif text-3xl'>
                            High Shelf Life
                        </h1>
                        <p className='text-sm'>Lasts all day, unforgettable always.</p>
                        <button className='w-fit px-4 py-1 bg-[#977a36] font-medium
                        rounded-full shadow hover:bg-[#4d260f] hover:text-white
                        transition'>
                            Shop Now
                        </button>
                    </div>
                </div>
                {/* card 2 */}
                <div className='w-full md:w-1/2 flex items-center border py-6 px-6 gap-4 min-h-[230px]'>
                    <div>
                        <img src={Img2} alt="" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-serif text-3xl'>
                            Affordable Price
                        </h1>
                        <p className='text-sm'>Luxury scents without the luxury price.</p>
                        <button className='w-fit px-4 py-1 bg-[#977a36] font-medium
                        rounded-full shadow hover:bg-[#4d260f] hover:text-white
                        transition'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services