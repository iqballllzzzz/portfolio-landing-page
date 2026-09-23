import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Quote } from 'lucide-react';

const items = [
  {
    quote:
      'Arka mengubah produk kami yang berantakan menjadi pengalaman yang jelas dan menyenangkan. Onboarding kami naik 42%.',
    name: 'Dinda Prasetya',
    role: 'Head of Product, Nexora',
  },
  {
    quote:
      'Rapi, cepat, dan komunikatif. Design system yang dibangun membuat tim developer kami jauh lebih produktif.',
    name: 'Bagas Hartono',
    role: 'CTO, Vertex Labs',
  },
  {
    quote:
      'Detail visualnya luar biasa dan performanya kencang. Website baru kami langsung mengangkat citra brand.',
    name: 'Maria Larasati',
    role: 'Founder, Solara',
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimoni"
          title="Kata mereka tentang kerja sama"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <Quote className="h-7 w-7 text-brand-400/70" />
              <p className="mt-4 text-sm leading-relaxed text-slate-300">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-cyan-300 text-sm font-bold text-slate-900">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
