export default function Solutions() {
  const items = [
    {
      title: 'Decarbonization Strategy',
      desc: 'Science-based pathways to net-zero with practical roadmaps and governance.',
    },
    {
      title: 'Circular Design',
      desc: 'Design for longevity, repair and reuse to minimize waste across lifecycles.',
    },
    {
      title: 'Sustainable Supply Chains',
      desc: 'Resilient, transparent operations powered by data and responsible sourcing.',
    },
    {
      title: 'Low-Impact Digital',
      desc: 'Efficient, accessible products and platforms optimized for energy and performance.',
    },
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-emerald-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-900">Solutions</h2>
          <p className="mt-4 text-emerald-900/80">
            We design end-to-end programs that align climate ambition with business value.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-md bg-emerald-100/80 border border-emerald-200 flex items-center justify-center text-emerald-700">✳️</div>
              <h3 className="mt-4 font-semibold text-emerald-900">{it.title}</h3>
              <p className="mt-2 text-sm text-emerald-900/80 leading-relaxed">{it.desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-emerald-700 group-hover:translate-x-0.5 transition-transform">Learn more →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
