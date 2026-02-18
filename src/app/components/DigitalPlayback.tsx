"use client";

import { useEffect, useMemo, useState } from "react";

type Reel = {
  id: string;
  mp4: string;
  poster: string;
};

const REELS: Reel[] = [
  {
    id: "1",
    mp4: "https://res.cloudinary.com/dpjmcup95/video/upload/v1771062954/Reel_1_zc53mm.webm",
    poster:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1771063453/Screenshot_2026-02-14_153330_bt9aww.png",
  },
  {
    id: "2",
    mp4: "https://res.cloudinary.com/dpjmcup95/video/upload/v1771062943/Reel_4_x1rl6w.webm",
    poster:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1771064127/Screenshot_2026-02-14_154443_hc4wei.png",
  },
  {
    id: "3",
    mp4: "https://res.cloudinary.com/dpjmcup95/video/upload/v1771062910/Reel_5_hkpq6b.webm",
    poster:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1771064293/Screenshot_2026-02-14_154719_lav1n4.png",
  },
  {
    id: "4",
    mp4: "https://res.cloudinary.com/dpjmcup95/video/upload/v1771062890/Reel_3_ylqvdj.webm",
    poster:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1771064405/Screenshot_2026-02-14_154934_zdecs8.png",
  },
  {
    id: "5",
    mp4: "https://res.cloudinary.com/dpjmcup95/video/upload/v1771062881/Reel_2_vuujyi.webm",
    poster:
      "https://res.cloudinary.com/dpjmcup95/image/upload/v1771064481/Screenshot_2026-02-14_155054_y5bc3x.png",
  },
];

function wrapIndex(i: number, len: number) {
  return (i % len + len) % len;
}

export default function DigitalPlayback() {
  const [active, setActive] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ detect mobile safely (no hydration issue)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const offsets = isMobile ? [-1, 0, 1] : [-2, -1, 0, 1, 2];

  const visible = useMemo(() => {
    return offsets.map((offset) => {
      const index = wrapIndex(active + offset, REELS.length);
      return { offset, reel: REELS[index] };
    });
  }, [active, offsets]);

  const next = () => setActive((a) => wrapIndex(a + 1, REELS.length));
  const prev = () => setActive((a) => wrapIndex(a - 1, REELS.length));

  // keyboard arrows (desktop)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // ✅ swipe (mobile)
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0]?.clientX ?? null);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStart;
    const diff = touchStart - endX;

    if (Math.abs(diff) > 25) {
      setActive((a) => wrapIndex(a + (diff > 0 ? 1 : -1), REELS.length));
    }
    setTouchStart(null);
  };

  return (
    <section id="playback" className="bg-black py-20 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="font-[timesTen] leading-[1.05] text-[34px] md:text-[64px]">
            <span className="italic font-medium text-white/90">The </span>
            <span className="font-bold text-white">Digital Playback</span>
          </h2>
          <p className="mt-3 font-[helvetica] text-[14px] sm:text-[16px] md:text-[20px] text-white font-semibold md:font-medium">
            Actionable marketing strategies and business principles delivered in under a minute.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative mt-6 md:mt-16 h-[520px] md:h-[620px] overflow-x-clip"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Arrows (desktop only) */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute -left-8 md:left-0 top-1/2 z-30 -translate-y-1/2 text-white/40 hover:text-white/70 transition text-[40px] md:text-5xl px-3"
          >
            ❮❮
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="absolute -right-8 md:right-0 top-1/2 z-30 -translate-y-1/2 text-white/40 hover:text-white/70 transition text-[40px] md:text-5xl px-3"
          >
            ❯❯
          </button>

          {/* Cards */}
          <div className="absolute inset-0 flex items-center justify-center">
            {visible.map(({ offset, reel }) => {
              const isCenter = offset === 0;

              // ✅ SAFE translate that won't overflow on mobile
              const translateX = isMobile
                ? `translateX(calc(${offset} * clamp(105px, 30vw, 135px)))`
                : `translateX(calc(${offset} * 245px))`;

              const scale = isMobile
                ? isCenter
                  ? 1
                  : 0.88
                : offset === 0
                ? 1.12
                : offset === -1 || offset === 1
                ? 0.92
                : 0.82;

              const opacity = isMobile
                ? isCenter
                  ? 1
                  : 0.5
                : offset === 0
                ? 1
                : offset === -1 || offset === 1
                ? 0.65
                : 0.45;

              const blur = isMobile
                ? isCenter
                  ? "blur(0px)"
                  : "blur(0.8px)"
                : offset === 0
                ? "blur(0px)"
                : offset === -1 || offset === 1
                ? "blur(0.6px)"
                : "blur(1.2px)";

              const z = isCenter ? 20 : 10;

              // ✅ clamp widths/heights to viewport on mobile
              const w = isMobile
                ? isCenter
                  ? "min(78vw, 320px)"
                  : "min(70vw, 300px)"
                : isCenter
                ? "320px"
                : "280px";

              const h = isMobile
                ? isCenter
                  ? "min(120vw, 520px)"
                  : "min(112vw, 500px)"
                : isCenter
                ? "520px"
                : "460px";

              return (
                <div
                  key={`${reel.id}-${offset}`}
                  className="absolute"
                  style={{
                    transform: `${translateX} scale(${scale})`,
                    opacity,
                    filter: blur,
                    zIndex: z,
                    transition:
                      "transform 450ms ease, opacity 450ms ease, filter 450ms ease",
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_40px_130px_rgba(0,0,0,0.85)]"
                    style={{ width: w, height: h }}
                  >
                    {isCenter ? (
                      <video
                        className="h-full w-full object-cover"
                        src={reel.mp4}
                        poster={reel.poster}
                        muted
                        playsInline
                        autoPlay
                        loop
                        controls={false}
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={reel.poster}
                        alt="Reel thumbnail"
                        className="h-full w-full object-cover"
                        draggable={false}
                      />
                    )}

                    {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" /> */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots (mobile) */}
          <div className="md:hidden absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {REELS.map((r, i) => (
              <span
                key={r.id}
                className={`h-2 w-2 rounded-full transition ${
                  i === active ? "bg-white/80" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
