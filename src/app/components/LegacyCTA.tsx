"use client";
import Image from "next/image";
import Container from "./ui/Container";
import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function LegacyCTA() {

const email = "hello@shashindudesilva.com";

const handleEmail = () => {
  // try open mail app
  window.location.href = `mailto:${email}`;

  // fallback after 500ms → open gmail web
  setTimeout(() => {
    window.open(`https://mail.google.com/mail/?view=cm&to=${email}`, "_blank");
  }, 500);
};;


  return (
    <section id="contact" className="bg-black py-20 md:py-32 overflow-hidden">
      <Container>
        <div className="relative overflow-hidden rounded-[34px] bg-white/5 shadow-[0_50px_160px_rgba(0,0,0,0.85)]">
          {/* Background image */}
          <div className="absolute inset-0">
            <div className="relative h-[200px] md:h-full w-full rounded-[34px]">
            <Image
              src="https://res.cloudinary.com/dpjmcup95/image/upload/v1771086431/7e2eafc7fbfb8122b8416ab755b4d0bb8a1547491_io1upf.jpg"
              alt="CTA background"
              fill
              priority
              className="object-cover object-top "
            />
            </div>

            {/* dark overlays like screenshot */}
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_30%,rgba(255,255,255,0.10),rgba(0,0,0,0)_60%)]" />
          </div>

          {/* Content */}
          <div className="relative px-5 pt-44 pb-14 md:px-16 md:pt-24 md:pb-24 text-center">
            {/* Title */}
            <h3 className="font-[timesTen] text-white leading-[1.02]">
              <span className="italic font-light text-[42px] sm:text-[52px] md:text-[80px]">
                Ready to{" "}
              </span>

              <span
                className="italic font-light text-[42px] sm:text-[52px] md:text-[80px]"
                style={{
                  WebkitTextStroke: "1.5px white",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 18px rgba(255,255,255,0.25)",
                }}
              >
                Define
              </span>

              <span className="font-semibold text-[42px] sm:text-[52px] md:text-[80px]">
                {" "}
                Your Legacy
              </span>
            </h3>

            {/* Paragraph */}
            <p className="mt-6 mx-auto max-w-[420px] md:max-w-4xl font-[helvetica] text-[14px] md:text-[18px] text-white/70 leading-7 md:leading-8">
              I do not just build companies I build value chains Whether you need
              strategic digital marketing operational advice for hospitality or a
              partnership that drives growth let us bridge the gap between vision
              and execution
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center gap-5 md:flex-row md:justify-center md:gap-6">
              {/* Primary */}
              <a
                onClick={handleEmail}
                className="
                  inline-flex items-center justify-center gap-3
                  w-[280px] md:w-auto
                  rounded-full px-8 py-[14px]
                  text-[15px] font-semibold text-white
                  bg-gradient-to-b from-[#3B2BFF] to-[#120B7A]
                  shadow-[0_18px_60px_rgba(59,43,255,0.35)]
                  ring-1 ring-white/10
                  hover:brightness-110 active:scale-[0.99]
                  transition
                "
              >
                Start the Conversation{" "}
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

              {/* Secondary */}
              <a
                href="https://www.zinkq.com/"
                className="
                  inline-flex items-center justify-center
                  w-[280px] md:w-auto
                  rounded-full px-8 py-[14px]
                  text-[15px] font-semibold
                  text-[#7E63FF]
                  bg-black/40
                  border border-[#3B2BFF]/55
                  shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35)]
                  hover:bg-white/5 hover:border-[#3B2BFF]/75
                  active:scale-[0.99]
                  transition
                "
              >
                Join Zinkq Community
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
