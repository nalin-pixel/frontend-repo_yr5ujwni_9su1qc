export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-900">About Montevia</h2>
            <p className="mt-6 text-emerald-900/80 leading-relaxed">
              Montevia International is a purpose-led company focused on enabling sustainable progress. We help enterprises reduce environmental impact, design circular products, and implement resilient operations.
            </p>
            <p className="mt-4 text-emerald-900/80 leading-relaxed">
              Our team blends expertise across climate strategy, engineering, and experience design. Together, we translate ambition into action — from decarbonization roadmaps to low-impact digital experiences.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-emerald-100 p-6 bg-emerald-50/50">
              <p className="text-sm font-medium text-emerald-700">Mission</p>
              <p className="mt-2 text-emerald-900">Accelerate the world’s transition to regenerative business.</p>
            </div>
            <div className="rounded-xl border border-emerald-100 p-6 bg-emerald-50/50">
              <p className="text-sm font-medium text-emerald-700">Approach</p>
              <p className="mt-2 text-emerald-900">Systems thinking, evidence-based decisions, collaborative delivery.</p>
            </div>
            <div className="rounded-xl border border-emerald-100 p-6 bg-emerald-50/50">
              <p className="text-sm font-medium text-emerald-700">Impact</p>
              <p className="mt-2 text-emerald-900">Measure what matters — carbon, water, biodiversity and equity.</p>
            </div>
            <div className="rounded-xl border border-emerald-100 p-6 bg-emerald-50/50">
              <p className="text-sm font-medium text-emerald-700">Presence</p>
              <p className="mt-2 text-emerald-900">Operating globally with local partners across regions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
