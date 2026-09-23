import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { Layers, Zap, HeartHandshake, PenTool } from 'lucide-react';

const pillars = [
  {
    icon: PenTool,
    title: 'Desain Berorientasi Detail',
    desc: 'Setiap spasi, warna, dan transisi punya alasan. Hasil akhir terasa rapi dan konsisten.',
  },
  {
    icon: Zap,
    title: 'Performa Tinggi',
    desc: 'Fokus pada kecepatan load, aksesibilitas, dan SEO agar produk siap tumbuh besar.',
  },
  {
    icon: Layers,
    title: 'Design System',
    desc: 'Membangun komponen reusable dan token yang mempercepat iterasi tim.',
  },
  {
    icon: HeartHandshake,
    title: 'Kolaborasi Erat',
    desc: 'Komunikasi transparan dengan stakeholder — dari riset hingga rilis.',
  },
];

export default function About() {
  return (
    <section id="tentang" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Tentang Saya"
          title="Membangun pengalaman digital dengan rasa"
          subtitle="Saya menggabungkan naluri desain dengan kemampuan teknis untuk menciptakan produk yang bukan hanya enak dilihat, tetapi juga menyenangkan dipakai."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-400/40 hover:bg-white/[0.05]"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-500/0 blur-2xl transition group-hover:bg-brand-500/30" />
              <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/25 to-cyan-400/20 text-brand-300">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="relative mt-4 text-base font-semibold text-white">{p.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
