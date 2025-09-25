import { Link, useLocation } from 'react-router-dom';
import { FileText, Upload, Search, Settings, Home, Sparkles } from 'lucide-react';

const Layout = ({ children }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Upload', href: '/upload', icon: Upload },
    { name: 'Status', href: '/status', icon: Search },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-xl border-b border-white/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 bg-accent-200/30 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-accent-400 to-purple-400 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-all duration-500 animate-pulse-slow"></div>
                <div className="relative p-3 bg-gradient-to-br from-primary-500 via-accent-500 to-purple-500 rounded-2xl shadow-glow">
                  <FileText className="h-10 w-10 text-white floating-element" />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="text-3xl font-bold gradient-text mb-1">Setu Docs</div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500 font-mono">LIVE</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-accent-400 animate-pulse" />
                    <span className="text-xs text-gray-500 font-medium">Premium</span>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center">
              <div className="hidden md:flex items-center bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-card border border-white/30">
                {navigation.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow transform scale-105'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white/80 hover:shadow-card transform hover:scale-105'
                      }`}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <Icon className={`h-4 w-4 ${isActive(item.href) ? 'animate-pulse' : ''}`} />
                      <span>{item.name}</span>
                      {isActive(item.href) && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-400 rounded-full animate-ping"></div>
                      )}
                    </Link>
                  );
                })}
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <div className="flex items-center gap-1 bg-white/60 backdrop-blur-sm rounded-xl p-2 shadow-card">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          isActive(item.href)
                            ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow'
                            : 'text-gray-600 hover:bg-white/80'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 pt-20 sm:pt-28">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="relative bg-gradient-to-r from-primary-900/90 to-accent-900/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-white/20 to-white/10 rounded-xl">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Setu Docs</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Transform your document workflow with beautiful, secure digital signing.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Technology</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind', 'Setu API', 'Vite'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-8 pt-8 text-center">
              <p className="text-gray-300">
                Powered by <span className="text-primary-300 font-semibold">Setu APIs</span> • 
                Built with <span className="text-accent-300 font-semibold">React & Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;