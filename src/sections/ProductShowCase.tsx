"use client";
import Image from "next/image";
import React, { useRef } from "react";
import productImg from "@/assets/product-image.png";
import pyramidImg from "@/assets/pyramid.png";
import tubeImg from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "motion/react";

export const ProductShowCase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div>
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="mt-5 section-title">
            A more effective way to <br /> track progress
          </h2>
          <p className="section-description mt-5 section-heading">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="relative">
          <Image src={productImg} alt="productImg" className="mt-10" />
          <motion.img
            src={pyramidImg.src}
            alt="pyramidImg"
            className="hidden md:block absolute -right-36 -top-32"
            height={262}
            width={262}
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImg.src}
            alt="tubeImg"
            className="hidden md:block absolute bottom-24 -left-36"
            height={248}
            width={248}
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
