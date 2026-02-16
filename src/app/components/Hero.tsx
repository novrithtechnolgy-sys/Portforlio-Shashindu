"use client";

import Image from "next/image";
import Container from "./ui/Container";
import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { FaAngleDoubleDown, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background (same) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.10),rgba(0,0,0,0)_55%)] z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-black via-black/60 to-transparent" />
      </div>

      <Container>
        {/* ✅ MOBILE ONLY (like screenshot) */}
        <div className="relative pt-14 pb-14 text-center md:hidden">
          <h1 className="sm:hidden text-[44px] leading-[1.02] text-white font-[timesTen]">
            Building Value.
            <br />
            <span className="font-bold">Defying</span>
            <br />
            <span className="font-bold">Expectations.</span>
          </h1>

        <h1 className="hidden sm:block text-[64px] leading-[1.02] text-white font-[timesTen]">
            Building Value.
            <span className="font-bold">Defying</span>
            <br />
            <span className="font-bold">Expectations.</span>
          </h1>

          <div className="relative mx-auto h-[260px] sm:h-[450px] bottom-10 w-full">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1770979819/3627213ff2c0364af06e30c7e78a07093577a104_b6n6rs.webp"
              alt="Hero Person"
              fill
              priority
              className="object-contain"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent" />
          </div>

          <p className="mx-auto  max-w-[600px] font-[helvetica] text-[14px] font-bold leading-6 text-white/65">
            I am a Strategic Entrepreneur and Director, bridging the gap between digital innovation, hospitality heritage, and real estate. From the initial idea to the boardroom, this is how I build.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center items-center gap-4">
            <a
            href="#portfolio"
            className="inline-flex font-[helvetica] items-center justify-center gap-3 w-[280px] rounded-full px-7 py-[14px]
            text-[15px] font-semibold text-white
            bg-gradient-to-b from-[#3A2BFF] to-[#1B0E86]
            shadow-[0_18px_60px_rgba(58,43,255,0.35)]
            hover:opacity-95"
            >
            Explore the Portfolio

            {/* animated arrow */}
                    <motion.span
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        }}
                        className="text-white/90"
                    >
                        <FaAngleDoubleDown size={18} />
                    </motion.span>
            </a>


            <a
              href="https://www.startupuncut.com/"
              className="inline-flex font-[helvetica] items-center justify-center w-[280px] rounded-full px-7 py-[14px]
              text-[15px] font-semibold text-[#B9A7FF]
              border border-[#3A2BFF]/40 bg-black/30 hover:bg-white/5"
            >
              Watch “Startup Uncut”
            </a>
          </div>
        </div>

        {/* ✅ DESKTOP ONLY (YOUR CODE UNCHANGED) */}
        <div className="hidden md:block">
          <div className="relative mt-16 h-[600px] lg:h-[700px] xl:h-[850px]">
            <div className="relative z-10 mx-auto text-center ">
              <h1 className="text-5xl font-[timesTen] text-[64px] xl:text-[90px] leading-[1.05] text-white">
                <span className="font-regular xl:text-[90px]">Building Value.</span>
                <br />
                <span className="font-bold xl:text-[96px]">Defying Expectations.</span>
              </h1>
            <div/>

            <div className="relative flex justify-between z-10 mx-auto w-full mt-3 text-center ">
              <div className="w-full ">
                <div className="absolute right-3/5 top-10 lg:top-20 mx-auto z-10">
                  <p className="mx-auto font-[helvetica] md:text-[14px] xl:text-[20px] font-bold leading-7 text-white/65">
                    I am a Strategic Entrepreneur and Director, bridging the gap between digital innovation, hospitality heritage, and real estate. From the initial idea to the boardroom, this is how I build.
                  </p>

                  <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                    <a
                    href="#portfolio"
                    className="inline-flex font-[helvetica] items-center gap-3 rounded-full px-7 py-3 text-sm font-semibold text-white
                    bg-gradient-to-b from-[#3A2BFF] to-[#1B0E86]
                    shadow-[0_18px_60px_rgba(58,43,255,0.35)]
                    hover:opacity-95"
                    >
                    Explore the Portfolio

                    {/* animated icon */}
                    <motion.span
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        }}
                        className="text-white/90"
                    >
                        <FaAngleDoubleDown size={18} />
                    </motion.span>
                    </a>

                    <a
                      href="https://www.startupuncut.com/"
                      className="inline-flex font-[helvetica] items-center justify-center rounded-full px-7 py-3 text-sm font-semibold
                      text-[#B9A7FF] border border-[#3A2BFF]/40 bg-black/30
                      hover:bg-white/5"
                    >
                      Watch “Startup Uncut”
                    </a>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none relative bottom-50 right-[-80px] z-0  h-[680px] w-5/2 ">
                <Image
                  src="https://res.cloudinary.com/dpjmcup95/image/upload/v1770979819/3627213ff2c0364af06e30c7e78a07093577a104_b6n6rs.webp"
                  alt="Hero Person"
                  fill
                  priority
                  className="object-contain object-right"
                />

                <div className="absolute inset-y-0 top-50 left-0 w-[55%] h-[630px] bg-gradient-to-r from-black via-black/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-5 h-28 bg-gradient-to-t from-black to-transparent" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
