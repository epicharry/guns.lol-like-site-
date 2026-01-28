import { useState } from 'react'
import { SnowCanvas } from './SnowCanvas'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-slate-50">
      {/* Snow in the background */}
      <SnowCanvas />

      {/* Two simple screens layered on top of each other */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        {/* Screen 1: Welcome */}
        <section
          onClick={() => setShowMenu(true)}
          className={`absolute inset-0 flex min-h-screen cursor-pointer flex-col items-center justify-center text-center transition-all duration-700 ${
            showMenu ? 'pointer-events-none opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'
          }`}
        >
          <div>
            <h1 className="glow-text text-4xl font-semibold tracking-[0.35em] uppercase sm:text-5xl">
              Welcome
            </h1>
          </div>
        </section>

        {/* Screen 2: Simple menu with your info */}
        <section
          className={`absolute inset-0 flex min-h-screen items-center justify-center transition-all duration-700 ${
            showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
          }`}
        >
          <div className="max-w-md rounded-2xl border border-slate-800/80 bg-black/70 px-6 py-8 text-sm shadow-xl shadow-black/60 backdrop-blur">
            <h2 className="text-lg font-semibold tracking-tight">[Your Name]</h2>
            <p className="mt-1 text-xs text-slate-400">
              Replace these fields with your real details.
            </p>

            <dl className="mt-5 space-y-2 text-xs text-slate-200">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Email</dt>
                <dd className="font-medium">
                  <a
                    href="mailto:you@example.com"
                    className="hover:text-sky-300"
                  >
                    you@example.com
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">City</dt>
                <dd className="font-medium">[Your City]</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Role</dt>
                <dd className="font-medium">Frontend / Full‑stack developer</dd>
              </div>
            </dl>

            <div className="mt-6 space-y-2 text-xs text-slate-200">
              <p className="text-slate-400">Links</p>
              <div className="flex flex-col gap-1">
                <a
                  href="#"
                  className="inline-flex items-center justify-between rounded-md border border-slate-800/80 bg-black/40 px-3 py-1.5 hover:border-slate-500 hover:bg-slate-900/60"
                >
                  <span>GitHub</span>
                  <span className="text-[0.65rem] text-slate-400">
                    github.com/your-handle
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-between rounded-md border border-slate-800/80 bg-black/40 px-3 py-1.5 hover:border-slate-500 hover:bg-slate-900/60"
                >
                  <span>LinkedIn</span>
                  <span className="text-[0.65rem] text-slate-400">
                    linkedin.com/in/your-handle
                  </span>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowMenu(false)}
              className="mt-6 text-[0.7rem] text-slate-500 hover:text-slate-300"
            >
              Back to welcome
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
