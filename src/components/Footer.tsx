import { Github, Linkedin, Dribbble, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 font-bold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 text-sm">A</span>
          Arka<span className="text-brand-400">.</span>
        </div>

        <p className="order-3 text-center text-xs text-slate-500 sm:order-2">
          © {new Date().getFullYear()} Arka Wibowo. Dibuat dengan React & Tailwind.
        </p>

        <div className="order-2 flex items-center gap-2 text-slate-400 sm:order-3">
          {[Github, Linkedin, Dribbble, Twitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href="#top"
            className="ml-1 grid h-9 w-9 place-items-center rounded-lg bg-white text-slate-900 transition hover:bg-brand-100"
            aria-label="Kembali ke atas"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
