'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from '../components/ProductCard'
import {products} from '@/data/products'

const About = () => {

  const searchParams = useSearchParams()

  const id = Number(searchParams.get('id'))

  if (id === null) {
    // Handle the case where id is null (e.g., show an error message, redirect, or handle gracefully)
    return <div>Error: Product ID not provided.</div>;
  }

  const product = products[id];

  if (!product) {
    // Handle the case where the product with the specified id is not found
    return <div>Error: Product not found.</div>;
  }


  return (
    <div className='flex flex-col justify-center items-center gap-8 py-12 px-12 text-xl text-justify'>
      <div className='flex flex-wrap gap-8 justify-center items-center'>
        <div className='flex items-center justify-center shadow-xl hover:shadow-2xl ease-in-out bg-gray-400 border-gray-500 border-2 p-[30px] rounded-[40px]'>
          <Image src={products[id].img} height={300} width={300} alt={'SGSITS MAP print White T-shirt'} className='object-cover'/>
        </div>

        <form>
          <h3>{products[id].title}</h3>
          <h5>{products[id].desc}</h5>
          <h2>${products[id].price.toString()}</h2>
        </form>
      </div>
      
      

      
    </div>
  )
}

export default About