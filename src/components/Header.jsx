import { Zap, Video, Users } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary-500 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Soul-Hook Generator
              </h1>
              <p className="text-slate-600 text-sm">
                Hussein Sbeiti's Viral Video Assistant
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <Video className="h-4 w-4" />
              <span>YouTube + TikTok Hooks</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Soul-Hook Hybrid™</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header