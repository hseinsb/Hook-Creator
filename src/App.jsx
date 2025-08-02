import { useState } from 'react'
import HookGenerator from './components/HookGenerator'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <HookGenerator />
      </main>
    </div>
  )
}

export default App