import Image from 'next/image'
import React from 'react'
import logoImg from '@/assets/logosaas.png'
import xImg from '@/assets/social-x.svg'
import instaImg from '@/assets/social-insta.svg'
import linkedinImg from '@/assets/social-linkedin.svg'
import pinImg from '@/assets/social-pin.svg'
import youtubeImg from '@/assets/social-youtube.svg'

export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
        <Image src={logoImg} alt="logoImg" height={40} className="relative " />
        </div>
        
        <nav className="flex md:flex-row md:justify-center gap-6 flex-col mt-6">
          <a href="#About" className='hover:text-white'>About</a>
          <a href="#Features" className='hover:text-white'>Features</a>
          <a href="#Pricing" className='hover:text-white'>Pricing</a>
          <a href="#Customers" className='hover:text-white'>Customers</a>
          <a href="#Help" className='hover:text-white'>Help</a>
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          <Image src={xImg} alt="xImg" height={40} className="h-5 w-5 filter brightness-0 invert opacity-70" />
          <Image src={instaImg} alt="instaImg" height={40} className="h-5 w-5 filter brightness-0 invert opacity-70" />
          <Image src={linkedinImg} alt="linkedinImg" height={40} className="h-5 w-5 filter brightness-0 invert opacity-70" />
          <Image src={pinImg} alt="pinImg" height={40} className="h-5 w-5 filter brightness-0 invert opacity-70" />
          <Image src={youtubeImg} alt="youtubeImg" height={40} className="h-5 w-5 filter brightness-0 invert opacity-70" />
        </div>
        <p className='mt-6'>&copy; 2025 Your Compony, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
