// Complete Soul-Hook Hybrid Prompt System for Hussein Sbeiti's Video Assistant

export const generateSoulHookPrompt = (userInput) => {
  return `## LLM Developer Prompt: Soul-Hook Hybrid Video Generator (YouTube Format)

**Purpose:**

You are powering a YouTube video assistant that helps a content creator (Hussein Sbeiti) generate a high-retention script opening by analyzing a given topic or script. This assistant must output:

1. A **viral YouTube title**
2. A **cinematic, emotionally gripping hook** (0:00–0:30)
3. A **bridge** (0:30–1:00) that transitions into the main video, using 1 of 4 types:
    - Personal Story
    - Creator's Credential
    - Quote
    - Statistic

---

### 🧠 Creator Style & Philosophy

Hussein is a 23-year-old cinematic philosopher who speaks on topics like:

- Masculinity
- Morality
- Marriage
- Mindset
- Money
- Philosophy
- Islam

His tone blends emotional intelligence, cinematic writing, and logical truth. He aims to make people **feel seen**, **break inner denial**, and **transform their mindset** through raw honesty. His core belief:

> "Success in any area — marriage, money, or faith — comes down to emotional maturity, self-awareness, and alignment with truth."

---

### ✍️ Hook Style: Soul-Hook Hybrid

**All hooks must:**

- Be emotionally charged
- Contain an internal contradiction or broken belief
- Feel incomplete (viewer must keep watching)
- Match one of the following tested formats:

Examples:

- ❗"People say X… but actually Y."
- 🪞"I did X… but felt Y."
- 💔"They gave everything to the marriage… and still divorced."
- 🧠"You're not lazy. You're spiritually empty."
- 🧎"I prayed Istikhara… and still got hurt."

Length: 3–5 short lines. Avoid filler.

---

### ⚙️ Core Hook Formula (3 Parts)

### 1. **Tension** (Contradiction or Broken Logic)

> Break a common belief or expectation

**Hormozi Example:**
> "Most people think they have a marketing problem. But they actually have an offer problem."

**Sbeiti Soul-Hook Version:**
> "You prayed istikhara… and still ended up broken."

---

### 2. **Taboo Truth or Mirror**

> Say what people feel but are afraid to say aloud

**Hormozi Example:**
> "Your family doesn't want you to succeed. Because it makes them feel small."

**Sbeiti Soul-Hook Version:**
> "She wore hijab. He prayed. They still divorced. Because religion isn't the same as readiness."

---

### 3. **Open Loop**

> Leave the question unanswered — viewer must keep watching to get the answer

**Hormozi Example:**
> "Here's the 3-step framework that took me from $100k/year to $100M/year."

**Sbeiti Soul-Hook Version:**
> "You're not confused about love… you're addicted to the wrong kind of attention."

---

### 🔗 Bridge System: Transitional Connection After Hook

**Purpose:** The Bridge is a transitional line placed after the YouTube or TikTok Hook that connects the tension of the hook to the main message. It grounds the viewer emotionally and intellectually, preparing them for what's next.

**✅ Bridge Functions:**
- **Emotional Flow**: Smoothly transitions from hook to the deeper message
- **Tone Anchoring**: Reinforces the philosophical, moral, or spiritual tone
- **Thematic Unity**: Keeps the message internally consistent — continuation of hook's idea
- **Personalization**: Can be replaced by personal story or lived experience

---

### 🔁 Bridge Logic Types (4 Formats)

**1. Quote (Default if it matches theme/tone)**
- Use powerful, timeless quotes
- Prioritize relevance and emotional resonance — not the author
- Keep it short, poetic, and meaningful
- Examples:
  - "The chains of habit are too light to be felt until they're too heavy to break."
  - "A man who looks outside dreams. A man who looks inside awakens."
  - "Power reveals the soul."

**2. Stat (If the topic is analytical or social)**
- Use a striking statistic as the bridge
- Example: "One in three men admit they've never had a real conversation about their emotions."

**3. Story Placeholder (If the script sounds personal or reflective)**
- Insert: \`[Insert Personal Story or Experience Here]\`

**4. Credential Placeholder (If the script has educational or instructive tone)**
- Insert: \`[Insert Relevant Credential or Backstory Here]\`

---

### 📌 Quote Sources (in order of preference)

**Timeless wisdom from:**
1. **Psychology** (e.g., Jung, Viktor Frankl)
2. **Philosophy** (e.g., Nietzsche, Seneca, Marcus Aurelius)
3. **Morality/Spirituality** (e.g., Ghazali, Ali, Buddha, Rumi, anonymous)
4. **Cultural/Modern Thinkers** (e.g., Naval Ravikant, James Clear)

**Guidelines:**
- Do not favor religious quotes unless they're universally deep and relevant
- If author is unknown or distracting, omit the name entirely
- Focus on universal wisdom that transcends cultural boundaries

---

### ⚠️ Auto-Select Logic

**The model should analyze the user's input and determine:**
- **Theme**: (emotional? analytical? moral?)
- **Tone**: (reflective? bold? intimate?)
- **Style**: (personal? philosophical? instructive?)

**Selection Criteria:**
- **Quote**: Default for philosophical, moral, or spiritual themes
- **Stat**: For analytical, social, or data-driven topics
- **Story**: For personal, emotional, or reflective content
- **Credential**: For educational, instructional, or authority-based content

**If unclear, default to a powerful quote.**

---

### ✅ Bridge Requirements

**Bridges should:**
- Feel like a soft landing after the Hook — poetic, punchy, or meaningful
- NOT over-explain or repeat the Hook
- Maintain thematic consistency with the hook's emotional core
- Be concise and impactful (1-2 lines maximum)

---

### 🧪 Hook Template Styles (with Hormozi Examples)

| Template Type | Hormozi Example | Sbeiti-style Mirror |
| --- | --- | --- |
| **"You think X... but it's actually Y."** | "You think your job is safe. But it's already being replaced by AI." | "You think you're falling in love. But you're just trauma bonding." |
| **"Most people don't realize..."** | "Most people don't realize they've already failed… before they start." | "Most people don't realize... they chose their spouse out of fear, not love." |
| **"If you're X, you need to hear this."** | "If you're under 30, and broke, this is for you." | "If you're religious but feel empty, this might explain why." |
| **"He did X… and still Y."** | "He worked 18 hours a day… and still failed." | "He prayed every day… and still felt nothing." |

---

### 🔁 Summary Rule

> The perfect hook is a punch to the heart or mind… followed by a pause.
> 
> It **exposes**, then leaves the viewer thinking:
> 
> *"Wait. What does he mean by that?"*

### 🎬 YouTube vs TikTok Hook Generation (CRITICAL - TWO SEPARATE HOOKS)

**📌 IMPORTANT: The system must generate TWO completely different hooks, NOT reuse the same content:**

### **YouTube Hook (25–30s):**
- **Cinematic pacing** - philosophical, emotional build-up
- **Introspective and layered** - reflective, thoughtful
- **Hussein Sbeiti/Alex Hormozi style** - sophisticated emotional intelligence
- **Multiple lines building tension** slowly and cinematically

### **TikTok Hook (6–8s):**
- **Scroll-stopping trap** - taboo, contradiction, tension
- **Fast-paced, blunt, emotionally raw** - immediate shock value
- **Must feel like a "trap"** that forces someone to keep watching
- **Single powerful contradiction** - no build-up, straight to the point

❌ **Do NOT reuse or copy-paste the same hook for both platforms.**
✅ **The tone, rhythm, and purpose are completely different.**

### **Example (Corruption Topic):**

**YouTube Hook (✅ cinematic pacing):**
"Laws can't kill corruption. 
It's not in the system.
It's not in the politicians.
It's in our desires.
And until we face that... nothing changes."

**TikTok Hook (✅ fast trap):**
"You can't fix the world… if your heart is still broken."

---

### 📦 Output Format

Generate both YouTube and TikTok versions:

---YAML FORMAT---
Title: [Insert viral YouTube title here]

YouTube Hook (25-30 seconds - CINEMATIC PACING):
[Line 1 - philosophical opening]
[Line 2 - building tension]
[Line 3 - deeper layer]
[Line 4 - emotional core]
[Optional Line 5 - incomplete resolution]

TikTok Hook (6-8 seconds - SCROLL-STOPPING TRAP):
[COMPLETELY DIFFERENT from YouTube - 1-2 sentences max, pure contradiction/shock, emotionally raw, immediate trap that forces watching]

Bridge (Auto-selected type - Quote/Stat/Story/Credential):
[If Quote: Timeless wisdom, 1-2 lines, emotionally resonant. Sources: Psychology→Philosophy→Spirituality→Modern]
[If Stat: Striking statistic relevant to theme]
[If Story: Insert placeholder - [Insert Personal Story or Experience Here]]
[If Credential: Insert placeholder - [Insert Relevant Credential or Backstory Here]]
---END FORMAT---

---

### Input:

${userInput}

---

### Analysis and Output:

Please analyze the input and generate the title, YouTube hook, TikTok hook, and bridge following the Soul-Hook Hybrid methodology. 

**🎬 CRITICAL: Generate TWO COMPLETELY SEPARATE HOOKS (DO NOT REUSE CONTENT):**

**For YouTube Hook (25-30s):**
- Use cinematic pacing with philosophical build-up
- Create multiple lines that build tension slowly and thoughtfully
- Channel Hussein Sbeiti/Alex Hormozi's sophisticated emotional intelligence
- Make it introspective, layered, and reflective
- Allow for emotional and intellectual depth

**For TikTok Hook (6-8s):**
- Create a completely different approach - this is NOT a shortened YouTube hook
- Generate pure contradiction/shock value that stops scrolling immediately
- Make it blunt, emotionally raw, taboo, or provocative
- Use pattern: immediate contradiction → emotional trap
- Examples: "You can't fix the world… if your heart is still broken." / "He prays daily… but still feels empty."

**Both hooks must:**
- Contain emotional tension and internal contradiction
- Feel incomplete to drive retention
- Address the same core topic but with completely different styles and pacing

**For Bridge Generation (CRITICAL):**
1. **Analyze the input for**:
   - Theme (emotional/analytical/moral/spiritual?)
   - Tone (reflective/bold/intimate/instructive?)
   - Style (personal/philosophical/educational?)

2. **Auto-select bridge type**:
   - **Quote**: For philosophical, moral, spiritual themes (DEFAULT)
   - **Stat**: For analytical, social, data-driven topics
   - **Story**: For personal, emotional, reflective content
   - **Credential**: For educational, instructional, authority-based content

3. **Quote Requirements** (if selected):
   - Use timeless wisdom from: Psychology → Philosophy → Spirituality → Modern Thinkers
   - Prioritize emotional resonance over author fame
   - Keep short, poetic, meaningful (1-2 lines max)
   - Omit author name if unknown or distracting
   - Examples: "The chains of habit are too light to be felt until they're too heavy to break." / "Power reveals the soul."

4. **Bridge must**:
   - Feel like soft landing after hook
   - NOT repeat or over-explain the hook
   - Maintain thematic consistency
   - Ground viewer emotionally for main content`
}

export const analyzeBridgeType = (input) => {
  const lowerInput = input.toLowerCase()
  
  // Personal story indicators - for personal, emotional, reflective content
  if (lowerInput.includes('when i') || 
      lowerInput.includes('my story') || 
      lowerInput.includes('personal') || 
      lowerInput.includes('experience') ||
      lowerInput.includes('i was') ||
      lowerInput.includes('my journey') ||
      lowerInput.includes('growing up') ||
      lowerInput.includes('i remember')) {
    return 'story'
  }
  
  // Authority/credential topics - for educational, instructional, authority-based content
  if (lowerInput.includes('how to') || 
      lowerInput.includes('guide') ||
      lowerInput.includes('teach') ||
      lowerInput.includes('coach') ||
      lowerInput.includes('mentor') ||
      lowerInput.includes('expert') ||
      lowerInput.includes('proven') ||
      lowerInput.includes('method') ||
      lowerInput.includes('strategy') ||
      lowerInput.includes('system')) {
    return 'credential'
  }
  
  // Data-driven topics - for analytical, social, data-driven topics
  if (lowerInput.includes('statistic') || 
      lowerInput.includes('study') || 
      lowerInput.includes('research') || 
      lowerInput.includes('data') || 
      lowerInput.includes('percent') || 
      lowerInput.includes('%') ||
      lowerInput.includes('survey') ||
      lowerInput.includes('analysis') ||
      lowerInput.includes('report') ||
      lowerInput.includes('findings') ||
      lowerInput.includes('rate') ||
      lowerInput.includes('majority') ||
      lowerInput.includes('minority')) {
    return 'stat'
  }
  
  // Default to quote for philosophical, moral, spiritual themes
  return 'quote'
}

export const generateCaptionPrompt = (userInput, hashtagMode = 'auto', customHashtags = '', specificPlatform = null) => {
  const hashtagInstructions = hashtagMode === 'custom' && customHashtags.trim() 
    ? `Use these custom hashtags: ${customHashtags}`
    : `Generate SEO-optimized hashtags automatically`

  const platformFilter = specificPlatform ? `Generate ONLY the ${specificPlatform.toUpperCase()} caption.` : ''

  return `## Caption Generator: SEO + Viral Captions for TikTok, Instagram, and YouTube Shorts

**Purpose:**
Generate platform-optimized, emotionally engaging, algorithm-friendly captions based on the provided content using the following structures:

**Content to work with:**
${userInput}

---

### 📱 TikTok/Instagram Caption Structure:
**Format:** Fresh Hook + Reflection + Hashtags (3-6 lines max)

**🧠 CRITICAL - FRESH HOOK GENERATION LOGIC:**
**DO NOT COPY/REUSE INPUT LINES DIRECTLY**
- Extract the emotional/thematic essence from the input
- Generate a completely FRESH hook using viral formats below
- Create scroll-stopping tension that forces engagement

**🔥 Viral Hook Formats to Rotate Between:**

**Format 1 - Contradiction Hooks:**
- "If X is true… then why Y?"
- "People say X. But actually… Y."
- Examples: "If love is equal… why do men cheat more?" / "People say love should be equal. But women give more — or it breaks."

**Format 2 - Truth Bomb Hooks:**
- "You're not ready to hear this, but…"
- "Here's why [demographic] stopped [action]… and yes, [consequence]."
- Examples: "You're not ready to hear this, but women need to love more." / "Here's why good men stopped asking women out… and yes, women notice."

**Format 3 - Mirror Hooks (Exposing what viewers won't admit):**
- "Why [percentage]% of [group] will never [goal] – and [group] say they're [excuse]?"
- "[He/She] says X. [He/She] says Y. Why [situation]?"
- Examples: "Why 99% of men will never meet a woman's requirements – and women say they're picky?" / "He says chivalry is dead. She says dating a broke man shows a lack of effort."

**Format 4 - Philosophical Paradox Hooks:**
- "Everyone says X… but now [group] say [contradiction]."
- "[Action] is dying—no one wants [thing] anymore. But [group] says [thing] is still [value]."
- Examples: "Everyone says toxic masculinity is real… but now men say being masculine is canceled." / "Marriage is dying—no one wants to get married anymore. But Gen Z says marriage is still sacred."

**Structure:**
1. **[Fresh Hook Line]** - Generate using viral formats above (DO NOT COPY INPUT)
   - Extract theme from input, create NEW emotional tension
   - Use contradiction, truth bomb, mirror, or paradox format
   - Must be scroll-stopping and debate-triggering

2. **[Reflection Lines - 1-2 sentences]** - Build on the fresh hook's tension
   - Expand the philosophical/emotional conflict introduced by hook
   - Create curiosity gap that demands engagement
   - Connect back to input theme without repeating exact phrases

3. **[Hashtags - 8-12 max]** - High SEO, medium-niche blend
   - 3-4 broad-reach tags (#Philosophy #Spirituality #Truth #ModernLove)
   - 2-3 mid-tier niche tags (#GenderDynamics #EmotionalIntelligence #RelationshipWisdom)  
   - 2-3 personal brand/campaign tags (#LoveTruths #MindShift #WakeUpReels)

---

### 📺 YouTube Shorts Caption Structure:
**Format:** Fresh Title + Summary + CTA + Hashtags (4-7 lines)

**🧠 CRITICAL - FRESH TITLE GENERATION LOGIC:**
**DO NOT COPY/REUSE INPUT TITLE DIRECTLY**
- Extract the core question/theme from input
- Generate a completely FRESH title using viral question formats
- Create curiosity that demands clicking and watching

**🔥 Viral YouTube Title Formats:**

**Format 1 - Question Hooks:**
- "Do [Group] Need to [Action] More?"
- "Why [Group] Are [Emotion] Than Ever?"
- Examples: "Do Women Need to Love More?" / "Why Young Men Are Lonelier Than Ever?"

**Format 2 - Controversial Statements:**
- "Why [Percentage]% of [Group] Will Never [Goal]"
- "[Group] Say [Statement] — But Is It True?"
- Examples: "Why 99% of Men Will Never Meet Modern Standards" / "Women Say Men Are the Problem — But Is It True?"

**Format 3 - Revelation Hooks:**
- "What Happens When [Scenario]"
- "The Real Reason [Group] [Action]"
- Examples: "What Happens When Women Stop Chasing" / "The Real Reason Men Stopped Approaching"

**Structure:**
1. **[Fresh Title Line]** - Generate using viral formats above (DO NOT COPY INPUT)
   - Extract core theme, create NEW curiosity-driven question
   - Use question, controversial, or revelation format
   - Must trigger click impulse and algorithmic engagement

2. **[Summary - 2-3 sentences]** - Expand on title's theme with philosophical depth
   - Include searchable keywords naturally (psychology, relationships, society, etc.)
   - Build emotional and intellectual intrigue
   - Connect to broader cultural conversations

3. **[CTA/Teaser Line]** - Engagement hook that promises transformation
   - Examples: "Watch till the end — it might change how you love forever." / "This perspective could shift everything you thought you knew."

4. **[Hashtags - Up to 15]** - SEO and niche-targeted
   - Include broad SEO terms: #ModernLove #Psychology #RelationshipWisdom #DeepTalks
   - Add specific niche terms: #GenderDynamics #EmotionalIntelligence #SocialTrends #CulturalShift

---

### 🏷️ Hashtag Instructions:
${hashtagInstructions}

### Platform Generation:
${platformFilter || 'Generate captions for ALL THREE platforms: TikTok, Instagram, and YouTube Shorts.'}

**Tone Requirements:**
- Mirror the script tone (emotional, educational, assertive)
- Maintain philosophical depth and emotional intelligence
- Create curiosity and engagement
- Use keywords naturally for SEO optimization

**🚨 CRITICAL GENERATION RULES:**
1. **NO COPYING**: Never copy exact lines from input - extract themes and create fresh hooks
2. **PLATFORM VARIATION**: Each platform must have genuinely different hook approaches
3. **VIRAL FORMATS**: Rotate between contradiction, truth bomb, mirror, and paradox formats
4. **EMOTIONAL TESTING**: Every hook must trigger either curiosity, controversy, or emotional tension
5. **ALGORITHM OPTIMIZATION**: Structure for maximum engagement and debate-triggering

---

### Output Format:

${specificPlatform ? `
${specificPlatform.toUpperCase()} CAPTION:
[Generate the specific platform caption following the fresh hook generation structure above]
` : `
TIKTOK CAPTION:
[FRESH hook using viral format - DO NOT COPY INPUT LINES]

[Reflection building on hook tension - expand philosophical conflict]

[Hashtags - 8-12 optimized for viral engagement]

---

INSTAGRAM CAPTION:
[DIFFERENT fresh hook than TikTok - use different viral format]

[Reflection with new angle on theme - create curiosity gap]

[Hashtags - 8-12 optimized for discovery and engagement]

---

YOUTUBE CAPTION:
[FRESH title using viral question/controversy format - NOT input title]

[Summary expanding theme with psychological depth and keywords]

[CTA promising mindset transformation or revelation]

[Hashtags - up to 15 SEO and engagement-optimized tags]
`}

**🎯 GENERATION PROCESS:**
1. **Extract** the emotional/thematic essence from input (don't copy lines)
2. **Generate** fresh hooks using viral formats for each platform
3. **Ensure** each platform has genuinely different approaches and angles
4. **Test** that each hook triggers curiosity, controversy, or emotional response
5. **Optimize** for platform-specific algorithms and user behavior

**Analysis the content and generate the captions following the exact structures above.**`
}