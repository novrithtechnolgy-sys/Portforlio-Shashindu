import Image from "next/image";
import Container from "./ui/Container";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10">
      <Container>
        <div className="grid gap-10 md:gap-14 sm:grid-cols-[1.3fr_1fr] lg:grid-cols-[1.3fr_0.6fr_0.4fr] font-[helvetica]">
          {/* LEFT: Brand */}
          <div>
            <div className="flex items-start gap-5">
              {/* Replace with your logo */}
              <a href="/" className="relative h-16 w-46 md:h-26 md:w-80 shrink-0">
                <Image
                  src="https://res.cloudinary.com/dpjmcup95/image/upload/v1770978880/55d2fdc49bd0966f4bfca0179bc5aea159f209de_pk3jiv.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </a>
            </div>

            <p className="mt-6 md:mt-10 text-[14px] xl:text-[16px] max-w-md text-white/70 leading-8 font-[helvetica]">
              Strategic Entrepreneur and Director, building value across Digital Media, Hospitality, and 
              Real Estate in Sri Lanka.
            </p>

            <div>
            <h4 className="mt-6 text-xl font-semibold">Connect with Me</h4>
            <div className="mt-3 md:mt-6 space-y-2 md:space-y-5 text-white/75 text-[14px] xl:text-[16px]">
              <p className="text-white/70">hello@shashindudesilva.com</p>
              <p className="text-white/70">+94 77 123 4567</p>
              <p className="text-white/70">No 22 Marikkar St, Dharga Town 12090, Sri Lanka</p>
            </div>
          </div>

            {/* Social icons */}
            <div className="mt-6 md:mt-8 flex items-center gap-6">
              <a
                href="https://www.instagram.com/shashindu.desilva/?hl=en"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/90 hover:bg-white/10 transition"
              >
                <FaInstagram />
              </a>
            <a
                href="https://www.linkedin.com/in/shashindu-de-silva-57920b17a/"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/90 hover:bg-white/10 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.tiktok.com/@shashindu.desilva"
                aria-label="TikTok"
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/90 hover:bg-white/10 transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.youtube.com/channel/UCgX22rg-SzODDauOmUQITJg"
                aria-label="Youtube"
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/90 hover:bg-white/10 transition"
              >
                <FaYoutube />
              </a>
            </div>

            
          </div>

          {/* COLUMN 1 */}
          {/* <div>
            <h4 className="text-xl font-semibold">Connect with Me</h4>
            <div className="mt-3 md:mt-6 space-y-2 md:space-y-5 text-white/75 text-[14px] xl:text-[16px]">
              <p className="text-white/70">hello@shashindudesilva.com</p>
              <p className="text-white/70">No 22 Marikkar St, Dharga Town 12090, Sri Lanka</p>
            </div>
          </div> */}

          {/* COLUMN 2 */}
          <div>
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="mt-3 md:mt-6 space-y-1 md:space-y-5 text-white/70 text-[14px] xl:text-[16px]">
              <li><a className="hover:text-white transition" href="#home">Home</a></li>
              <li><a className="hover:text-white transition" href="#story">My Story</a></li>
              <li><a className="hover:text-white transition" href="#portfolio">The Portfolio</a></li>
              <li><a className="hover:text-white transition" href="#philosophy">The Philosophy</a></li>
              <li><a className="hover:text-white transition" href="#playback">The Digital Playback</a></li>
              <li><a className="hover:text-white transition" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h4 className="text-xl font-semibold">The Portfolio</h4>
            <ul className="mt-3 md:mt-6 space-y-1 md:space-y-5 text-white/70 text-[14px] xl:text-[16px]">
              <li><a className="hover:text-white transition" href="https://www.thedigitalescapes.com/">Digital Escapes</a></li>
              <li><a className="hover:text-white transition" href="https://www.xtreamdigital.com/">XtreamDigital</a></li>
              <li><a className="hover:text-white transition" href="#portfolio">Travel My Sri Lanka</a></li>
              <li><a className="hover:text-white transition" href="https://www.marketmykeys.com/">Market My Keys</a></li>
              <li><a className="hover:text-white transition" href="https://www.zinkq.com/">Zinkq Community</a></li>
              <li><a className="hover:text-white transition" href="https://www.sceneryvillassrilanka.com/">Scenery Villas</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 md:mt-16 text-white/50">
          © {new Date().getFullYear()} Shashindu de Silva All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}
