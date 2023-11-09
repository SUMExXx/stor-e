'use client';
import React from 'react'

const ShopNow = () => {

    const shopNow = () =>{
        const product = document.getElementById('product-section');
        if(product){
            window.scrollTo({left: 0, top: product.offsetTop - 72, behavior: 'smooth'})
        }
    }

  return (
    <button className='bg-red-600 py-4 px-2 text-2xl text-white rounded-full w-60' onClick={shopNow}>
        Shop Now
    </button>
  )
}

export default ShopNow