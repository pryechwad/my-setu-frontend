import { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, Sparkles, Zap, ExternalLink } from 'lucide-react';
import FileUploader from '../components/FileUploader';
import ProgressBar from '../components/ProgressBar';
import SignatureIframe from '../components/SignatureIframe';
import { DocumentIllustration } from '../components/Illustrations';
import { uploadDocument, initiateSignature } from '../api/setuApi';
import { hasCredentials } from '../utils/localStorageHelpers';

const UploadPage = ({ toastActions }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleUpload = async () => {
    if (!file) return;
    
    if (!hasCredentials()) {
      setError('Please configure your API credentials in Settings first.');
      return;
    }

    setUploading(true);
    setError('');
    setProgress(0);

    try {
      // Step 1: Upload document
      setProgress(25);
      const uploadResult = await uploadDocument(file);
      
      // Step 2: Initiate signature
      setProgress(75);
      const signatureResult = await initiateSignature(uploadResult.documentId);
      
      setProgress(100);
      setResult({
        documentId: uploadResult.documentId,
        signatureId: signatureResult.signatureId,
        signatureUrl: signatureResult.signatureUrl,
        status: signatureResult.status,
      });
      
      // Show success toast
      toastActions?.showSuccess(
        '🎉 Document uploaded successfully! Your signature request has been initiated.',
        6000
      );
    } catch (err) {
      setError(err.message);
      toastActions?.showError(
        `❌ Upload failed: ${err.message}`,
        8000
      );
    } finally {
      setUploading(false);
    }
  };

  const handleSignatureComplete = () => {
    toastActions?.showSuccess(
      '✅ Signature completed successfully! You can now download your signed document.',
      8000
    );
    
    // Update the result status if needed
    if (result) {
      setResult(prev => ({ ...prev, status: 'completed' }));
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <DocumentIllustration className="w-48 h-48 floating-element" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Upload & Sign Documents
        </h1>
        <p className="text-2xl font-handwritten text-primary-600 mb-2 transform rotate-1">
          "Your digital signature journey starts here!"
        </p>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your contracts into digitally signed documents in seconds
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8">
        {/* Upload Section */}
        <div className="card-gradient">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg">
              <FileText className="h-6 w-6 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Select Your Document</h2>
          </div>
          
          <FileUploader onFileSelect={setFile} />
          
          {file && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3"
              >
                {uploading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Processing Magic...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    Upload & Request Signature
                    <Zap className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Progress Section */}
        {uploading && (
          <div className="card-gradient animate-scale-in">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Processing Your Document</h3>
            </div>
            
            <ProgressBar progress={progress} animated={true} />
            
            <div className="mt-4 text-center">
              <p className="text-lg font-medium text-gray-700">
                {progress < 25 ? '🚀 Preparing for liftoff...' :
                 progress < 75 ? '📤 Uploading to the cloud...' :
                 progress < 100 ? '✨ Creating signature magic...' : '🎉 Ready to sign!'}
              </p>
            </div>
          </div>
        )}

        {/* Error Section */}
        {error && (
          <div className="card-gradient border-red-200 bg-gradient-to-br from-red-50 to-red-50 animate-scale-in">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 rounded-full">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-red-900 mb-2">Oops! Something went wrong</h3>
                <p className="text-red-700 text-lg">{error}</p>
                <button
                  onClick={() => setError('')}
                  className="mt-4 btn-secondary text-sm"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Section */}
        {result && (
          <div className="card-gradient border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 animate-scale-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-green-100 rounded-full">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">🎉 Upload Successful!</h3>
                <p className="text-green-700 text-lg">Your document is ready for signing</p>
              </div>
            </div>

            {/* Document Details */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Document Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Document ID</label>
                  <p className="font-mono text-sm bg-gray-100 p-2 rounded-lg">{result.documentId}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Signature ID</label>
                  <p className="font-mono text-sm bg-gray-100 p-2 rounded-lg">{result.signatureId}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Status</label>
                  <span className="status-badge status-pending">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    {result.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Signature Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-accent-100 to-accent-200 rounded-lg">
                  <FileText className="h-6 w-6 text-accent-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Ready to Sign</h4>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
                <p className="text-gray-700 mb-6">
                  Your document is now ready for digital signature. Choose how you'd like to proceed:
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <a
                    href={result.signatureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 justify-center"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Open in New Tab
                  </a>
                  <button
                    onClick={() => document.getElementById('signature-iframe').scrollIntoView({ behavior: 'smooth' })}
                    className="btn-secondary inline-flex items-center gap-2 justify-center"
                  >
                    <FileText className="h-5 w-5" />
                    Sign Here
                  </button>
                </div>
                
                <div id="signature-iframe">
                  <SignatureIframe
                    signatureUrl={result.signatureUrl}
                    onComplete={handleSignatureComplete}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;