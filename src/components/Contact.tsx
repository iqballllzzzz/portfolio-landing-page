import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="kontak" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-brand-600/20 via-slate-900/40 to-cyan-500/10 p-6 sm:p-10">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-300">
                <MessageSquare className="h-3.5 w-3.5" /> Kontak
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Punya proyek menarik? Mari bicara.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                Ceritakan ide atau kebutuhanmu. Saya biasanya membalas dalam 1x24 jam pada hari kerja.
              </p>

              <div className="mt-8 space-y-3">
                <a href="mailto:halo@arkawibowo.id" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10">
                  <Mail className="h-4 w-4 text-brand-300" />
                  halo@arkawibowo.id
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-400/20">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Biasanya merespons cepat
                </div>
              </div>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-5 backdrop-blur-xl sm:p-6"
            >
              <div className="grid gap-4">
                <Field label="Nama" placeholder="Nama kamu" />
                <Field label="Email" type="email" placeholder="kamu@email.com" />
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">Pesan</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Ceritakan sedikit tentang proyekmu..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-brand-400/60 focus:bg-white/[0.07]"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-100"
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Pesan Terkirim!
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = 'text' }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-400">{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-brand-400/60 focus:bg-white/[0.07]"
      />
    </div>
  );
}
