"use client";

import Image from "next/image";
import Container from "./ui/Container";
import { useEffect, useMemo, useState } from "react";

type Story = { id: string; image: string };

const stories: Story[] = [
  {
    id: "s1",
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771055517/d1eb95f29e1c5a7baf7d4b127ec7612c7fd81c71_po3eiu.jpg",
  },
  {
    id: "s2",
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771054995/aabf4160ce62fe766da5c0b0e4761e44be613cc1_ydgm1x.jpg",
  },
  {
    id: "s3",
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771056210/6121aea320dfe236ece6094160df4dcfceead2ef_gxiuo8.jpg",
  },
];

function wrap(i: number, len: number) {
  return (i % len + len) % len;
}

function StoryCard({ image }: { image: string }) {
  return (
    <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_40px_140px_rgba(0,0,0,0.85)] h-[520px] w-[320px] sm:w-[360px]">
      <Image
        src={image}
        alt="Story"
        fill
        className="object-cover"
        sizes="(max-width: 640px) 360px, 360px"
        priority
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.12),rgba(0,0,0,0)_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-8 right-5 flex flex-col gap-2">
        <span className="h-2 w-2 rounded-full bg-white/70" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
      </div>
    </div>
  );
}

export default function Philosophy() {
  const [active, setActive] = useState(0);

  // ✅ auto change every 3.5s (mobile only visible)
  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => wrap(a + 1, stories.length));
    }, 3500);
    return () => clearInterval(t);
  }, []);

  // touch swipe (mobile)
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0]?.clientX ?? null);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStart;
    const diff = touchStart - endX;

    if (Math.abs(diff) > 40) {
      // swipe left -> next, swipe right -> prev
      setActive((a) => wrap(a + (diff > 0 ? 1 : -1), stories.length));
    }
    setTouchStart(null);
  };

  const desktopCards = useMemo(() => stories, []);

  return (
    <section id="philosophy" className="bg-black py-20 md:py-28">
      <Container>
        {/* Title */}
        <div className="text-center">
          <h2 className="font-[timesTen] text-[44px] sm:text-[56px] md:text-[80px] leading-[1.05]">
            <span className="italic font-medium text-white/90">The </span>
            <span className="font-semibold text-white">Philosophy</span>
          </h2>
          <p className="mt-3 font-[helvetica] text-[14px] sm:text-[16px] md:text-[20px] text-white/60 italic">
            Operational leadership and strategic consulting
          </p>
        </div>

        {/* ✅ DESKTOP (static 3 cards) */}
        <div className="mt-14 hidden md:flex items-end justify-center gap-10">
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_40px_140px_rgba(0,0,0,0.85)] h-[520px] w-[340px] opacity-85">
            <Image src={desktopCards[0].image} alt="Story" fill className="object-cover" />
          </div>

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_40px_140px_rgba(0,0,0,0.85)] h-[560px] w-[380px]">
            <Image src={desktopCards[1].image} alt="Story" fill className="object-cover" />
          </div>

          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_40px_140px_rgba(0,0,0,0.85)] h-[520px] w-[340px] opacity-85">
            <Image src={desktopCards[2].image} alt="Story" fill className="object-cover" />
          </div>
        </div>

        {/* ✅ MOBILE (auto slider + swipe) */}
        <div
          className="mt-10 md:hidden flex flex-col items-center gap-5"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <StoryCard image={stories[active].image} />

          {/* dots indicator */}
          <div className="flex items-center gap-2">
            {stories.map((s, i) => (
              <span
                key={s.id}
                className={`h-2 w-2 rounded-full transition ${
                  i === active ? "bg-white/80" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
