export default function Card({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
      block rounded-3xl w-full
      border border-white/10 bg-white/5
      shadow-[0_30px_80px_rgba(0,0,0,0.6)]

      transform-gpu
      transition-all duration-500 ease-out

      hover:scale-[1.03]
      hover:-translate-y-1
      hover:shadow-[0_60px_140px_rgba(0,0,0,0.85)]
      hover:border-white/20
      cursor-pointer
    "
    >
      {children}
    </Wrapper>
  );
}
