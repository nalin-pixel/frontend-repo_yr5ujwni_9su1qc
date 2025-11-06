export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white opacity-90" />
        <svg className="absolute -top-24 right-0 opacity-20" width="700" height="700" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" r="300" stroke="#10B981" strokeOpacity="0.2" strokeWidth="1"/>
          <circle cx="400" cy="400" r="200" stroke="#10B981" strokeOpacity="0.25" strokeWidth="1"/>
          <circle cx="400" cy="400" r="100" stroke="#10B981" strokeOpacity="0.3" strokeWidth="1"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-emerald-900">
              Montevia International
            </h1>
            <p className="mt-6 text-lg text-emerald-900/80 max-w-xl">
              We partner with forward-thinking organizations to accelerate the shift to a cleaner, regenerative future. Our work blends strategy, design and technology to deliver measurable sustainability impact.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#solutions" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors">Explore Solutions</a>
              <a href="#about" className="inline-flex items-center justify-center rounded-md border border-emerald-200 px-5 py-3 text-emerald-800 font-medium bg-white hover:bg-emerald-50 transition-colors">Learn More</a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-emerald-700/80">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/>Climate-positive</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/>Human-centered</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500"/>Data-driven</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-100 via-white to-emerald-50 border border-emerald-100 shadow-inner overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1465146633011-14f8e0781093?q=80&w=1600&auto=format&fit=crop"
                alt="Lush green mountains and mist"
                className="h-full w-full object-cover mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
