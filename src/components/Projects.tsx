import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Nexora Analytics',
    category: 'SaaS Dashboard',
    desc: 'Platform analitik realtime dengan visualisasi data kompleks yang disederhanakan.',
    tags: ['React', 'TypeScript', 'D3'],
    accent: 'from-brand-500/30 to-cyan-400/20',
  },
  {
    title: 'Kopi Kode App',
    category: 'Mobile Commerce',
    desc: 'Aplikasi pesan-antar kopi dengan alur checkout satu klik dan sistem loyalitas pintar.',
    tags: ['React Native', 'Node', 'Stripe'],
    accent: 'from-amber-500/30 to-orange-400/20',
  },
  {
    title: 'Vertex Design System',
    category: 'Design System',
    desc: 'Library komponen lintas-platform dengan 120+ komponen dan token terdokumentasi.',
    tags: ['Figma', 'Storybook', 'Tokens'],
    accent: 'from-fuchsia-500/30 to-purple-400/20',
  },
  {
    title: 'Solara Landing',
    category: 'Marketing Site',
    desc: 'Landing page konversi tinggi dengan skor Lighthouse 100 dan animasi halus.',
    tags: ['Next.js', 'Tailwind', 'SEO'],
    accent: 'from-emerald-500/30 to-teal-400/20',
  },
];

export default function Projects() {
  return (
    <section id="proyek" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Proyek Pilihan"
          title="Karya yang saya banggakan"
          subtitle="Beberapa proyek terbaru yang menggabungkan desain, teknologi, dan hasil bisnis nyata."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-brand-400/40"
            >
              <div className={`mb-5 h-40 w-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent} relative`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="rounded-xl bg-black/30 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    {p.category}
                  </span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition group-hover:bg-white group-hover:text-slate-900">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
