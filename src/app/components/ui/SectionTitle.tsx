export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center pt-34">
      {eyebrow ? (
        <div className="mb-3 text-xs tracking-[0.35em] text-white/60 uppercase">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl md:text-5xl font-semibold leading-tight">{title}</h2>
      {subtitle ? <p className="mt-4 text-white/70 max-w-3xl mx-auto">{subtitle}</p> : null}
    </div>
  );
}
