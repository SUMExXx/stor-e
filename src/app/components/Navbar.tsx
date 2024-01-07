'use client';
import React, { useContext } from 'react';

import { useGoogleAuth } from '@/context/useGoogleAuth';
import { AuthContext } from '@/context/AuthContext'
import {auth} from "@/context/firebase";

import Image from 'next/image';
import Link from 'next/link';

import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider, User, getAuth} from "firebase/auth";

const Navbar = () => {

    let auth = getAuth()
    

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

        <Sign/>
        
    </nav>
  )
}

const Sign = () =>{

    // const { user, googleSignIn, logOut} = useGoogleAuth();

    const { user, googleSignIn, logOut} = useContext(AuthContext);

    const handleSignIn = async () =>{
        try{
            await googleSignIn()
        } catch(error){
            console.log(error)
        }
    }

    if(user == null){
        return(
            <div className='flex gap-2'>
                {/* <button className='py-2 px-2 rounded-full whitespace-nowrap' >
                    Sign In
                </button> */}
                <button className='py-2 px-6 rounded-full whitespace-nowrap text-white bg-[#264065]' onClick={handleSignIn}>
                    Sign In
                </button>
            </div>    
        )
    }
    else{

        let photoSrc = '';

        if(auth.currentUser?.photoURL != null || auth.currentUser?.photoURL != undefined){
            photoSrc = auth.currentUser?.photoURL
        }

        return(
            <button className='flex flex-row gap-1 justify-center align-middle items-center py-[8px] px-[20px] rounded-[20px] whitespace-nowrap text-white bg-[#264065]'>
                <Image src={photoSrc} alt="User Photo" className='object-cover rounded-full' width={24} height={24}/>
                <h5 className='px-2'>{auth.currentUser?.displayName?.toString().substring(0, auth.currentUser?.displayName.toString().indexOf(' '))}</h5>
                <button title='log Out' className='flex flex-row items-center align-middle justify-center rounded-full h-full bg-white px-1' onClick={logOut}>
                    <i className="fi fi-rs-sign-out-alt text-black flex flex-col justify-center align-middle"></i>
                </button>
            </button>   
        )
    }
}

export default Navbar