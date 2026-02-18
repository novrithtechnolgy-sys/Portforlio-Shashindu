import Image from "next/image";
import Container from "./ui/Container";

export default function Advisory() {
  return (
    <section id="advisory" className="py-20 md:py-28 bg-black">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-[timesTen] text-[34px] md:text-[64px] leading-tight">
            <span className="italic font-medium text-white/90">Management and </span>
            <span className="font-bold text-white">Advisory</span>
          </h2>
          <p className="font-[helvetica] md:text-[20px] mt-3 text-white font-semibold md:font-medium">
            Operational leadership and strategic consulting
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="SDLogandIcons6.gif"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain md:h-80 w-300 md:w-400"
            unoptimized
          />
        </div>
        {/* Content */}
        <div className="mt-14 md:mt-14 grid gap-14 md:grid-cols-2">

          {/* RIGHT: Text */}
          <div className="text-center md:text-left ">
            <h3 className="font-[timesTen] text-[24px] md:text-[38px] xl:text-[48px] font-medium text-white">
              Scenery Villas Pvt Ltd.
              <br />General Manager
            </h3>

            <p className="mt-6 font-[helvetica] md:text-[20px] max-w-xl text-white leading-8 mx-auto md:mx-0">
              The General Manager Taking over operations at age 19
              I have led the strategic growth and guest excellence of this luxury property. My role
              involves overseeing daily operations, maintaining high service standards and ensuring
              financial sustainability in a competitive tourism market.
            </p>
          </div>
          {/* RIGHT: Text */}
          <div className="text-center md:text-left ">
            <h3 className="font-[timesTen] text-[24px] md:text-[38px] xl:text-[42px] font-medium text-white">
              AIDA Group of Companies
              <br />Former General Manager
            </h3>

            <p className="mt-6 font-[helvetica] md:text-[20px] max-w-xl text-white leading-8 mx-auto md:mx-0">
              As Former General Manager of Aida Group, I spearheaded the operations of a diverse portfolio spanning Aida Ayurveda Resort & Spa, Aida Textiles, and our flagship Hotel, Restaurant, and Coffeeshop.
              ​I focused on aligning these distinct sectors, including wellness, retail, and hospitality under a unified brand identity, driving operational excellence to transform multiple business units into one cohesive, world-class experience
            </p>
          </div>
          </div>
      </Container>
    </section>
  );
}
