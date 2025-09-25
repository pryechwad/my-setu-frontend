// SVG Illustrations for the website

export const DocumentIllustration = ({ className = "w-64 h-64" }) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background circle */}
    <circle cx="200" cy="200" r="180" fill="url(#gradient1)" opacity="0.1"/>
    
    {/* Document */}
    <rect x="120" y="80" width="160" height="200" rx="8" fill="white" stroke="url(#gradient2)" strokeWidth="2"/>
    
    {/* Document lines */}
    <line x1="140" y1="120" x2="240" y2="120" stroke="#E5E7EB" strokeWidth="2"/>
    <line x1="140" y1="140" x2="260" y2="140" stroke="#E5E7EB" strokeWidth="2"/>
    <line x1="140" y1="160" x2="220" y2="160" stroke="#E5E7EB" strokeWidth="2"/>
    
    {/* Signature area */}
    <rect x="140" y="200" width="120" height="40" rx="4" fill="url(#gradient3)" opacity="0.2"/>
    <path d="M150 220 Q170 210 190 220 Q210 230 230 220 Q250 210 250 220" stroke="url(#gradient2)" strokeWidth="3" fill="none"/>
    
    {/* Floating elements */}
    <circle cx="320" cy="120" r="8" fill="url(#gradient2)" opacity="0.6">
      <animate attributeName="cy" values="120;110;120" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="80" cy="180" r="6" fill="url(#gradient3)" opacity="0.6">
      <animate attributeName="cy" values="180;170;180" dur="2s" repeatCount="indefinite"/>
    </circle>
    
    {/* Checkmark */}
    <circle cx="300" cy="300" r="20" fill="url(#gradient4)"/>
    <path d="M290 300 L298 308 L310 292" stroke="white" strokeWidth="3" fill="none"/>
    
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6"/>
        <stop offset="100%" stopColor="#8B5CF6"/>
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9"/>
        <stop offset="100%" stopColor="#3B82F6"/>
      </linearGradient>
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D946EF"/>
        <stop offset="100%" stopColor="#8B5CF6"/>
      </linearGradient>
      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981"/>
        <stop offset="100%" stopColor="#059669"/>
      </linearGradient>
    </defs>
  </svg>
);

export const UploadIllustration = ({ className = "w-48 h-48" }) => (
  <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cloud */}
    <path d="M80 180 Q80 160 100 160 Q120 140 150 140 Q180 140 200 160 Q220 160 220 180 Q220 200 200 200 L100 200 Q80 200 80 180 Z" fill="url(#cloudGradient)"/>
    
    {/* Upload arrow */}
    <path d="M150 120 L150 180" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    <path d="M135 135 L150 120 L165 135" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
    
    {/* Floating documents */}
    <rect x="60" y="100" width="30" height="40" rx="4" fill="url(#docGradient1)" opacity="0.8">
      <animateTransform attributeName="transform" type="translate" values="0,0; 5,-5; 0,0" dur="2s" repeatCount="indefinite"/>
    </rect>
    <rect x="210" y="120" width="25" height="35" rx="3" fill="url(#docGradient2)" opacity="0.8">
      <animateTransform attributeName="transform" type="translate" values="0,0; -3,-3; 0,0" dur="2.5s" repeatCount="indefinite"/>
    </rect>
    
    {/* Progress dots */}
    <circle cx="120" cy="240" r="4" fill="url(#cloudGradient)">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="140" cy="240" r="4" fill="url(#cloudGradient)">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="160" cy="240" r="4" fill="url(#cloudGradient)">
      <animate attributeName="opacity" values="0.3;1;0.3" dur="1s" begin="0.4s" repeatCount="indefinite"/>
    </circle>
    
    <defs>
      <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6"/>
        <stop offset="100%" stopColor="#1D4ED8"/>
      </linearGradient>
      <linearGradient id="docGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B"/>
        <stop offset="100%" stopColor="#D97706"/>
      </linearGradient>
      <linearGradient id="docGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444"/>
        <stop offset="100%" stopColor="#DC2626"/>
      </linearGradient>
    </defs>
  </svg>
);

export const SecurityIllustration = ({ className = "w-48 h-48" }) => (
  <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield */}
    <path d="M150 50 Q120 60 120 90 L120 180 Q120 220 150 240 Q180 220 180 180 L180 90 Q180 60 150 50 Z" fill="url(#shieldGradient)"/>
    
    {/* Lock */}
    <rect x="135" y="130" width="30" height="25" rx="4" fill="white"/>
    <path d="M140 130 Q140 120 150 120 Q160 120 160 130" stroke="white" strokeWidth="3" fill="none"/>
    <circle cx="150" cy="142" r="3" fill="url(#shieldGradient)"/>
    
    {/* Floating security elements */}
    <circle cx="100" cy="100" r="8" fill="url(#securityGradient1)" opacity="0.7">
      <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="120" r="6" fill="url(#securityGradient2)" opacity="0.7">
      <animate attributeName="r" values="6;10;6" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    
    {/* Binary code effect */}
    <text x="80" y="200" fill="url(#binaryGradient)" fontSize="12" fontFamily="monospace" opacity="0.5">101010</text>
    <text x="180" y="220" fill="url(#binaryGradient)" fontSize="10" fontFamily="monospace" opacity="0.5">110011</text>
    
    <defs>
      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981"/>
        <stop offset="100%" stopColor="#059669"/>
      </linearGradient>
      <linearGradient id="securityGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6"/>
        <stop offset="100%" stopColor="#1E40AF"/>
      </linearGradient>
      <linearGradient id="securityGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6"/>
        <stop offset="100%" stopColor="#7C3AED"/>
      </linearGradient>
      <linearGradient id="binaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6B7280"/>
        <stop offset="100%" stopColor="#4B5563"/>
      </linearGradient>
    </defs>
  </svg>
);

export const TrackingIllustration = ({ className = "w-48 h-48" }) => (
  <svg className={className} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Dashboard */}
    <rect x="50" y="80" width="200" height="140" rx="12" fill="white" stroke="url(#dashboardGradient)" strokeWidth="2"/>
    
    {/* Progress bars */}
    <rect x="70" y="110" width="160" height="8" rx="4" fill="#E5E7EB"/>
    <rect x="70" y="110" width="120" height="8" rx="4" fill="url(#progressGradient)">
      <animate attributeName="width" values="40;120;40" dur="3s" repeatCount="indefinite"/>
    </rect>
    
    <rect x="70" y="130" width="160" height="8" rx="4" fill="#E5E7EB"/>
    <rect x="70" y="130" width="80" height="8" rx="4" fill="url(#progressGradient2)"/>
    
    {/* Status indicators */}
    <circle cx="80" cy="160" r="6" fill="url(#statusGreen)">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="120" cy="160" r="6" fill="url(#statusBlue)">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="160" cy="160" r="6" fill="url(#statusPurple)">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1s" repeatCount="indefinite"/>
    </circle>
    
    {/* Notification bell */}
    <path d="M200 60 Q190 50 180 60 L180 70 Q180 80 190 80 L210 80 Q220 80 220 70 L220 60 Q210 50 200 60 Z" fill="url(#bellGradient)"/>
    <circle cx="215" cy="55" r="4" fill="#EF4444">
      <animate attributeName="r" values="4;6;4" dur="1s" repeatCount="indefinite"/>
    </circle>
    
    <defs>
      <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6"/>
        <stop offset="100%" stopColor="#8B5CF6"/>
      </linearGradient>
      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981"/>
        <stop offset="100%" stopColor="#059669"/>
      </linearGradient>
      <linearGradient id="progressGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F59E0B"/>
        <stop offset="100%" stopColor="#D97706"/>
      </linearGradient>
      <linearGradient id="statusGreen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981"/>
        <stop offset="100%" stopColor="#059669"/>
      </linearGradient>
      <linearGradient id="statusBlue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6"/>
        <stop offset="100%" stopColor="#1D4ED8"/>
      </linearGradient>
      <linearGradient id="statusPurple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6"/>
        <stop offset="100%" stopColor="#7C3AED"/>
      </linearGradient>
      <linearGradient id="bellGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B"/>
        <stop offset="100%" stopColor="#D97706"/>
      </linearGradient>
    </defs>
  </svg>
);

export const HeroIllustration = ({ className = "w-96 h-96" }) => (
  <svg className={className} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background elements */}
    <circle cx="250" cy="250" r="200" fill="url(#heroGradient1)" opacity="0.1"/>
    <circle cx="250" cy="250" r="150" fill="url(#heroGradient2)" opacity="0.1"/>
    
    {/* Main document */}
    <rect x="180" y="150" width="140" height="180" rx="12" fill="white" stroke="url(#heroGradient3)" strokeWidth="3"/>
    
    {/* Document content */}
    <line x1="200" y1="180" x2="280" y2="180" stroke="#E5E7EB" strokeWidth="2"/>
    <line x1="200" y1="200" x2="300" y2="200" stroke="#E5E7EB" strokeWidth="2"/>
    <line x1="200" y1="220" x2="260" y2="220" stroke="#E5E7EB" strokeWidth="2"/>
    
    {/* Signature area with handwritten effect */}
    <rect x="200" y="260" width="100" height="30" rx="6" fill="url(#signatureGradient)" opacity="0.2"/>
    <path d="M210 275 Q230 265 250 275 Q270 285 290 275" stroke="url(#heroGradient3)" strokeWidth="3" fill="none" strokeDasharray="2,2">
      <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite"/>
    </path>
    
    {/* Floating elements */}
    <g>
      <circle cx="120" cy="180" r="12" fill="url(#floatingGradient1)" opacity="0.8">
        <animateTransform attributeName="transform" type="translate" values="0,0; 10,-10; 0,0" dur="4s" repeatCount="indefinite"/>
      </circle>
      <path d="M115 175 L120 180 L125 175" stroke="white" strokeWidth="2" fill="none"/>
    </g>
    
    <g>
      <circle cx="380" cy="220" r="10" fill="url(#floatingGradient2)" opacity="0.8">
        <animateTransform attributeName="transform" type="translate" values="0,0; -8,-8; 0,0" dur="3s" repeatCount="indefinite"/>
      </circle>
      <rect x="376" y="216" width="8" height="8" fill="white" rx="1"/>
    </g>
    
    {/* Success checkmark */}
    <circle cx="350" cy="320" r="25" fill="url(#successGradient)">
      <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite"/>
    </circle>
    <path d="M340 320 L348 328 L360 310" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round"/>
    
    {/* Sparkles */}
    <g opacity="0.7">
      <path d="M150 120 L155 130 L165 125 L155 135 L150 145 L145 135 L135 125 L145 130 Z" fill="url(#sparkleGradient)">
        <animateTransform attributeName="transform" type="rotate" values="0 150 130;360 150 130" dur="8s" repeatCount="indefinite"/>
      </path>
    </g>
    
    <g opacity="0.6">
      <path d="M350 100 L353 107 L360 104 L353 111 L350 118 L347 111 L340 104 L347 107 Z" fill="url(#sparkleGradient2)">
        <animateTransform attributeName="transform" type="rotate" values="0 350 109;-360 350 109" dur="6s" repeatCount="indefinite"/>
      </path>
    </g>
    
    <defs>
      <linearGradient id="heroGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6"/>
        <stop offset="100%" stopColor="#8B5CF6"/>
      </linearGradient>
      <linearGradient id="heroGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D946EF"/>
        <stop offset="100%" stopColor="#8B5CF6"/>
      </linearGradient>
      <linearGradient id="heroGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0EA5E9"/>
        <stop offset="100%" stopColor="#3B82F6"/>
      </linearGradient>
      <linearGradient id="signatureGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6"/>
        <stop offset="100%" stopColor="#D946EF"/>
      </linearGradient>
      <linearGradient id="floatingGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B"/>
        <stop offset="100%" stopColor="#D97706"/>
      </linearGradient>
      <linearGradient id="floatingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444"/>
        <stop offset="100%" stopColor="#DC2626"/>
      </linearGradient>
      <linearGradient id="successGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981"/>
        <stop offset="100%" stopColor="#059669"/>
      </linearGradient>
      <linearGradient id="sparkleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24"/>
        <stop offset="100%" stopColor="#F59E0B"/>
      </linearGradient>
      <linearGradient id="sparkleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA"/>
        <stop offset="100%" stopColor="#8B5CF6"/>
      </linearGradient>
    </defs>
  </svg>
);