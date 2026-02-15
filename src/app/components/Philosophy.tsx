import Image from "next/image";
import Container from "./ui/Container";

type Story = {
  id: string;
  image: string;

};

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

function StoryCard({
  story,
  variant,
}: {
  story: Story;
  variant: "left" | "center" | "right";
}) {
  const size =
    variant === "center"
      ? "h-[460px] w-[320px] md:h-[570px] md:w-[420px]"
      : "h-[420px] w-[280px] md:h-[520px] md:w-[360px]";

  const opacity =
    variant === "center" ? "opacity-100" : "opacity-85";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5",
        "shadow-[0_40px_140px_rgba(0,0,0,0.85)]",
        size,
        opacity,
      ].join(" ")}
    >
      <Image
        src={story.image}
        alt="Story"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 320px, 380px"
        priority={variant === "center"}
      />

      {/* overlays (dark + vignette) */}
      {/* <div className="absolute inset-0 bg-black/45" /> */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.12),rgba(0,0,0,0)_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      {/* right side dots */}
      <div className="absolute bottom-8 right-5 flex flex-col gap-2">
        <span className="h-2 w-2 rounded-full bg-white/70" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
      </div>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-black">
      <Container>
        {/* Title */}
        <div className="text-center">
          <h2 className="font-[timesTen] md:text-[80px] leading-tight">
            <span className="italic font-medium text-white/90">The </span>
            <span className="font-semibold text-white">Philosophy</span>
          </h2>
          <p className="mt-3 font-[helvetica] md:text-[20px] text-white/60 italic">
            Operational leadership and strategic consulting
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 flex items-end justify-center gap-10">
          <div className="hidden md:block">
            <StoryCard story={stories[0]} variant="left" />
          </div>

          <StoryCard story={stories[1]} variant="center" />

          <div className="hidden md:block">
            <StoryCard story={stories[2]} variant="right" />
          </div>
        </div>

        {/* Mobile: show all 3 stacked */}
        <div className="mt-10  gap-6 md:hidden">
          {stories.map((s, idx) => (
            <StoryCard
              key={s.id}
              story={s}
              variant={idx === 1 ? "center" : "left"}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
