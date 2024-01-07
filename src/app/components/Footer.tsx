import Link from 'next/link'
import React from 'react'
import { contact } from '@/data/info'

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
            <div className='flex flex-col gap-2 max-w-lg'>
                <h3 className='text-gray-300 font-bold'>CONTACT US</h3>
                <ul className='flex flex-col text-gray-400 gap-1'>
                    <li className='flex flex-row gap-2 align-middle '>
                        <i className="fi fi-rs-marker flex flex-col align-middle justify-center"></i>
                        <h5>{contact.address}</h5>
                    </li>
                    <li className='flex flex-row gap-2 align-middle '>
                        <i className="fi fi-rr-envelope flex flex-col align-middle justify-center"></i>
                        <h5>{contact.email}</h5>
                    </li>
                    <li className='flex flex-row gap-2 align-middle '>
                        <i className="fi fi-rr-phone-call flex flex-col align-middle justify-center"></i>
                        <h5>{contact.call[0].name}: {contact.call[0].phoneNum}</h5>
                    </li>
                    <li className='flex flex-row gap-2 align-middle '>
                        <i className="fi fi-rr-phone-call flex flex-col align-middle justify-center"></i>
                        <h5>{contact.call[1].name}: {contact.call[1].phoneNum}</h5>
                    </li>
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