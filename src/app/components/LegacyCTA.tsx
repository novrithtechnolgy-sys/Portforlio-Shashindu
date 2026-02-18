"use client";
import Image from "next/image";
import Container from "./ui/Container";
import { motion } from "framer-motion";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function LegacyCTA() {

const email = "hello@shashindudesilva.com";

const handleEmail = () => {
  const start = Date.now();

  // try open native mail app
  window.location.href = `mailto:${email}`;

  // if user still on page after delay → open gmail
  setTimeout(() => {
    const end = Date.now();

    // if page still visible (mail app not opened)
    if (end - start < 1200) {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank"
      );
    }
  }, 900);
};

  return (
    <section id="contact" className="bg-black py-0 md:py-0 overflow-hidden">
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
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/15 to-black/90" /> */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/60" /> */}
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_30%,rgba(255,255,255,0.10),rgba(0,0,0,0)_60%)]" /> */}
          </div>

          {/* Content */}
          <div className="relative px-5 pt-44 pb-14 md:px-16 md:pt-24 md:pb-24 text-center">
            {/* Title */}
            <h3 className="font-[timesTen] text-white leading-[1.02]">
              <span className="italic font-light text-[34px] md:text-[64px]">
                Ready to{" "}
              </span>

              <span
                className="italic font-light text-[34px] md:text-[64px]"
                style={{
                  WebkitTextStroke: "1.5px white",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 18px rgba(255,255,255,0.25)",
                }}
              >
                Define
              </span>

              <span className="font-semibold text-[34px] md:text-[64px]">
                {" "}
                Your Legacy
              </span>
            </h3>

            {/* Paragraph */}
            <p className="mt-6 mx-auto max-w-[420px] md:max-w-4xl font-[helvetica] font-semibold md:font-medium text-[14px] md:text-[20px] text-white leading-7 md:leading-8">
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
                  inline-flex font-[helvetica] items-center justify-center gap-3
                  w-[280px] md:w-auto
                  rounded-full px-8 py-[14px]
                  text-[15px] font-semibold text-black
                  bg-white
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
                    className="text-black/90"
                >
                    <FaAngleDoubleDown size={18} />
                </motion.span>
              </a>

              {/* Secondary */}
              <a
                href="https://www.zinkq.com/"
                className="
                  inline-flex items-center font-[helvetica] justify-center
                  w-[280px] md:w-auto
                  rounded-full px-8 py-[14px]
                  text-[15px] font-semibold
                  text-white
                  bg-black/40
                  border border-white/55
                  shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35)]
                  hover:bg-white/5 hover:border-white/75
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
