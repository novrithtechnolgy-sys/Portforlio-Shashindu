import Image from "next/image";
import Container from "./ui/Container";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10">
      <Container>
        <div className="grid gap-14 sm:grid-cols-[1.3fr_1fr] lg:grid-cols-[1.3fr_1fr_1fr_1fr] font-[helvetica]">
          {/* LEFT: Brand */}
          <div>
            <div className="flex items-start gap-5">
              {/* Replace with your logo */}
              <div className="relative h-26 w-80 shrink-0">
                <Image
                  src="https://res.cloudinary.com/dpjmcup95/image/upload/v1770978880/55d2fdc49bd0966f4bfca0179bc5aea159f209de_pk3jiv.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="mt-10 max-w-md text-white/70 leading-8 font-[helvetica]">
              Strategic Entrepreneur and Director Building value across Digital
              Media Hospitality and Real Estate in Sri Lanka
            </p>

            {/* Social icons */}
            <div className="mt-8 flex items-center gap-6">
              <a
                href="https://www.instagram.com/shashindu.desilva/?hl=en"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/90 hover:bg-white/10 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.facebook.com/shashindudezilva/"
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
            </div>
          </div>

          {/* COLUMN 1 */}
          <div>
            <h4 className="text-xl font-semibold">Connect with Me</h4>
            <div className="mt-6 space-y-5 text-white/75">
              <p className="font-semibold text-white/70">hello@shashindudesilva.com</p>
              <p className="font-semibold text-white/70">Colombo, Sri Lanka</p>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="mt-6 space-y-5 text-white/70">
              <li><a className="hover:text-white transition" href="#home">Home</a></li>
              <li><a className="hover:text-white transition" href="#story">The Profile</a></li>
              <li><a className="hover:text-white transition" href="#portfolio">The Portfolio</a></li>
              <li><a className="hover:text-white transition" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h4 className="text-xl font-semibold">The Portfolio</h4>
            <ul className="mt-6 space-y-5 text-white/70">
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
        <div className="mt-16 text-white/50">
          © {new Date().getFullYear()} Shashindu de Silva All Rights Reserved
        </div>
      </Container>
    </footer>
  );
}
