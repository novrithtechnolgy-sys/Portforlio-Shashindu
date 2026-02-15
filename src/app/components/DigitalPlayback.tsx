"use client";

import { useEffect, useMemo, useState } from "react";

type Reel = {
  id: string;
  title?: string;
  mp4: string;     // your reel video (mp4)
  poster: string;  // thumbnail image
};

const REELS: Reel[] = [
  {
    id: "1",
    mp4: "https://res.cloudinary.com/dpjmcup95/video/upload/v1771062954/Reel_1_zc53mm.webm",
    poster: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771063453/Screenshot_2026-02-14_153330_bt9aww.png",
  },
  {
    id: "2",
    mp4: "https://res.cloudinary.com/dpjmcup95/video/upload/v1771062943/Reel_4_x1rl6w.webm",
    poster: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771064127/Screenshot_2026-02-14_154443_hc4wei.png",
  },
  {
    id: "3",
    mp4: "https://res.cloudinary.com/dpjmcup95/video/upload/v1771062910/Reel_5_hkpq6b.webm",
    poster: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771064293/Screenshot_2026-02-14_154719_lav1n4.png",
  },
  {
    id: "4",
    mp4: "https://res.cloudinary.com/dpjmcup95/video/upload/v1771062890/Reel_3_ylqvdj.webm",
    poster: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771064405/Screenshot_2026-02-14_154934_zdecs8.png",
  },
  {
    id: "5",
    mp4: "https://res.cloudinary.com/dpjmcup95/video/upload/v1771062881/Reel_2_vuujyi.webm",
    poster: "https://res.cloudinary.com/dpjmcup95/image/upload/v1771064481/Screenshot_2026-02-14_155054_y5bc3x.png",
  },
];

function wrapIndex(i: number, len: number) {
  return (i % len + len) % len;
}

export default function DigitalPlayback() {
  const [active, setActive] = useState(2);

  const visible = useMemo(() => {
    // show 5 cards: -2 -1 0 +1 +2
    const offsets = [-2, -1, 0, 1, 2];
    return offsets.map((offset) => {
      const index = wrapIndex(active + offset, REELS.length);
      return { offset, reel: REELS[index], index };
    });
  }, [active]);

  const next = () => setActive((a) => wrapIndex(a + 1, REELS.length));
  const prev = () => setActive((a) => wrapIndex(a - 1, REELS.length));

  // keyboard arrows (optional)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="playback" className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-[80px] font-[timesTen] leading-tight">
            <span className="italic font-medium text-white/90">The </span>
            <span className="font-bold text-white">Digital Playback</span>
          </h2>
          <p className="mt-3 font-[helvetica] text-[20px] text-white/60 italic">
            Actionable marketing strategies and business principles delivered in under a minute
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-16 h-[520px] md:h-[620px]">
          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-30 -translate-y-1/2 text-white/40 hover:text-white/70 transition
                       text-4xl md:text-5xl px-3"
          >
            ❮❮
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2 text-white/40 hover:text-white/70 transition
                       text-4xl md:text-5xl px-3"
          >
            ❯❯
          </button>

          {/* Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            {visible.map(({ offset, reel }) => {
              const isCenter = offset === 0;

              // Responsive spacing
              const x = offset * (typeof window !== "undefined" && window.innerWidth < 768 ? 150 : 245);

              // Visual tuning like the screenshot
              const scale =
                offset === 0 ? 1.12 : offset === -1 || offset === 1 ? 0.92 : 0.82;
              const opacity =
                offset === 0 ? 1 : offset === -1 || offset === 1 ? 0.65 : 0.45;
              const blur =
                offset === 0 ? "blur(0px)" : offset === -1 || offset === 1 ? "blur(0.6px)" : "blur(1.2px)";
              const z = offset === 0 ? 20 : offset === -1 || offset === 1 ? 10 : 5;

              return (
                <div
                  key={`${reel.id}-${offset}`}
                  className="absolute"
                  style={{
                    transform: `translateX(${x}px) scale(${scale})`,
                    opacity,
                    filter: blur,
                    zIndex: z,
                    transition: "transform 450ms ease, opacity 450ms ease, filter 450ms ease",
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5
                               shadow-[0_40px_130px_rgba(0,0,0,0.85)]"
                    style={{
                      width: isCenter ? 320 : 280,
                      height: isCenter ? 520 : 460,
                    }}
                  >
                    {/* Video (center plays, others show poster) */}
                    {isCenter ? (
                      <video
                        className="h-full w-full object-cover"
                        src={reel.mp4}
                        poster={reel.poster}
                        playsInline
                        autoPlay
                        loop
                        controls={false}
                      />
                    ) : (
                      <img
                        src={reel.poster}
                        alt="Reel thumbnail"
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                    )}

                    {/* soft bottom fade like reel UI */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
