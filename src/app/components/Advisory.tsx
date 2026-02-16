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

        {/* Content */}
        <div className="mt-14 grid items-center gap-14 md:grid-cols-2">
          {/* LEFT: Rotated image cards */}
          <div className=" flex md:block mx-auto h-[340px] w-full md:max-w-[520px] md:h-[420px] justify-center sm:px-30 md:px-0">
            {/* back card */}
            <div className="relative left-8 md:left-6 top-8 h-[260px] w-full md:h-[280px] md:w-[240px] lg:h-[320px] lg:w-[260px] xl:h-[360px] xl:w-[300px] rotate-[-10deg] rounded-[28px] overflow-hidden border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.75)]">
              <Image
                src="https://res.cloudinary.com/dpjmcup95/image/upload/v1771048907/783d4e35a4a514f11e04c25fe352c064c29b90b6_zya82e.webp"
                alt="Advisory image 1"
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>

            {/* front card */}
            <div className="relative -left-8 md:left-28 -bottom-10 md:bottom-55 lg:bottom-60 xl:bottom-70 h-[260px] w-full md:h-[280px] md:w-[240px] lg:h-[320px] lg:w-[260px] xl:h-[360px] xl:w-[330px] rotate-[8deg] rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-[0_50px_150px_rgba(0,0,0,0.85)]">
              <Image
                src="https://res.cloudinary.com/dpjmcup95/image/upload/v1771048906/333944d0cb9defa1189a1ff14708c3106a648f90_wglqcu.webp"
                alt="Advisory image 2"
                fill
                className="object-cover"
                sizes="330px"
              />
            </div>

            {/* soft fade */}
            {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.10),rgba(0,0,0,0)_60%)]" /> */}
          </div>

          {/* RIGHT: Text */}
          <div className="text-center md:text-left">
            <h3 className="font-[timesTen] text-[28px] md:text-[38px] xl:text-[48px] font-medium text-white">
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
          <div className="md:mt-50 flex md:block mx-auto h-[340px] w-full md:max-w-[520px] md:h-[420px] justify-center sm:px-30 md:px-0 order-1 md:order-2">
            {/* back card */}
            <div className="relative left-8 md:left-0 lg:left-20 top-8 md:top-0 h-[260px] w-full md:h-[280px] md:w-[240px] lg:h-[320px] lg:w-[260px] xl:h-[360px] xl:w-[300px] rotate-[-10deg] rounded-[28px] overflow-hidden border border-white/10 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.75)] z-10">
              <Image
                src="https://res.cloudinary.com/dpjmcup95/image/upload/v1771252210/AH2I7010-HDR-Edit-copy.jpg_1_nshntr.webp"
                alt="Advisory image 1"
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
            {/* front card */}
            <div className="relative -left-8 md:left-20 lg:left-48 -bottom-10 md:bottom-80 lg:bottom-90 xl:bottom-100 h-[260px] w-full md:h-[280px] md:w-[240px] lg:h-[320px] lg:w-[260px] xl:h-[360px] xl:w-[330px] rotate-[8deg] rounded-[32px] overflow-hidden border border-white/10 bg-white/5 shadow-[0_50px_150px_rgba(0,0,0,0.85)]">
              <Image
                src="https://res.cloudinary.com/dpjmcup95/image/upload/v1771252217/AH2I7241-HDR-Edit-copy_cvygpj.webp"
                alt="Advisory image 2"
                fill
                className="object-cover"
                sizes="330px"
              />
            </div>

            {/* soft fade */}
            {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(255,255,255,0.10),rgba(0,0,0,0)_60%)]" /> */}
          </div>

          {/* RIGHT: Text */}
          <div className="text-center md:text-left order-2 md:order-1 md:mt-30">
            <h3 className="font-[timesTen] text-[28px] md:text-[38px] xl:text-[48px] font-medium text-white">
              AIDA Group of Companies
              <br />General Manager
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
