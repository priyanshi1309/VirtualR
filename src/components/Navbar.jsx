import React from 'react'
import { useState } from 'react'
import  logo from '../assets/logo.png'
import {navItems} from '../constants/index'
import {Menu, X} from 'lucide-react'

const Navbar = () => {

    const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setmobileDrawerOpen(!mobileDrawerOpen);
    }
    const handleClick = () => {
        setmobileDrawerOpen(false);
    }


  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg 
    border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10 mr-2' src={logo} alt='logo' />
                    <span className="text-xl tracking-tight">
                        VirtualR
                    </span>
                </div>
                <ul className='hidden md:flex ml-14 
                space-x-8'>
                    {navItems. map((item, index) => (
                        <li key={index} >
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:flex justify-center space-x-8 items-center">
                    <a href='#' className='py-2 px-3 border rounded-md'>
                        Sign In
                    </a>
                    <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                            Create an Account
                    </a>
                </div>
                <div className="md:hidden flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 
                z-20 bg-neutral-900  w-full p-12 
                flex flex-col justify-start items-center 
                md:hidden h-screen">
                    <ul>
                    {navItems. map((item, index) => (
                        <li key={index} className='py-4 flex flex-col justify-center items-center'>
                            <a href={item.href} onClick={handleClick}>{item.label}</a>
                        </li>
                    ))}
                    </ul>
                    <div className="flex flex-col justify-center items-center  mt-10">
                    <a href='#' className='my-2 py-2 px-3 border rounded-md w-fit'>
                        Sign In
                    </a>
                    <a href='#' className='my-2 bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                            Create an Account
                    </a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar