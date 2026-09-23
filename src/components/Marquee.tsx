const brands = ['Nexora', 'Lunaris', 'Pixelbyte', 'Kopi Kode', 'Vertex Labs', 'Solara', 'Monolith', 'Bloom.app'];

export default function Marquee() {
  return (
    <section className="relative border-y border-white/5 bg-white/[0.02] py-6">
      <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
        Dipercaya oleh tim & brand
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 pr-14">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="whitespace-nowrap text-xl font-semibold text-slate-500/80 transition hover:text-slate-300">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
