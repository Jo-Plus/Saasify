'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import ArrowRight from "@/assets/arrow-right.svg"
import logo from "@/assets/jo5.png"
import menu from "@/assets/menu.svg"


export const Header = () => {
  const [visible , setVisible] = useState(false);
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [visible]);
  return (<>
  <header className='sticky top-0 backdrop-blur-sm z-200'>
    <div className=' flex justify-center items-center py-3 bg-black text-white gap-2'>
      <p><span className='text-white/60 hidden md:inline-block'>Streamline your Workflow and boost your productivity </span> Get Started For Free</p>
      <Image src={ArrowRight} alt="arrow" className="h-4 w-5 bg-white rounded-md" />
    </div>
    <div className="container py-2">
      <div className="flex justify-between items-center">
        <a href="#">
       <Image src={logo} alt="logo" height={90} width={120} priority unoptimized/>
       </a>
       <button onClick={() => setVisible(true)}>
        <Image src={menu} alt="menu" className="h-5 w-5 md:hidden cursor-pointer" />
      </button>

      {visible && (
  <div className="fixed inset-0 z-[500]">
    <div className="w-[85%] mx-auto mt-8 rounded-2xl px-8 py-4 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
      <div
        className="icon-exit text-right cursor-pointer"
        onClick={() => setVisible(false)}
      >
        ❌
      </div>
      <ul className="space-y-4">
        <li onClick={() => setVisible(false)} className="text-left border-b border-[var(--border)] pb-[0.77rem] pt-2">
          <a href="#About">About</a>
        </li>
        <li onClick={() => setVisible(false)} className="text-left border-b border-[var(--border)] pb-[0.77rem] pt-2">
          <a href="#Features">Features</a>
        </li>
        <li onClick={() => setVisible(false)} className="text-left border-b border-[var(--border)] pb-[0.77rem] pt-2">
          <a href="#Pricing">Pricing</a>
        </li>
        <li onClick={() => setVisible(false)} className="text-left border-b border-[var(--border)] pb-[0.77rem] pt-2">
          <a href="#Customers">Customers</a>
        </li>
        <li onClick={() => setVisible(false)} className="text-left pb-[0.77rem] pt-2">
          <a href="#Help">Help</a>
        </li>
      </ul>
    </div>
  </div>
)}

       <nav className='hidden md:flex gap-6 text-black/60 items-center'>
        <a href="#About" className='hover:text-black'>About</a>
        <a href="#Features" className='hover:text-black'>Features</a>
        <a href="#Pricing" className='hover:text-black'>Pricing</a>
        <a href="#Customers" className='hover:text-black'>Customers</a>
        <a href="#Help" className='hover:text-black'>Help</a>
        <button className='btn btn-primary'>Get For Free</button>
       </nav>
       </div>
    </div>
  </header>

    </>)
}
