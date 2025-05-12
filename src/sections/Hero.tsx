'use client'
import Image from "next/image";
import React, { useRef } from "react";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImg from "@/assets/cog.png";
import cylinderImg from "@/assets/cylinder.png";
import noodleImg from "@/assets/noodle.png";
import { motion , useScroll , useTransform , useMotionValueEvent } from "motion/react"


export const Hero = () => {
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target:heroRef,
    offset:["start end" , "end start"]
  });
  const translateY = useTransform(scrollYProgress , [0,1] , [150 , -150]);
  useMotionValueEvent(scrollYProgress , 'change' , (latestValue)=>
    console.log(latestValue)
);
  

  return ( 
    <section id="About" ref={heroRef} className="pt-8 md:pt-5 md:pb-10 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center justify-between">
          <div className="md:w-[650px]">
            <div>
              <div className="tag">
                version 15.3.2 is here
              </div>
              <h1 className=" text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                Path Way To Productivity
              </h1>
              <p className="text-2xl text-[#010D3E] tracking-tight mt-6">
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes.
              </p>
            </div>
            <div className="flex items-center mt-[30px] gap-2">
              <button className="btn btn-primary">Get For Free</button>
              <button className="btn btn-text gap-1">
                Learn More{" "}
                <Image src={ArrowIcon} alt="arrow" className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] relative">
            <motion.img
              src={cogImg.src}
              alt="cogImg"
              className=" md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
              animate={{
                translateY : [-30 , 30 ],
              }}
              transition={{
                repeat:Infinity,
                repeatType:"mirror",
                duration:4,
                ease:"easeInOut"
              }}
            />
            <motion.img
              src={cylinderImg.src}
              alt="cylinderImg"
              width={220}
              height={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{
                translateY: translateY
              }}
            />
            <motion.img
              src={noodleImg.src}
              alt="noodleImg"
              width={220}
              className="absolute hidden lg:block top-[524px] left-[448px]"
              style={{
                rotate:30,
                translateY: translateY
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
