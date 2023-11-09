import Image from 'next/image'

import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import ShopNow from './components/ShopNow'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='w-full h-[600px] mb-10 flex p-24 items-center justify-between'>
        <div className='w-[600px] flex flex-col gap-6 align-start'>
          <h1 className='lg:text-7xl md:text-5xl text-3xl font-bold'>Embrace Your SGSITS Identity</h1>
          <h3 className='text-[1.8rem] leading-[2rem]'>Discover and Flaunt Campus Spirit with our Exclusive Merchandise!</h3>
          <ShopNow/>
        </div>
        <div className='min-w-[400px]'>
          <Image src={'/images/hoodie.png'} height={500} width={500} alt={'hsvh'}></Image>
        </div>
      </section>
      <section id='product-section' className='flex flex-col items-center'>
        <div className='w-full bg-gray-700 text-center text-4xl font-semibold px-24 py-8 text-white tracking-widest'>EXCLUSIVELY FOR SGSITS</div>
        <div className='flex flex-col justify-center px-24 py-6'>
          <div className='flex flex-wrap justify-center gap-x-24 gap-y-16'>
            <ProductCard image={'/images/tshirt.png'} desc={'SGSITS MAP print White T-shirt'} price={300}/>
            <ProductCard image={'/images/tshirt.png'} desc={'SGSITS MAP print White T-shirt'} price={300}/>
            <ProductCard image={'/images/tshirt.png'} desc={'SGSITS MAP print White T-shirt'} price={300}/>
            <ProductCard image={'/images/tshirt.png'} desc={'SGSITS MAP print White T-shirt'} price={300}/>
            <ProductCard image={'/images/tshirt.png'} desc={'SGSITS MAP print White T-shirt'} price={300}/>
            <ProductCard image={'/images/tshirt.png'} desc={'SGSITS MAP print White T-shirt'} price={300}/>
            <ProductCard image={'/images/tshirt.png'} desc={'SGSITS MAP print White T-shirt'} price={300}/>
            <ProductCard image={'/images/tshirt.png'} desc={'SGSITS MAP print White T-shirt'} price={300}/>
            <ProductCard image={'/images/tshirt.png'} desc={'SGSITS MAP print White T-shirt'} price={300}/>
          </div>
        </div>
      </section>
      
    </main>
  )
}
