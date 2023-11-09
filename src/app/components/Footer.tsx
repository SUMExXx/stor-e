import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center bg-black'>
        <div className='w-full flex flex-wrap gap-24 justify-center px-24 py-16'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-gray-300 font-bold'>GET TO KNOW US</h3>
                <ul className='flex flex-col text-gray-400'>
                    <li><Link href={'/'}>About Us</Link></li>
                    <li><Link href={'/'}>Facilities</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-gray-300 font-bold'>GET TO KNOW US</h3>
                <ul className='flex flex-col text-gray-400'>
                    <li><Link href={'/'}>About Us</Link></li>
                    <li><Link href={'/'}>Facilities</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-gray-300 font-bold'>GET TO KNOW US</h3>
                <ul className='flex flex-col text-gray-400'>
                    <li><Link href={'/'}>About Us</Link></li>
                    <li><Link href={'/'}>Facilities</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-gray-300 font-bold'>GET TO KNOW US</h3>
                <ul className='flex flex-col text-gray-400'>
                    <li><Link href={'/'}>About Us</Link></li>
                    <li><Link href={'/'}>Facilities</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-gray-300 font-bold'>GET TO KNOW US</h3>
                <ul className='flex flex-col text-gray-400'>
                    <li><Link href={'/'}>About Us</Link></li>
                    <li><Link href={'/'}>Facilities</Link></li>
                </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-gray-300 font-bold'>GET TO KNOW US</h3>
                <ul className='flex flex-col text-gray-400'>
                    <li><Link href={'/'}>About Us</Link></li>
                    <li><Link href={'/'}>Facilities</Link></li>
                </ul>
            </div>
        </div>
        <div className="w-full h-[1px] bg-gray-800">
        </div>
        <div className='px-24 py-6 flex justify-center items-center text-gray-400'>
            © E-Cell SGSITS
        </div>
        
    </div>
  )
}

export default Footer