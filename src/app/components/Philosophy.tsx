"use client";

import Image from "next/image";
import Container from "./ui/Container";
import { useEffect, useMemo, useState } from "react";

type Story = { id: string; image: string };

const stories: Story[] = [
  {
    id: "s1",
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771315563/Artboard_7_ielegt.png",
  },
  {
    id: "s2",
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771315559/Artboard_3_sjpcbp.png",
  },
  {
    id: "s3",
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771315559/Artboard_4_qiscwe.png",
  },
  {
    id: "s4",
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771410768/Artboard_5_ijavyk.png",
  },
  {
    id: "s5",
    image: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771410770/Artboard_6_gvygn8.png",
  },
];

function wrap(i: number, len: number) {
  return (i % len + len) % len;
}

function StoryCard({
  image,
  className = "",
  priority = false,
}: {
  image: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[34px] bg-white/5",
        "shadow-[0_40px_140px_rgba(0,0,0,0.85)]",
        className,
      ].join(" ")}
    >
      <Image
        src={image}
        alt="Story"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 320px, 420px"
        priority={priority}
      />

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

  const next = () => setActive((a) => wrap(a + 1, stories.length));
  const prev = () => setActive((a) => wrap(a - 1, stories.length));

  // auto change every 3.5s
  useEffect(() => {
    const t = setInterval(() => next(), 3500);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    if (Math.abs(diff) > 25) {
      setActive((a) => wrap(a + (diff > 0 ? 1 : -1), stories.length));
    }
    setTouchStart(null);
  };

  // keep memo (not required, but fine)
  const desktopCards = useMemo(() => stories, []);

  // ✅ DESKTOP visible indexes (same UI, just dynamic images)
  const leftIdx = wrap(active - 1, desktopCards.length);
  const centerIdx = wrap(active, desktopCards.length);
  const rightIdx = wrap(active + 1, desktopCards.length);

  return (
    <section id="philosophy" className="bg-black py-0 md:py-0">
      <Container>
        {/* Title */}
        <div className="text-center">
          <h2 className="font-[timesTen] text-[34px] md:text-[64px] leading-[1.05]">
            <span className="italic font-medium text-white/90">The </span>
            <span className="font-semibold text-white">Philosophy</span>
          </h2>
          <p className="mt-3 font-[helvetica] text-[14px] sm:text-[16px] md:text-[20px] text-white font-semibold md:font-medium">
            Operational leadership and strategic consulting.
          </p>
        </div>

        {/* ✅ DESKTOP (same design, add buttons + dynamic images) */}
        <div className="relative mt-14 hidden md:flex items-end justify-center gap-10">
          {/* desktop arrows (ONLY desktop) */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-30 -translate-y-1/2 text-white/40 hover:text-white/70 transition text-5xl px-3"
          >
            ❮❮
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2 text-white/40 hover:text-white/70 transition text-5xl px-3"
          >
            ❯❯
          </button>

          {/* SAME UI (sizes/opacities unchanged) */}
          <StoryCard
            image={desktopCards[leftIdx].image}
            className="h-[520px] w-[362px] opacity-85"
          />
          <StoryCard
            image={desktopCards[centerIdx].image}
            className="h-[560px] w-[420px]"
            priority
          />
          <StoryCard
            image={desktopCards[rightIdx].image}
            className="h-[520px] w-[362px] opacity-85"
          />
        </div>

        {/* MOBILE (peek carousel + arrows) */}
        <div
          className="mt-10 md:hidden relative h-[560px] overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* ✅ ARROWS */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute -left-8 top-1/2 z-30 -translate-y-1/2 text-white/40 hover:text-white/70 transition text-[40px] md:text-5xl px-3"
          >
            ❮❮
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="absolute -right-8 top-1/2 z-30 -translate-y-1/2 text-white/40 hover:text-white/70 transition text-[40px] md:text-5xl px-3"
          >
            ❯❯
          </button>

          {/* cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[-1, 0, 1].map((offset) => {
              const idx = wrap(active + offset, stories.length);
              const isCenter = offset === 0;

              const x = offset * 210;
              const scale = isCenter ? 1 : 0.88;
              const opacity = isCenter ? 1 : 0.45;
              const z = isCenter ? 20 : 10;

              return (
                <div
                  key={`${stories[idx].id}-${offset}`}
                  className="absolute"
                  style={{
                    transform: `translateX(${x}px) scale(${scale})`,
                    opacity,
                    zIndex: z,
                    transition: "transform 450ms ease, opacity 450ms ease",
                  }}
                >
                  <StoryCard
                    image={stories[idx].image}
                    className={
                      isCenter ? "h-[520px] w-[320px]" : "h-[500px] w-[300px]"
                    }
                    priority={isCenter}
                  />
                </div>
              );
            })}
          </div>

          {/* dots indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {stories.map((s, i) => (
              <span
                key={s.id}
                className={`h-2 w-2 rounded-full transition ${
                  i === active ? "bg-white/80" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
