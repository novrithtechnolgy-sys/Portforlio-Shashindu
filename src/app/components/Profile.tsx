import Image from "next/image";
import Container from "./ui/Container";

export default function Profile() {
  return (
    <section id="story" className="pt-20 md:pt-0">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
          {/* subtle background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-white/10 blur-[160px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-black/40" />
          </div>

          <div className="relative grid items-center md:grid-cols-[310px_1fr] xl:grid-cols-[410px_1fr] md:p-0">
            <div className="relative mx-auto h-[360px] w-full max-w-[1220px] md:mx-0 md:h-[620px] order-2 md:order-1">
              <Image
                src="https://res.cloudinary.com/dpjmcup95/image/upload/a_hflip/v1771036654/b68a51bf9e1267c1a11561ff60b71178a3b002b4_2_pseobk.webp"
                alt="Profile"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain object-bottom drop-shadow-[0_30px_80px_rgba(0,0,0,0.85)]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="text-center md:text-left px-4 py-12 md:pl-12 md:pr-12 order-1 md:order-2">
              <h2 className="font-[timesTen] text-[34px] md:text-[64px]  leading-[1.05]">
                <span className="italic font-medium text-white/90">The </span>
                <span className="font-semibold">Profile</span>
              </h2>

              <div className="mt-6 space-y-4 font-[helvetica] font-bold xl:font-normal text-[14px] xl:text-[20px] leading-8  max-w-3xl mx-auto md:mx-0 ">
                <p>
                    Shashindu De Silva is a 24-year-old strategic entrepreneur and a First Class  Honours graduate in BA (Hons) Business Management from Coventry University,  UK. His business acumen was shaped early,
                    having taken over family operations at  the age of 19, gaining hands-on commercial experience through Scenery Villas (Pvt)  Ltd
                    and related ventures.
                </p>

                <p>
                    Beyond business, his discipline and competitive mindset were forged through nine  years in cricket,
                    including representation at the Sri Lanka Under-15 squad level.  Initially pursuing a medical career,
                    he later transitioned to business a shift that  ultimately defined his entrepreneurial trajectory.
                </p>                
                <p>
                    As the founder of Digital Escapes, XtreamDigital, Market My Keys, Travel My Sri  Lanka, 
                    and Sri Lanka Hotel Magazine, he blends academic excellence with  strategic storytelling to elevate Sri Lankan brands. 
                    He also leads Zinkq, a growing  community dedicated to empowering entrepreneurs and fostering forward thinking business culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
