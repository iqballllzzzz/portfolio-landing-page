import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const groups = [
  {
    title: 'Design',
    items: ['Product Design', 'Design Systems', 'Prototyping', 'Motion'],
  },
  {
    title: 'Front-End',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Back-End & Tools',
    items: ['Node.js', 'PostgreSQL', 'Figma', 'Git / CI'],
  },
];

export default function Skills() {
  return (
    <section id="keahlian" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Keahlian"
          title="Perangkat & kemampuan"
          subtitle="Kombinasi keahlian desain dan engineering untuk mengantar ide dari sketsa hingga produksi."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-bold text-white">{g.title}</h3>
              <div className="mt-5 space-y-3">
                {g.items.map((it, idx) => (
                  <div key={it}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-slate-300">{it}</span>
                      <span className="text-slate-500">{90 - idx * 6}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${90 - idx * 6}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.1 + idx * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-500 to-cyan-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
