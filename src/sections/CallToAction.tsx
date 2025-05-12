"use client";
import Image from "next/image";
import React, { useRef } from "react";
import arrowImg from "@/assets/arrow-right.svg";
import starImg from "@/assets/star.png";
import springImg from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "motion/react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
      id="Help"
    >
      <div className="container relative ">
        <div>
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5 section-heading">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImg.src}
            alt="starImg"
            width={360}
            className="absolute  hidden md:block md:-left-[270px] md:-top-[90px] xl:-left-[100px] xl:-top-[70px] "
              style={{
                translateY: translateY
              }}
          />
          <motion.img
            src={springImg.src}
            alt="springImg"
            width={360}
            className="absolute hidden md:block md:-right-[190px] md:-top-[19px] xl:-right-[130px] xl:-top-[15px] "
              style={{
                translateY: translateY
              }}
          />
        </div>
        <div className="flex justify-center gap-2 mt-10">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            <span>Learn more</span>
            <Image src={arrowImg} alt="arrow" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
