import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X, Sparkles } from 'lucide-react';

const Toast = ({ message, type = 'success', duration = 5000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case 'error':
        return <AlertCircle className="h-6 w-6 text-red-600" />;
      case 'info':
        return <Info className="h-6 w-6 text-blue-600" />;
      default:
        return <CheckCircle className="h-6 w-6 text-green-600" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-gradient-to-r from-red-50 to-red-50 border-red-200 text-red-800';
      case 'info':
        return 'bg-gradient-to-r from-blue-50 to-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-800';
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`max-w-md w-full transform transition-all duration-300 ${
        isExiting ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
      }`}
    >
      <div className={`${getStyles()} backdrop-blur-sm rounded-xl shadow-card border p-4 animate-slide-up`}>
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm leading-relaxed">{message}</p>
          </div>
          <button
            onClick={() => {
              setIsExiting(true);
              setTimeout(() => {
                setIsVisible(false);
                onClose?.();
              }, 300);
            }}
            className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="mt-3 w-full bg-white/30 rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-current opacity-50 rounded-full transition-all duration-300"
            style={{
              width: isExiting ? '0%' : '100%',
              transition: `width ${duration}ms linear`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Toast;