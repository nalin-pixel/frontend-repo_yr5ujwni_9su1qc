import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans antialiased bg-white text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Contact />
      </main>
      <footer className="border-t border-emerald-100 py-8 bg-emerald-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-800">© {new Date().getFullYear()} Montevia International. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-emerald-800">
            <a href="#about" className="hover:text-emerald-600">About</a>
            <a href="#solutions" className="hover:text-emerald-600">Solutions</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
