import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Dribbble, Sparkles, MapPin } from 'lucide-react';

const stats = [
  { value: '6+', label: 'Tahun Pengalaman' },
  { value: '80+', label: 'Proyek Selesai' },
  { value: '35', label: 'Klien Puas' },
];

export default function Hero() {
  return (
    <section id="top" className="relative px-4 pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium text-slate-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Tersedia untuk proyek freelance
              <span className="mx-1 text-slate-600">•</span>
              <span className="inline-flex items-center gap-1 text-slate-400">
                <MapPin className="h-3 w-3" /> Jakarta, ID
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.2rem]"
            >
              Merancang produk digital
              <br />
              yang <span className="text-gradient">cepat & berkesan</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              Saya <span className="font-semibold text-slate-200">Arka Wibowo</span>, Product Designer & Front-End Developer.
              Saya membantu startup dan brand membangun antarmuka yang rapi, aksesibel, dan berorientasi hasil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#proyek"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition hover:bg-brand-100"
              >
                Lihat Karya Saya
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Sparkles className="h-4 w-4 text-brand-300" />
                Mulai Kolaborasi
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex items-center gap-5"
            >
              <div className="flex items-center gap-3 text-slate-400">
                {[Github, Linkedin, Dribbble].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition hover:border-brand-400/40 hover:text-white"
                  >
                    <Icon className="h-4.5 w-4.5" size={18} />
                  </a>
                ))}
              </div>
              <div className="hidden h-8 w-px bg-white/10 sm:block" />
              <div className="hidden items-center gap-6 sm:flex">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-xl font-bold text-white">{s.value}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-600/40 via-cyan-400/30 to-fuchsia-500/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-3 backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-slate-800 to-slate-950">
                {/* stylized avatar illustration */}
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute -bottom-6 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl" />
                <div className="relative flex h-full flex-col items-center justify-center gap-4">
                  <div className="grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-cyan-300 text-4xl font-black text-slate-900 animate-float">
                    AW
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-white">Arka Wibowo</p>
                    <p className="text-sm text-slate-400">Product Designer & Dev</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-5 top-10 hidden rounded-2xl glass px-4 py-3 text-xs sm:block">
              <p className="font-semibold text-white">Design Systems</p>
              <p className="text-slate-400">Figma • Tokens</p>
            </div>
            <div className="absolute -right-4 bottom-12 hidden rounded-2xl glass px-4 py-3 text-xs sm:block">
              <p className="font-semibold text-white">React + TS</p>
              <p className="text-slate-400">Performance first</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
