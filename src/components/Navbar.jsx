import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-emerald-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
            <span className="text-emerald-900 font-semibold tracking-tight">Montevia International</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-emerald-800">
            <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
            <a href="#solutions" className="hover:text-emerald-600 transition-colors">Solutions</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-emerald-800 hover:bg-emerald-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-3 text-emerald-900">
              <a href="#about" className="px-2 py-2 rounded hover:bg-emerald-50" onClick={() => setOpen(false)}>About</a>
              <a href="#solutions" className="px-2 py-2 rounded hover:bg-emerald-50" onClick={() => setOpen(false)}>Solutions</a>
              <a href="#contact" className="px-2 py-2 rounded hover:bg-emerald-50" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
