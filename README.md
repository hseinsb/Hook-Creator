# Soul-Hook Generator 🔥

## Hussein Sbeiti's Viral Video Assistant

Transform your topics into emotionally magnetic YouTube and TikTok hooks using the **Soul-Hook Hybrid™** methodology. Built for content that stops the scroll and transforms minds.

![Soul-Hook Generator](https://img.shields.io/badge/Build-Soul--Hook%20Hybrid-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-teal?style=for-the-badge)

## ✨ Features

- **🎬 YouTube Hooks** - Cinematic pacing, philosophical build-up, layered emotional intelligence (25-30s)
- **📱 TikTok Hooks** - Completely separate scroll-stopping traps, immediate contradiction/shock (6-8s)  
- **🔗 Enhanced Bridge System** - Auto-selects optimal transition based on content analysis:
  - **Quote** (Default): Timeless wisdom from Psychology → Philosophy → Spirituality → Modern thinkers
  - **Statistic**: Striking data for analytical/social topics
  - **Personal Story**: Placeholder for emotional/reflective content
  - **Credential**: Placeholder for educational/instructional content
- **🎯 Viral Titles** - SEO-optimized but emotionally driven
- **📋 One-Click Copy** - Copy any section instantly
- **🎭 Two Distinct Formats** - Different styles and pacing for different platforms

## 🧠 The Soul-Hook Hybrid Method

Based on Alex Hormozi's hook psychology but adapted for philosophical, spiritual, and moral content. Every hook contains:

1. **Tension** - Breaks common beliefs or expectations
2. **Taboo Truth** - Says what people feel but won't admit  
3. **Open Loop** - Leaves questions unanswered to drive retention

### Core Philosophy
> "Truth comes from emotional maturity, spiritual sincerity, and moral responsibility — not just intellect or success."

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- OpenAI API Key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd hook-creator
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to \`http://localhost:3000\`

### Usage

1. **Enter your content** - Topic, script, or paragraph
2. **Add your OpenAI API key** - Click "Show API Key" 
3. **Generate hooks** - Click "Generate Soul Hooks"
4. **Copy and use** - Click copy icons to grab any section

## 🎭 Hook Examples

### Input: "Why Religious Couples Still Get Divorced"

**YouTube Hook (Cinematic Pacing):**
\`\`\`
She wore hijab.
He prayed five times a day.
They were kind, polite, God-fearing.
So why did their marriage fall apart?
Because religiosity isn't the same as readiness.
\`\`\`

**TikTok Hook (Scroll-Stopping Trap):**
\`\`\`
They were religious... and still divorced.
Maybe faith can't fix what the heart won't heal.
\`\`\`

**Bridge (Quote - Auto-Selected):**
\`\`\`
"The chains of habit are too light to be felt until they're too heavy to break."
This is why good intentions aren't enough.
\`\`\`

### Format Differences

| YouTube Hook | TikTok Hook |
| --- | --- |
| **Cinematic pacing** - philosophical build-up | **Immediate shock** - straight to contradiction |
| **Layered emotional intelligence** - reflective | **Blunt and raw** - scroll-stopping trap |
| **Multiple lines** building tension slowly | **1-2 sentences** maximum impact |

## 🌉 Enhanced Bridge System

The bridge serves as a transitional connection after hooks, grounding viewers emotionally and intellectually before the main content.

### Auto-Selection Logic
- **Quote** (Default): For philosophical, moral, spiritual themes
- **Statistic**: For analytical, social, data-driven topics  
- **Personal Story**: For emotional, reflective, personal content
- **Credential**: For educational, instructional, authority-based content

### Quote Sources (Priority Order)
1. **Psychology** - Jung, Viktor Frankl, modern psychology
2. **Philosophy** - Nietzsche, Seneca, Marcus Aurelius, Stoics
3. **Morality/Spirituality** - Ghazali, Ali, Buddha, Rumi, universal wisdom
4. **Modern Thinkers** - Naval Ravikant, James Clear, contemporary insights

### Bridge Requirements
- Feels like "soft landing" after hook tension
- Maintains thematic consistency with hook's emotional core
- 1-2 lines maximum, poetic and meaningful
- Grounds viewer for transition to main content

## 🏗️ Project Structure

\`\`\`
src/
├── components/
│   ├── Header.jsx          # App header with branding
│   └── HookGenerator.jsx   # Main generator component
├── utils/
│   ├── promptSystem.js     # Complete prompt engineering
│   └── openai.js          # API integration & parsing
├── App.jsx                # Root component
├── main.jsx              # React entry point
└── index.css             # Global styles + Tailwind
\`\`\`

## 🔧 Technical Details

### Stack
- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS
- **AI**: OpenAI GPT-4o
- **Icons**: Lucide React

### Bridge Auto-Selection Logic
- **Personal Story** → When input contains personal experience keywords
- **Credential** → Authority/business/results topics  
- **Quote** → Moral, spiritual, philosophical content (default)
- **Statistic** → Data-driven topics with numbers/research

### Security Notes
- API keys are handled client-side for this demo
- For production: Use backend proxy to secure API calls
- Never commit API keys to version control

## 🎯 Brand Pillars

The generator is tuned for Hussein Sbeiti's content themes:
- **Masculinity** - Modern manhood and responsibility
- **Morality** - Ethical decision-making
- **Marriage** - Relationships and emotional maturity  
- **Mindset** - Mental frameworks and growth
- **Money** - Financial wisdom and responsibility
- **Philosophy** - Life's deeper questions
- **Islam** - Spiritual guidance and faith

## 📋 Scripts

\`\`\`bash
npm run dev      # Start development server
npm run build    # Build for production  
npm run preview  # Preview production build
npm run lint     # Run ESLint
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔮 Future Enhancements

- [ ] Backend API for secure key storage
- [ ] User accounts and hook history
- [ ] Custom brand voice training
- [ ] A/B testing for hook performance
- [ ] Integration with YouTube/TikTok analytics
- [ ] Team collaboration features

---

**Built with ❤️ for creators who transform minds through content.**