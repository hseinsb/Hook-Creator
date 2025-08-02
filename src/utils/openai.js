// OpenAI API Integration for Soul-Hook Generator

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

export const generateHookWithGPT = async (prompt, apiKey) => {
  if (!apiKey) {
    throw new Error('OpenAI API key is required')
  }

  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are a viral content creator assistant specializing in the Soul-Hook Hybrid methodology for Hussein Sbeiti. You generate emotionally magnetic hooks that stop scrolling and create psychological tension. Always follow the exact output format requested and ensure hooks contain internal contradictions and open loops.`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: 1500,
        temperature: 0.8,
        top_p: 0.9,
        frequency_penalty: 0.3,
        presence_penalty: 0.3
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error?.message || `API Error: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0]?.message?.content || 'No response generated'

  } catch (error) {
    console.error('OpenAI API Error:', error)
    throw error
  }
}

export const parseGPTResponse = (response) => {
  try {
    console.log('Raw GPT Response:', response) // Debug log
    
    const lines = response.split('\n').filter(line => line.trim())
    
    let title = ''
    let youtubeHook = ''
    let tiktokHook = ''
    let bridge = ''
    let bridgeType = ''
    
    let currentSection = ''
    let hookLines = []
    let tiktokLines = []
    let bridgeLines = []
    
    for (let line of lines) {
      line = line.trim()
      
      if (line.startsWith('Title:')) {
        title = line.replace('Title:', '').trim()
        currentSection = 'title'
      } else if (line.includes('YouTube Hook') || line.includes('Youtube Hook') || (line.includes('Hook') && line.includes('YouTube'))) {
        currentSection = 'youtube'
        hookLines = []
      } else if (line.includes('TikTok Hook') || line.includes('Tiktok Hook') || line.includes('TIKTOK Hook') || (line.includes('Hook') && line.includes('TikTok'))) {
        currentSection = 'tiktok'
        tiktokLines = []
      } else if (line.includes('Bridge')) {
        currentSection = 'bridge'
        bridgeLines = []
        // Extract bridge type if mentioned
        if (line.includes('Quote') || line.includes('quote')) bridgeType = 'Quote'
        else if (line.includes('Stat') || line.includes('statistic')) bridgeType = 'Statistic'
        else if (line.includes('Story') || line.includes('story')) bridgeType = 'Personal Story'
        else if (line.includes('Credential') || line.includes('credential')) bridgeType = 'Credential'
        // Auto-detect bridge type from content
        else if (line.includes('[Insert Personal Story') || line.includes('[Insert personal story')) bridgeType = 'Personal Story'
        else if (line.includes('[Insert Relevant Credential') || line.includes('[Insert relevant credential')) bridgeType = 'Credential'
        else if (line.includes('%') || line.includes('percent') || /\d+\s*in\s*\d+/.test(line) || /\d+%/.test(line)) bridgeType = 'Statistic'
        else bridgeType = 'Quote' // Default to quote
      } else if (line && 
                 !line.startsWith('---') && 
                 !line.includes('YAML FORMAT') && 
                 !line.includes('END FORMAT') &&
                 !line.includes('(25-30') &&
                 !line.includes('(6-8') &&
                 !line.includes('CINEMATIC') &&
                 !line.includes('SCROLL-STOPPING') &&
                 !line.includes('Auto-selected')) {
        
        if (currentSection === 'youtube') {
          hookLines.push(line)
        } else if (currentSection === 'tiktok') {
          tiktokLines.push(line)
        } else if (currentSection === 'bridge') {
          bridgeLines.push(line)
        }
      }
    }
    
    youtubeHook = hookLines.join('\n').trim()
    tiktokHook = tiktokLines.join('\n').trim()
    bridge = bridgeLines.join('\n').trim()
    
    console.log('Parsed YouTube Hook:', youtubeHook) // Debug log
    console.log('Parsed TikTok Hook:', tiktokHook) // Debug log
    console.log('Parsed Bridge:', bridge) // Debug log
    
    return {
      title: title || 'Generated Title',
      youtubeHook: youtubeHook || 'YouTube hook generated',
      tiktokHook: tiktokHook || 'TikTok hook generated', 
      bridge: bridge || 'Bridge content generated',
      bridgeType: bridgeType || 'Auto-selected'
    }
  } catch (error) {
    console.error('Error parsing GPT response:', error)
    return {
      title: 'Generated Content',
      youtubeHook: response.split('\n').slice(0, 5).join('\n'),
      tiktokHook: response.split('\n').slice(0, 3).join('\n'),
      bridge: 'Bridge content generated',
      bridgeType: 'Auto-selected'
    }
  }
}