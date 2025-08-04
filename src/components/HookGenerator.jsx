import { useState } from 'react'
import { Zap, Copy, Youtube, Clock, MessageSquare, Quote, BarChart3, User, BookOpen, CheckCircle2, AlertCircle, Loader2, Info } from 'lucide-react'
import { generateSoulHookPrompt, analyzeBridgeType } from '../utils/promptSystem'
import { generateHookWithGPT, parseGPTResponse } from '../utils/openai'

const HookGenerator = ({ onInputChange, onApiKeyChange, onError, sharedInput = '', sharedApiKey = '' }) => {
  const [input, setInput] = useState(sharedInput)
  const [apiKey, setApiKey] = useState(sharedApiKey)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [showApiKeyInput, setShowApiKeyInput] = useState(!import.meta.env.VITE_OPENAI_API_KEY)

  const bridgeIcons = {
    'Personal Story': BookOpen,
    'Quote': Quote,
    'Statistic': BarChart3,
    'Credential': User
  }

  const bridgeDescriptions = {
    'Personal Story': 'Personal, emotional, reflective content',
    'Quote': 'Timeless wisdom - philosophical, moral, spiritual',
    'Statistic': 'Data-driven, analytical, social insights',
    'Credential': 'Educational, instructional, authority-based'
  }

  // Update shared state when local state changes
  const handleInputChange = (value) => {
    setInput(value)
    onInputChange?.(value)
  }

  const handleApiKeyChange = (value) => {
    setApiKey(value)
    onApiKeyChange?.(value)
  }

  const handleGenerate = async () => {
    if (!input.trim()) {
      onError?.('Please enter a topic, script, or paragraph to generate hooks.')
      return
    }

    if (!apiKey.trim()) {
      onError?.('Please enter your OpenAI API key.')
      setShowApiKeyInput(true)
      return
    }

    setLoading(true)
    
    try {
      const prompt = generateSoulHookPrompt(input)
      const response = await generateHookWithGPT(prompt, apiKey)
      const parsedResult = parseGPTResponse(response)
      
      setResult(parsedResult)
    } catch (err) {
      onError?.(err.message || 'Failed to generate hooks. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const getBridgeIcon = (bridgeType) => {
    const IconComponent = bridgeIcons[bridgeType] || Quote
    return <IconComponent className="h-5 w-5" />
  }

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-slate-900">
          Generate Viral Video Hooks
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Transform your topics into emotionally magnetic YouTube and TikTok openings using the 
          <span className="font-semibold text-primary-600"> Soul-Hook Hybrid™ </span>
          methodology. Built for content that stops the scroll and transforms minds.
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
        <div className="space-y-6">
          <div>
            <label htmlFor="input" className="block text-lg font-semibold text-slate-900 mb-3">
              Your Topic, Script, or Paragraph
            </label>
            <textarea
              id="input"
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Enter your topic, script, or paragraph here...

Examples:
• 'Why Religious Couples Still Get Divorced'
• 'A short paragraph about masculine men being quiet'
• 'Full script about marriage and emotional maturity'
• 'The psychology of modern dating'"
              className="w-full h-40 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none text-slate-900 placeholder-slate-500"
            />
          </div>

          {/* API Key Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="apiKey" className="block text-sm font-medium text-slate-700">
                OpenAI API Key
              </label>
              {!import.meta.env.VITE_OPENAI_API_KEY && (
                <button
                  onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  {showApiKeyInput ? 'Hide' : 'Show'} API Key
                </button>
              )}
            </div>
            
            {showApiKeyInput && (
                              <input
                id="apiKey"
                type="password"
                value={apiKey}
                onChange={(e) => handleApiKeyChange(e.target.value)}
                placeholder="sk-..."
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
              />
            )}
            
            {!showApiKeyInput && !import.meta.env.VITE_OPENAI_API_KEY && (
              <p className="text-sm text-slate-500">
                Your API key will be used securely and not stored. 
                <a 
                  href="https://platform.openai.com/api-keys" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 ml-1"
                >
                  Get your key here →
                </a>
              </p>
            )}
            
            {!showApiKeyInput && import.meta.env.VITE_OPENAI_API_KEY && (
              <p className="text-sm text-green-600">
                ✅ API key configured - ready to generate hooks!
              </p>
            )}
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !input.trim()}
            className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Generating Soul Hooks...</span>
              </>
            ) : (
              <>
                <Zap className="h-5 w-5" />
                <span>Generate Soul Hooks</span>
              </>
            )}
          </button>
        </div>
      </div>



      {/* Results Display */}
      {result && (
        <div className="space-y-6">
          {/* Title */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <Youtube className="h-6 w-6 text-red-500" />
                <span>YouTube Title</span>
              </h3>
              <button
                onClick={() => copyToClipboard(result.title, 'title')}
                className="text-slate-500 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <p className="text-lg font-semibold text-slate-900 leading-relaxed">
              {result.title}
            </p>
          </div>

          {/* Hook Format Explanation */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900 mb-2">Two Different Hook Formats</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                  <div>
                    <span className="font-medium">🎬 YouTube Hook:</span>
                    <p>Cinematic pacing, philosophical build-up, layered and reflective (25-30s)</p>
                  </div>
                  <div>
                    <span className="font-medium">📱 TikTok Hook:</span>
                    <p>Scroll-stopping trap, blunt contradiction, immediate shock value (6-8s)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hooks */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* YouTube Hook */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <Youtube className="h-5 w-5 text-red-500" />
                  <span>YouTube Hook</span>
                  <span className="text-sm text-red-600 font-normal">(25-30s cinematic)</span>
                </h3>
                <button
                  onClick={() => copyToClipboard(result.youtubeHook, 'youtube')}
                  className="text-slate-500 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div className="prose prose-slate max-w-none">
                <pre className="whitespace-pre-wrap text-slate-800 font-medium leading-relaxed">
                  {result.youtubeHook}
                </pre>
              </div>
            </div>

            {/* TikTok Hook */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-purple-500" />
                  <span>TikTok Hook</span>
                  <span className="text-sm text-purple-600 font-normal">(6-8s scroll-stopper)</span>
                </h3>
                <button
                  onClick={() => copyToClipboard(result.tiktokHook, 'tiktok')}
                  className="text-slate-500 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div className="prose prose-slate max-w-none">
                <pre className="whitespace-pre-wrap text-slate-800 font-medium leading-relaxed">
                  {result.tiktokHook}
                </pre>
              </div>
            </div>
          </div>

          {/* Bridge */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                {getBridgeIcon(result.bridgeType)}
                <span>Bridge</span>
                <span className="text-sm bg-slate-100 text-slate-600 px-2 py-1 rounded font-normal">
                  {result.bridgeType}
                </span>
              </h3>
              <button
                onClick={() => copyToClipboard(result.bridge, 'bridge')}
                className="text-slate-500 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              {bridgeDescriptions[result.bridgeType] || 'Transitional connection after hook'}
            </p>
            <div className="prose prose-slate max-w-none">
              <pre className="whitespace-pre-wrap text-slate-800 leading-relaxed">
                {result.bridge}
              </pre>
            </div>
          </div>

          {/* Usage Tips */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3 flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Usage Tips</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• <strong>YouTube Hook:</strong> Cinematic, philosophical build-up with layered emotional intelligence (25-30s)</li>
              <li>• <strong>TikTok Hook:</strong> Completely different approach - immediate contradiction/shock trap (6-8s max)</li>
              <li>• <strong>Bridge System:</strong> Auto-selected based on content theme - Quote (default), Stat, Story, or Credential</li>
              <li>• <strong>Quote Bridges:</strong> Timeless wisdom from Psychology → Philosophy → Spirituality → Modern thinkers</li>
              <li>• <strong>Soft Landing:</strong> Bridge grounds viewers emotionally after hook tension, prepares for main content</li>
              <li>• <strong>Personalization:</strong> Replace Story/Credential placeholders with your own experiences</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default HookGenerator