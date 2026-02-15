export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full bg-black"><div className="mx-auto w-full max-w-7xl px-8">
    {children}</div></div>;
}
