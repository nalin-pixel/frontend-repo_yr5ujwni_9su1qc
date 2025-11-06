import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks — we will be in touch shortly.');
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-emerald-900">Let’s talk</h2>
            <p className="mt-4 text-emerald-900/80">Share a bit about your goals and we’ll reach out.</p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-xl border border-emerald-100 p-6 bg-emerald-50/50">
                <p className="text-sm font-medium text-emerald-700">Email</p>
                <p className="mt-1 text-emerald-900">hello@montevia.com</p>
              </div>
              <div className="rounded-xl border border-emerald-100 p-6 bg-emerald-50/50">
                <p className="text-sm font-medium text-emerald-700">Locations</p>
                <p className="mt-1 text-emerald-900">Global, remote-first</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-emerald-100 p-6 bg-emerald-50/50">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-emerald-800">First name</label>
                <input required className="mt-1 w-full rounded-md border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 text-emerald-900"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-800">Last name</label>
                <input required className="mt-1 w-full rounded-md border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 text-emerald-900"/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-emerald-800">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 text-emerald-900"/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-emerald-800">How can we help?</label>
                <textarea rows="4" required className="mt-1 w-full rounded-md border-emerald-200 focus:border-emerald-400 focus:ring-emerald-400 text-emerald-900"/>
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors">Send message</button>
            {status && <p className="mt-3 text-emerald-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
