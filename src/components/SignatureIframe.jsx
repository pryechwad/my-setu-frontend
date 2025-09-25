import { useState } from 'react';
import { ExternalLink, Eye, EyeOff, Sparkles } from 'lucide-react';

const SignatureIframe = ({ signatureUrl, onComplete }) => {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setShowIframe(!showIframe)}
          className="btn-secondary inline-flex items-center gap-3 justify-center"
        >
          {showIframe ? (
            <>
              <EyeOff className="h-5 w-5" />
              Hide Signature Form
            </>
          ) : (
            <>
              <Eye className="h-5 w-5" />
              Show Signature Form
            </>
          )}
        </button>
        <a
          href={signatureUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-3 justify-center"
        >
          <ExternalLink className="h-5 w-5" />
          Open in New Tab
          <Sparkles className="h-4 w-4" />
        </a>
      </div>

      {showIframe && (
        <div className="card-gradient animate-scale-in">
          <div className="mb-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">📝 Embedded Signature Form</h4>
            <p className="text-gray-600">Complete your signature directly below:</p>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 shadow-inner">
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-3">
              <div className="flex items-center gap-2 text-white">
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <span className="ml-4 text-sm font-medium">Secure Signature Portal</span>
              </div>
            </div>
            <iframe
              src={signatureUrl}
              className="w-full h-96 border-0"
              title="Signature Form"
              onLoad={() => {
                // Listen for completion messages
                const handleMessage = (event) => {
                  if (event.data?.type === 'signature_complete' || 
                      event.data?.status === 'completed' ||
                      (typeof event.data === 'string' && event.data.includes('complete'))) {
                    onComplete?.();
                  }
                };
                window.addEventListener('message', handleMessage);
                return () => window.removeEventListener('message', handleMessage);
              }}
            />
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <div className="text-blue-600">💡</div>
              <div className="space-y-2 text-sm text-blue-800">
                <p><strong>Tips for signing:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>For full-screen experience, use "Open in New Tab"</li>
                  <li>Complete all required signature fields</li>
                  <li>You'll receive a notification when signing is complete</li>
                </ul>
              </div>
            </div>
            
            {/* Manual completion button for demo purposes */}
            <div className="mt-4 pt-3 border-t border-blue-200">
              <button
                onClick={() => {
                  if (window.confirm('Mark signature as completed? (Demo purposes only)')) {
                    onComplete?.();
                  }
                }}
                className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded-full transition-colors"
              >
                📝 Demo: Mark as Completed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignatureIframe;