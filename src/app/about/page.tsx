import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 py-24 px-36 text-xl text-justify'>
      <Image src={'/icons/stor-e_by_ecell.png'} height={200} width={200} alt={'hxv'}></Image>
      <p>
        STOR-E is the first merchandise store of SGSITS, a college with a legacy of over 70 years, mentored by E-Cell, SGSITS Indore to fill the void of our college’s products. STOR-E is also initialized to impart knowledge and skills of entrepreneurship and at the same time brand the institute through merchandise articles, trending among the students by setting up a live example.
We have included a diverse and versatile range of products to allure the interest of students, faculty members, officials, staff members & alums of the institution.
      </p>
      <p className='flex justify-center items-center gap-2'>Follow us on <Link href={'https://www.instagram.com/stor_e.ecellsgsits/'} target='_blank' className='flex justify-center items-center'><i className="fi fi-brands-instagram"></i></Link></p>
    </div>
  )
}

export default About