import { Link } from 'react-router-dom';
import { FileText, Upload, Search, Settings, ArrowRight, Sparkles, Shield, Zap, CheckCircle, Key, Database } from 'lucide-react';
import { HeroIllustration, DocumentIllustration, UploadIllustration, SecurityIllustration, TrackingIllustration } from '../components/Illustrations';

const LandingPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-200/40 to-accent-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-accent-200/40 to-purple-200/40 rounded-full mix-blend-multiply filter blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-200/40 to-pink-200/40 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
        
        {/* Creative floating elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent-400 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '5s'}}></div>
        
        {/* Creative geometric shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-primary-300 rotate-45 animate-pulse opacity-30"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 border-2 border-accent-300 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-1/2 right-16 w-8 h-8 bg-gradient-to-r from-purple-300 to-pink-300 transform rotate-12 animate-pulse opacity-50"></div>
        
        {/* Decorative lines */}
        <div className="absolute top-40 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-accent-300 to-transparent opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative text-center py-12 sm:py-16 lg:py-20 w-full">
          {/* Main Heading */}
          <div className="mb-12 relative">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100/80 to-accent-100/80 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-700 mb-8 animate-fade-in relative">
              <span className="relative z-10">🚀 The Future of Document Signing</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-200/50 to-accent-200/50 rounded-full blur-sm animate-pulse"></div>
            </div>
            
            {/* Decorative elements around heading */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -top-2 -right-6 w-1.5 h-1.5 bg-accent-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute -bottom-6 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-blinkit font-bold mb-8 animate-slide-up leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-purple-600 bg-clip-text text-transparent">
                Digital Document Revolution
              </span>
            </h1>
          </div>
          
          {/* Description */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-fade-in relative px-4 sm:px-0">
            {/* Handwritten quote with creative styling */}
            <div className="relative mb-12">
              <div className="absolute -top-4 -left-8 text-6xl text-primary-200 font-serif">“</div>
              <div className="absolute -bottom-8 -right-8 text-6xl text-accent-200 font-serif">”</div>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 font-handwritten leading-relaxed transform rotate-1 relative z-10 text-center px-4 sm:px-8 lg:px-12">
                Transform your document workflow with stunning, secure digital signing.
              </p>
              {/* Decorative underline */}
              <div className="mt-4 flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent rounded-full"></div>
              </div>
            </div>
            
            {/* Creative feature badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="group">
                <div className="relative p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl border border-primary-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="font-bold text-primary-800 mb-2">Bank-Level Security</h3>
                  <p className="text-sm text-primary-600 font-handwritten transform -rotate-1">"Your docs are safe with us!"</p>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative p-6 bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl border border-accent-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2" style={{animationDelay: '0.2s'}}>
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-bold text-accent-800 mb-2">Lightning Speed</h3>
                  <p className="text-sm text-accent-600 font-handwritten transform rotate-1">"Faster than you can blink!"</p>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2" style={{animationDelay: '0.4s'}}>
                  <div className="text-4xl mb-3">✨</div>
                  <h3 className="font-bold text-purple-800 mb-2">Beautiful Design</h3>
                  <p className="text-sm text-purple-600 font-handwritten transform -rotate-1">"Pretty & powerful!"</p>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Creative CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-8 sm:mb-12 lg:mb-16 animate-slide-up px-4 sm:px-0">
            <div className="relative group">
              {/* Decorative elements around primary button */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-primary-300 rounded-full animate-ping opacity-30"></div>
              <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-accent-400 rounded-full animate-bounce opacity-60"></div>
              
              <Link
                to="/upload"
                className="group relative btn-primary text-xl px-12 py-5 inline-flex items-center gap-4 shadow-glow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Sparkles className="h-6 w-6 group-hover:animate-spin relative z-10" />
                <span className="relative z-10 font-semibold">Start Your Journey</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform relative z-10" />
                
                {/* Floating sparkles */}
                <div className="absolute -top-1 left-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
                <div className="absolute -bottom-1 right-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity" style={{animationDelay: '0.2s'}}></div>
              </Link>
            </div>
            
            <div className="relative group">
              {/* Handwritten note */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <p className="text-sm font-handwritten text-gray-500 transform -rotate-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  "Super quick!"
                </p>
              </div>
              
              <Link
                to="/settings"
                className="btn-secondary text-xl px-12 py-5 inline-flex items-center gap-4 group relative overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <Settings className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500 relative z-10" />
                <span className="relative z-10 font-semibold">Quick Setup</span>
                <div className="relative z-10 flex items-center gap-2">
                  <span className="text-xs bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-3 py-1 rounded-full font-bold animate-pulse">2 min</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Creative Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            <div className="text-center group relative">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
                <div className="relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-white shadow-lg">
                  <Shield className="h-10 w-10 text-primary-600 group-hover:animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-500 rounded-full animate-bounce opacity-60"></div>
              </div>
              <div className="text-sm font-bold text-gray-800 mb-1">Enterprise Security</div>
              <div className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded-full">256-bit SSL</div>
              <p className="text-xs font-handwritten text-primary-600 mt-2 transform rotate-2 opacity-0 group-hover:opacity-100 transition-opacity">
                "Fort Knox level!"
              </p>
            </div>
            
            <div className="text-center group relative">
              <div className="relative">
                <div className="absolute inset-0 bg-accent-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 border-2 border-white shadow-lg">
                  <Zap className="h-10 w-10 text-accent-600 group-hover:animate-bounce" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-500 rounded-full animate-ping opacity-60"></div>
              </div>
              <div className="text-sm font-bold text-gray-800 mb-1">Lightning Fast</div>
              <div className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded-full">&lt; 30 seconds</div>
              <p className="text-xs font-handwritten text-accent-600 mt-2 transform -rotate-2 opacity-0 group-hover:opacity-100 transition-opacity">
                "Zoom zoom!"
              </p>
            </div>
            
            <div className="text-center group relative">
              <div className="relative">
                <div className="absolute inset-0 bg-green-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-white shadow-lg">
                  <CheckCircle className="h-10 w-10 text-green-600 group-hover:animate-pulse" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.3s'}}></div>
              </div>
              <div className="text-sm font-bold text-gray-800 mb-1">99.9% Uptime</div>
              <div className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded-full">Always On</div>
              <p className="text-xs font-handwritten text-green-600 mt-2 transform rotate-1 opacity-0 group-hover:opacity-100 transition-opacity">
                "Never sleeps!"
              </p>
            </div>
            
            <div className="text-center group relative">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" style={{animationDelay: '1.5s'}}></div>
                <div className="relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 border-2 border-white shadow-lg">
                  <Sparkles className="h-10 w-10 text-purple-600 floating-element group-hover:animate-spin" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-60" style={{animationDelay: '0.7s'}}></div>
              </div>
              <div className="text-sm font-bold text-gray-800 mb-1">Smart UI</div>
              <div className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded-full">Intuitive</div>
              <p className="text-xs font-handwritten text-purple-600 mt-2 transform -rotate-1 opacity-0 group-hover:opacity-100 transition-opacity">
                "So pretty!"
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-primary-50/50 to-accent-50/50 rounded-2xl sm:rounded-3xl mb-12 sm:mb-16 lg:mb-20 mx-4 sm:mx-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center px-4 sm:px-0">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold gradient-text">99.9%</div>
            <div className="text-sm md:text-base text-gray-600 font-medium">Uptime Guarantee</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold gradient-text">256-bit</div>
            <div className="text-sm md:text-base text-gray-600 font-medium">SSL Encryption</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold gradient-text">&lt;30s</div>
            <div className="text-sm md:text-base text-gray-600 font-medium">Average Processing</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold gradient-text">24/7</div>
            <div className="text-sm md:text-base text-gray-600 font-medium">API Availability</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-0">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our Platform?
          </h2>
          <div className="mb-6">
            <p className="text-2xl font-handwritten text-accent-600 mb-2 transform rotate-1">
              "Because we make it beautiful & secure!"
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Experience the future of document signing with cutting-edge features
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="feature-card text-center group">
            <div className="flex justify-center mb-6">
              <UploadIllustration className="w-32 h-32 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Upload</h3>
            <div className="mb-4">
              <p className="text-lg font-script text-primary-600 mb-2 transform -rotate-1">"Drag, drop & magic happens!"</p>
              <p className="text-gray-600 leading-relaxed">
                Intelligent validation and instant processing with beautiful progress tracking.
              </p>
            </div>
            <div className="text-sm text-gray-500 mb-6 space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="font-mono">Auto validation & optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="font-mono">PDF support up to 10MB</span>
              </div>
            </div>
            <Link to="/upload" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 group">
              Try Upload
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="feature-card text-center group">
            <div className="flex justify-center mb-6">
              <SecurityIllustration className="w-32 h-32 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Signing</h3>
            <div className="mb-4">
              <p className="text-lg font-script text-emerald-600 mb-2 transform rotate-1">"Bank-level security meets beauty!"</p>
              <p className="text-gray-600 leading-relaxed">
                Advanced encryption with intuitive UX. Sign with confidence using embedded or external flows.
              </p>
            </div>
            <div className="text-sm text-gray-500 mb-6 space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="font-mono">Legal digital signatures</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="font-mono">Multi-signer support</span>
              </div>
            </div>
            <Link to="/status" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 group">
              View Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="feature-card text-center group">
            <div className="flex justify-center mb-6">
              <TrackingIllustration className="w-32 h-32 group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Tracking</h3>
            <div className="mb-4">
              <p className="text-lg font-script text-purple-600 mb-2 transform -rotate-1">"Never wonder about status again!"</p>
              <p className="text-gray-600 leading-relaxed">
                Live updates, instant notifications, and seamless download when complete.
              </p>
            </div>
            <div className="text-sm text-gray-500 mb-6 space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="font-mono">Auto-polling updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="font-mono">Instant notifications</span>
              </div>
            </div>
            <Link to="/status" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 group">
              Track Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-accent-50/50 rounded-3xl"></div>
        <div className="relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl font-script text-accent-600 transform -rotate-1">
              "Simple as 1, 2, 3, 4!"
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: 1, title: 'Configure API', desc: 'Set up your Setu credentials securely', icon: Settings, color: 'from-blue-500 to-blue-600' },
              { step: 2, title: 'Upload Document', desc: 'Drag & drop your PDF contract', icon: Upload, color: 'from-emerald-500 to-emerald-600' },
              { step: 3, title: 'Get Signed', desc: 'Share signing URL or use embedded form', icon: FileText, color: 'from-purple-500 to-purple-600' },
              { step: 4, title: 'Download', desc: 'Get your completed signed document', icon: Search, color: 'from-pink-500 to-pink-600' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${item.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-glow group-hover:scale-110 transition-all duration-300`}>
                      {item.step}
                    </div>
                    <div className="absolute -top-2 -right-2">
                      <div className={`p-2 bg-gradient-to-r ${item.color} rounded-full shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-0">
        <div className="hero-card text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10"></div>
          <div className="relative">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-sm font-semibold text-primary-700 mb-4">
                🚀 Ready to Launch?
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your 
              <span className="gradient-text font-serif italic">Document Workflow</span>
            </h2>
            <div className="mb-8">
              <p className="text-2xl md:text-3xl font-handwritten text-primary-600 mb-4 transform rotate-1">
                "Join the digital revolution!"
              </p>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                <span className="font-bold text-primary-600">10,000+</span> businesses are already streamlining their document signing process.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/settings" className="btn-secondary text-lg px-10 py-5 inline-flex items-center gap-3">
                <Settings className="h-6 w-6" />
                Configure API
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full ml-2">2 min</span>
              </Link>
              <Link to="/upload" className="btn-accent text-lg px-10 py-5 inline-flex items-center gap-3 shadow-glow-lg">
                <Sparkles className="h-6 w-6" />
                Start Signing Now
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p className="font-mono">
                ✓ No credit card required • ✓ Free sandbox access • ✓ Full API documentation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;