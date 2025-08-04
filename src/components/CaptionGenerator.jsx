import { useState } from 'react'
import { RefreshCw, Copy, Instagram, MessageSquare, Youtube, Settings, Hash, CheckCircle2 } from 'lucide-react'
import { generateCaptionWithGPT, parseCaptionResponse } from '../utils/openai'
import { generateCaptionPrompt } from '../utils/promptSystem'

const CaptionGenerator = ({ inputText, apiKey, onError }) => {
  const [loading, setLoading] = useState(false)
  const [captions, setCaptions] = useState(null)
  const [hashtagMode, setHashtagMode] = useState('auto') // 'auto' or 'custom'
  const [customHashtags, setCustomHashtags] = useState('')
  const [regeneratingType, setRegeneratingType] = useState(null)

  const platformInfo = {
    tiktok: {
      icon: MessageSquare,
      name: 'TikTok',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      description: 'Hook + Reflection + Hashtags (3-6 lines max)'
    },
    instagram: {
      icon: Instagram, 
      name: 'Instagram',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      description: 'Hook + Reflection + Hashtags (3-6 lines max)'
    },
    youtube: {
      icon: Youtube,
      name: 'YouTube Shorts',
      color: 'text-red-500', 
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      description: 'Title + Summary + CTA + Hashtags (4-7 lines)'
    }
  }

  const handleGenerateCaptions = async () => {
    if (!inputText?.trim()) {
      onError?.('Please enter content in the Hook Generator first.')
      return
    }

    if (!apiKey?.trim()) {
      onError?.('Please enter your OpenAI API key.')
      return
    }

    setLoading(true)
    try {
      const prompt = generateCaptionPrompt(inputText, hashtagMode, customHashtags)
      const response = await generateCaptionWithGPT(prompt, apiKey)
      const parsedCaptions = parseCaptionResponse(response)
      setCaptions(parsedCaptions)
    } catch (err) {
      onError?.(err.message || 'Failed to generate captions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleRegenerateCaption = async (platform) => {
    if (!captions || !inputText?.trim() || !apiKey?.trim()) return

    setRegeneratingType(platform)
    try {
      const prompt = generateCaptionPrompt(inputText, hashtagMode, customHashtags, platform)
      const response = await generateCaptionWithGPT(prompt, apiKey)
      const parsedCaptions = parseCaptionResponse(response)
      
      setCaptions(prev => ({
        ...prev,
        [platform]: parsedCaptions[platform]
      }))
    } catch (err) {
      onError?.(err.message || 'Failed to regenerate caption. Please try again.')
    } finally {
      setRegeneratingType(null)
    }
  }

  const copyToClipboard = async (text, platform) => {
    try {
      await navigator.clipboard.writeText(text)
      // Could add toast notification here
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const renderCaption = (platform, caption) => {
    const info = platformInfo[platform]
    const IconComponent = info.icon
    const isRegenerating = regeneratingType === platform

    return (
      <div key={platform} className={`bg-white rounded-xl shadow-lg p-6 border ${info.borderColor}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <IconComponent className={`h-6 w-6 ${info.color}`} />
            <h3 className="text-lg font-bold text-slate-900">{info.name}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleRegenerateCaption(platform)}
              disabled={isRegenerating}
              className="text-slate-500 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100 disabled:opacity-50"
              title="Regenerate caption"
            >
              <RefreshCw className={`h-4 w-4 ${isRegenerating ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={() => copyToClipboard(caption, platform)}
              className="text-slate-500 hover:text-slate-700 p-2 rounded-lg hover:bg-slate-100"
              title="Copy caption"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <p className="text-xs text-slate-500 mb-3">{info.description}</p>
        
        <div className="prose prose-slate max-w-none">
          <pre className="whitespace-pre-wrap text-slate-800 leading-relaxed font-medium">
            {caption}
          </pre>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-slate-900">
          SEO + Viral Captions Generator
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Generate platform-optimized, emotionally engaging, algorithm-friendly captions with 
          <span className="font-semibold text-primary-600"> fresh viral hooks</span> for 
          <span className="font-semibold text-purple-600"> TikTok</span>, 
          <span className="font-semibold text-pink-600"> Instagram</span>, and 
          <span className="font-semibold text-red-600"> YouTube Shorts</span> 
          — using proven viral formats that trigger engagement.
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
        <div className="space-y-6">
          {/* Hashtag Mode Toggle */}
          <div>
            <label className="block text-lg font-semibold text-slate-900 mb-3">
              Hashtag Generation
            </label>
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={() => setHashtagMode('auto')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  hashtagMode === 'auto' 
                    ? 'bg-primary-50 border-primary-200 text-primary-700' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Hash className="h-4 w-4" />
                <span>Auto SEO</span>
                {hashtagMode === 'auto' && <CheckCircle2 className="h-4 w-4" />}
              </button>
              
              <button
                onClick={() => setHashtagMode('custom')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  hashtagMode === 'custom' 
                    ? 'bg-primary-50 border-primary-200 text-primary-700' 
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Settings className="h-4 w-4" />
                <span>Custom Input</span>
                {hashtagMode === 'custom' && <CheckCircle2 className="h-4 w-4" />}
              </button>
            </div>

            {hashtagMode === 'custom' && (
              <textarea
                value={customHashtags}
                onChange={(e) => setCustomHashtags(e.target.value)}
                placeholder="Enter your custom hashtags (separated by spaces or commas)...&#10;&#10;Example: #Philosophy #Spirituality #Truth #ModernSlavery #MasculinityCrisis #Naseeb #SpokenTruth #WakeUpReels #MindShift"
                className="w-full h-24 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none text-slate-900 placeholder-slate-500 text-sm"
              />
            )}
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerateCaptions}
            disabled={loading || !inputText?.trim()}
            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 disabled:from-slate-400 disabled:via-slate-400 disabled:to-slate-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <RefreshCw className="h-5 w-5 animate-spin" />
                <span>Generating Viral Captions...</span>
              </>
            ) : (
              <>
                <Hash className="h-5 w-5" />
                <span>Generate Platform Captions</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Results */}
      {captions && (
        <div className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* TikTok & Instagram - Same layout */}
            {renderCaption('tiktok', captions.tiktok)}
            {renderCaption('instagram', captions.instagram)}
          </div>
          
          {/* YouTube Shorts - Full width */}
          <div className="grid grid-cols-1">
            {renderCaption('youtube', captions.youtube)}
          </div>

          {/* Usage Tips */}
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-3 flex items-center space-x-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>Caption Structure Guide</span>
            </h4>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div>
                <h5 className="font-medium text-slate-900 mb-2">📱 TikTok/Instagram Format:</h5>
                <ul className="space-y-1">
                  <li>• <strong>Fresh Hook:</strong> New viral format (contradiction, truth bomb, mirror, paradox)</li>
                  <li>• <strong>Reflection:</strong> Builds tension and curiosity from hook</li>
                  <li>• <strong>Hashtags:</strong> 8-12 engagement-optimized blend</li>
                  <li>• <strong>Strategy:</strong> Scroll-stopping, debate-triggering content</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-slate-900 mb-2">📺 YouTube Shorts Format:</h5>
                <ul className="space-y-1">
                  <li>• <strong>Fresh Title:</strong> Question/controversy format for clicks</li>
                  <li>• <strong>Summary:</strong> Philosophical depth with SEO keywords</li>
                  <li>• <strong>CTA:</strong> Transformation promise</li>
                  <li>• <strong>Hashtags:</strong> Up to 15 discovery-optimized tags</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CaptionGenerator