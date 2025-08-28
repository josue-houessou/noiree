import React, { useState } from 'react'
import {Search, User, ShoppingBag, X, Menu } from 'lucide-react'
const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className='flex items-center justify-between p-4 md:px-10 shadow-md relative z-50'>
            <div className='text-2xl font-bold text-[#4d260f]'>Noirée</div>
            <ul className='hidden md:flex gap-6 font-medium text-black'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>Shop</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className='hidden md:flex gap-5 text-gray-800'>
                <Search className='w-5 h-5 cursor-pointer'/>
                <User className='w-5 h-5 cursor-pointer'/>
                <ShoppingBag className='w-5 h-5 cursor-pointer'/>
            </div>
            <div className='md:hidden'>
                <button onClick={toggleMenu}>
                    {isOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>
            </div>
            {isOpen && (
                <ul className='absolute top-16 left-0 w-full
                bg-white flex flex-col items-center gap-4 py-4
                shadow-md md:hidden z-40'>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>Contact</li>
                <div className='flex gap-6 text-gray-800'>
                <Search className='w-5 h-5 cursor-pointer'/>
                <User className='w-5 h-5 cursor-pointer'/>
                <ShoppingBag className='w-5 h-5 cursor-pointer'/>
            </div>
                </ul>
            )}
        </nav>
    )
}

export default Navbar