export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl w-full border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
      {children}
    </div>
  );
}
