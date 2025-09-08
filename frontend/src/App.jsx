import React from 'react'
import Dashboard from './components/Dashboard'
import Quiz from './components/Quiz'
import CollegeFinder from './components/CollegeFinder'

export default function App(){
  return (
    <div className="min-h-screen p-6">
      <header className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Digital Guidance Platform</h1>
        <p className="text-slate-600 mb-6">Personalized career and college guidance for students</p>
      </header>

      <main className="max-w-4xl mx-auto grid gap-6">
        <Dashboard />
        <Quiz />
        <CollegeFinder />
      </main>
    </div>
  )
}
