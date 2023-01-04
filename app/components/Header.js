import React from 'react'
import Link from 'next/link'



export default function Header(){
    return(
        <header>
            <nav className='flex flex-wrap items-center px-1 bg-green-600'>
                <Link className='inline-flex items-center px-9 mr-4' href='/'>
                    
                    <span className=' tracking-wide text-black text-3xl font-bold'>Cookie Stand Admin</span>
                </Link>
                
            </nav>
        </header>
    )
}