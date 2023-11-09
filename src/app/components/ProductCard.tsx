import React from 'react'
import Image from 'next/image'

interface Product{
    image: string,
    desc: string,
    price: number
}

const ProductCard = ({image, desc, price}: Product) => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 h-[400px] w-[200px] cursor-pointer'>
        <div className='flex items-center justify-center shadow-xl hover:shadow-2xl ease-in-out bg-gray-400 border-gray-500 border-2 p-[30px] rounded-[40px]'>
            <Image src={image} height={200} width={200} alt={desc} className='object-cover'/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h5 className='font-medium text-center w-[180px]'>{desc}</h5>
            <h1 className='text-3xl font-bold text-center'>₹ {price.toString()}</h1>
        </div>
    </div>
  )
}

export default ProductCard