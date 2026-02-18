import Image from "next/image";
import Container from "./ui/Container";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";
import { url } from "inspector";

const ventures = [
  {
    name: "Digital Escapes",
    url: "https://www.thedigitalescapes.com/",
    desc: "A niche agency dedicated exclusively to the hospitality sector. We transform how hotels and villas connect with guests by driving direct bookings and building premium brand identities.",
    logo: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771044812/ce64ec787eb46eceada1d3e71ad875061e2258d9_oovf64.webp",
  },
  {
    name: "XtreamDigital",
    url: "https://xtreamdigital.com/",
    desc: `A full scale marketing and content powerhouse designed for brands ready to scale beyond limits. 
    We specialize in high impact strategies and visual storytelling that cuts through the noise.`,
    logo: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771043442/c0fae2284d58e900c3ec03c3e2f0fe0f51fa249d_z5zfor.png",
  },

    {
    name: "Markt My Keys",
    url: "https://www.marketmykeys.com/",
    desc: "Revolutionizing real estate marketing through cinematic content creation and digital listing strategy. We move beyond static images to tell the story of a property.",
    logo: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771045817/c66394c9216d6e88f01efafa8892a7bc0e9fb54c_rpak65.webp",
  },

  {
    name: "Sri Lanka Hotel Magazine",
    url: "https://www.srilankahotelmagazine.com/",
    desc: "The premier digital publication giving a voice to the Sri Lankan hospitality industry. We showcase the best of the island to a global audience while connecting industry leaders.",
    logo: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771045044/63d7b1a1b97852e6d21d90e037fdb5f677e0eeec_zu5gf4.webp",
  },

  {
    name: "Travel My Sri Lanka",
    url: "https://travelmysrilanka.com/",
    desc: "A destination management company curating authentic and bespoke travel experiences. We go beyond the standard tourist trail to offer immersive journeys for modern travelers.",
    logo: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771046141/3e129ecf29917ee0588573b3055a64231edf06b7_hkzvsp.webp",
  },
  {
    name: "Zinkq",
    url: "https://zinkq.com/",
    desc: "Sri Lankas Number 1 Startup community built for founders and entrepreneurs. We provide a space to connect collaborate and grow together.",
    logo: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771047205/36ff0807c0ad777eca54ef847684d30ae53b8829_dr2e4d.webp",
  },
    {
    name: "Startup Uncut",
    url: "https://startupuncut.com/",
    desc: "From failed A/L dreams to building brands, this is the unfiltered story of how Startup Uncut began. We provide a space to connect collaborate and grow together.",
    logo: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771302697/Copy_of_Black_and_White_Minimalist_Music_Studio_Logo_abbxvv_tjbfum.webp",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="">
      <Container>
        <div className="text-center py-20 md:py-30 xl:py-40">
            <h1 className="font-[timesTen] text-[34px] md:text-[64px]  max-w-5xl mx-auto font-semibold leading-tight">
                <span className="font-normal italic">A Portfolio of Innovation and </span>
                <span className="font-bold">Leadership</span>
            </h1>
            <p className="mt-4 md:mt-8 xl:mt-6 font-[helvetica] text-[14px] xl:text-[20px] text-white max-w-3xl mx-auto font-semibold md:font-medium">From founding digital ecosystems to managing established heritage brands. </p>
        </div>

        <div className="text-center">
            <h1 className="font-[timesTen] text-[34px] md:text-[64px] max-w-5xl mx-auto font-semibold leading-tight">
                <span className="font-normal italic">Ventures </span>
                <span className="font-bold">Founded</span>
            </h1>
            <p className="mt-4 font-[helvetica] text-[14px] xl:text-[20px] text-white max-w-3xl mx-auto">The companies built from the ground up.</p>
        </div>

        <div className="mt-14 md:mt-12 grid gap-5">
          {ventures.map((v) => (
            <Card key={v.name} href={v.url}>
              <div className="flex flex-col md:flex-row items-center md:justify-between justify-center gap-6 px-4 md:px-16 py-4 lg:py-16 xl:py-0">
                <div className="order-2 md:order-1 text-center md:text-left">
                  <div className="font-[timesTen] text-[34px] md:text-[38px] xl:text-[48px] font-medium">{v.name}</div>
                  <p className="mt-2 font-[helvetica] text-[14px] xl:text-[20px] text-white max-w-2xl">{v.desc}</p>
                </div>

                <div className="relative h-35 w-40  md::h-60 sm:w-60 lg:w-80 xl:h-80 xl:w-120 shrink-0 opacity-90 order-1 md:order-2">
                  <Image 
                  src={v.logo} 
                  alt={`${v.name} logo`} 
                  fill 
                  className="object-contain" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
