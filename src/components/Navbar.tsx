import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Proyek', href: '#proyek' },
  { label: 'Keahlian', href: '#keahlian' },
  { label: 'Testimoni', href: '#testimoni' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`mx-auto max-w-6xl px-4 transition-all duration-300 ${
          scrolled ? 'my-2' : 'my-4'
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? 'glass shadow-lg shadow-black/30' : 'border border-transparent'
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-bold tracking-tight text-white">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-cyan-400 text-sm">A</span>
            <span className="hidden sm:block">Arka<span className="text-brand-400">.</span></span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#kontak"
              className="group hidden items-center gap-1 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-brand-100 sm:flex"
            >
              Hubungi Saya
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl glass text-white md:hidden"
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 grid gap-1 rounded-2xl glass p-3 md:hidden"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="rounded-lg px-3 py-2.5 text-sm text-slate-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                onClick={() => setOpen(false)}
                href="#kontak"
                className="rounded-lg bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-900"
              >
                Hubungi Saya
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
