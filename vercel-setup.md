# Vercel Deployment Setup

## Environment Variable Configuration

To pre-configure the OpenAI API key for all users, add this environment variable in Vercel:

### Variable Name:
```
VITE_OPENAI_API_KEY
```

### Variable Value:
```
your_openai_api_key_here
```

## Steps for Vercel:

1. **Deploy your project** to Vercel (connect GitHub repo)
2. **Go to project settings** in Vercel dashboard
3. **Navigate to "Environment Variables"** section
4. **Add new variable:**
   - Name: `VITE_OPENAI_API_KEY`
   - Value: `your_openai_api_key_here`
   - Environment: All (Production, Preview, Development)
5. **Redeploy** the project

## Local Development:

Create a `.env.local` file in your project root:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

## What This Does:

✅ **Pre-fills the API key** automatically  
✅ **Hides the API key input** from users  
✅ **Shows "API key configured" message**  
✅ **Users can start generating immediately**  
✅ **No manual API key entry required**
✅ **Enhanced bridge system** with auto-selection
✅ **Timeless quote generation** from curated sources

The app will automatically detect the environment variable and use it instead of requiring user input.

## Enhanced Features:

**Bridge System**: Automatically selects optimal bridge type (Quote/Stat/Story/Credential) based on content analysis.

**Quote Sources**: Prioritizes Psychology → Philosophy → Spirituality → Modern thinkers for maximum emotional resonance.

**Smart Detection**: Analyzes theme, tone, and style to provide the most appropriate transitional content.