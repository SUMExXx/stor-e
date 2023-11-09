import React from 'react';

import { UseAuth } from '@/context/AuthContext';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {



  return (
    <nav className='top-0 left-0 right-0 z-10 flex fixed gap-4 bg-white w-full px-10 py-4 h-[40]'>
        
        <Link href={'/'} className='flex items-center gap-4 min-w-[110px]'>
            <div className='flex items-center'>
                <Image src={'/icons/stor-e.png'} width={30} height={30} alt={'Stor-E logo'}></Image>
            </div>
            <div className='flex items-center'>
                <Image src={'/icons/stor-e_by_ecell.png'} width={110} height={30} alt={'Store-E name-logo'}/>
            </div>
        </Link>

        <div className='w-full flex items-center justify-center'>
            <ul className='flex items-center gap-8 font-medium'>
                <li >
                    <Link href={'/'}>Home</Link>
                </li>
                <li >
                    <Link href={'/about'}>About</Link>
                </li>
                <li >
                    <Link href={'/'}>Services</Link>
                </li>
                <li >
                    <Link href={'/'}>Facilities</Link>
                </li>
                <li >
                    <Link href={'/'}>More</Link>
                </li>
            </ul>
        </div>

        <div className='flex gap-6 items-center'>
            <i className="fi fi-rs-search"></i>

            <Link href={'/cart'}>
                <i className="fi fi-rs-shopping-cart"></i>
            </Link>
            
        </div>

        <div className='flex gap-2'>
            <button className='py-2 px-2 rounded-full whitespace-nowrap'>
                Sign In
            </button>
            <button className='py-2 px-6 rounded-full whitespace-nowrap text-white bg-[#264065]'>
                Sign Up
            </button>
        </div>
        
    </nav>
  )
}

export default Navbar