import { useState } from 'react'
import HookGenerator from './components/HookGenerator'
import CaptionGenerator from './components/CaptionGenerator'
import Header from './components/Header'

function App() {
  const [sharedInput, setSharedInput] = useState('')
  const [sharedApiKey, setSharedApiKey] = useState(import.meta.env.VITE_OPENAI_API_KEY || '')
  const [error, setError] = useState('')

  const handleError = (errorMessage) => {
    setError(errorMessage)
    // Auto-clear error after 5 seconds
    setTimeout(() => setError(''), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl space-y-16">
        {/* Global Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
            <div className="h-5 w-5 text-red-500 mt-0.5">⚠</div>
            <div>
              <h4 className="font-medium text-red-900">Error</h4>
              <p className="text-red-700 text-sm mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Hook Generator */}
        <HookGenerator 
          onInputChange={setSharedInput}
          onApiKeyChange={setSharedApiKey}
          onError={handleError}
          sharedInput={sharedInput}
          sharedApiKey={sharedApiKey}
        />

        {/* Caption Generator */}
        <CaptionGenerator 
          inputText={sharedInput}
          apiKey={sharedApiKey}
          onError={handleError}
        />
      </main>
    </div>
  )
}

export default App