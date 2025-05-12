"use client";
import Image from "next/image";
import React from "react";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import {motion} from "motion/react";

export const LogoTicker = () => {
  return (
    <div id="Features">
      <div className=" py-8 md:py-12 bg-white">
        <div className="container">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              className="flex flex-none gap-14 pr-14 "
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 20,
                repeat:Infinity,
                ease:"linear",
                repeatType:"loop",
              }}
            >
              <Image
                src={acmeLogo}
                alt="acmeLogo"
                className="logo-ticker-image"
              />
              <Image
                src={quantumLogo}
                alt="quantumLogo"
                className="logo-ticker-image"
              />
              <Image
                src={apexLogo}
                alt="apexLogo"
                className="logo-ticker-image"
              />
              <Image
                src={celestialLogo}
                alt="celestialLogo"
                className="logo-ticker-image"
              />
              <Image
                src={echoLogo}
                alt="echoLogo"
                className="logo-ticker-image"
              />
              <Image
                src={pulseLogo}
                alt="pulseLogo"
                className="logo-ticker-image"
              />


              <Image
                src={acmeLogo}
                alt="acmeLogo"
                className="logo-ticker-image"
              />
              <Image
                src={quantumLogo}
                alt="quantumLogo"
                className="logo-ticker-image"
              />
              <Image
                src={apexLogo}
                alt="apexLogo"
                className="logo-ticker-image"
              />
              <Image
                src={celestialLogo}
                alt="celestialLogo"
                className="logo-ticker-image"
              />
              <Image
                src={echoLogo}
                alt="echoLogo"
                className="logo-ticker-image"
              />
              <Image
                src={pulseLogo}
                alt="pulseLogo"
                className="logo-ticker-image"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
