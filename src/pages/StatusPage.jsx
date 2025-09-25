import { useState,} from 'react';
import { Search, Download, RefreshCw, CheckCircle, Clock, AlertCircle, Sparkles, Zap, FileText } from 'lucide-react';
import { TrackingIllustration } from '../components/Illustrations';
import { getSignatureStatus, downloadSignedDocument } from '../api/setuApi';
import { hasCredentials } from '../utils/localStorageHelpers';

const StatusPage = ({ toastActions }) => {
  const [signatureId, setSignatureId] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [polling, setPolling] = useState(false);

  const checkStatus = async () => {
    if (!signatureId.trim()) return;
    
    if (!hasCredentials()) {
      setError('Please configure your API credentials in Settings first.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await getSignatureStatus(signatureId);
      setStatus(result);
      
      // Show status-specific toast
      if (result.status === 'completed') {
        toastActions?.showSuccess(
          '✅ Document signing completed! Ready for download.',
          6000
        );
      } else if (result.status === 'pending') {
        toastActions?.showInfo(
          '⏳ Document is still pending signature.',
          4000
        );
      } else if (result.status === 'failed') {
        toastActions?.showError(
          '❌ Document signing failed. Please try again.',
          6000
        );
      }
    } catch (err) {
      setError(err.message);
      toastActions?.showError(
        `❌ Failed to check status: ${err.message}`,
        6000
      );
    } finally {
      setLoading(false);
    }
  };

  const startPolling = () => {
    setPolling(true);
    const interval = setInterval(async () => {
      try {
        const result = await getSignatureStatus(signatureId);
        setStatus(result);
        
        if (result.status === 'completed' || result.status === 'failed') {
          setPolling(false);
          clearInterval(interval);
          
          if (result.status === 'completed') {
            toastActions?.showSuccess(
              '🎉 Great news! Your document has been signed and is ready for download!',
              8000
            );
          }
        }
      } catch (err) {
        setError(err.message);
        setPolling(false);
        clearInterval(interval);
        toastActions?.showError(
          `❌ Polling error: ${err.message}`,
          5000
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  };

  const handleDownload = async () => {
    if (!status?.documentId) return;

    try {
      const blob = await downloadSignedDocument(status.documentId);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `signed-document-${status.documentId}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toastActions?.showSuccess(
        '📥 Signed document downloaded successfully!',
        5000
      );
    } catch (err) {
      setError(`Download failed: ${err.message}`);
      toastActions?.showError(
        `❌ Download failed: ${err.message}`,
        6000
      );
    }
  };

  const getStatusIcon = (statusValue) => {
    switch (statusValue) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case 'pending':
        return <Clock className="h-6 w-6 text-yellow-600 animate-pulse" />;
      case 'failed':
        return <AlertCircle className="h-6 w-6 text-red-600" />;
      default:
        return <Clock className="h-6 w-6 text-gray-600" />;
    }
  };

  const getStatusStyle = (statusValue) => {
    switch (statusValue) {
      case 'completed':
        return 'status-completed';
      case 'pending':
        return 'status-pending';
      case 'failed':
        return 'status-failed';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getStatusMessage = (statusValue) => {
    switch (statusValue) {
      case 'completed':
        return '🎉 Document has been signed successfully!';
      case 'pending':
        return '⏳ Waiting for signature completion...';
      case 'failed':
        return '❌ Signature process failed';
      default:
        return 'Unknown status';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <TrackingIllustration className="w-48 h-48 floating-element" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Track Your Documents
        </h1>
        <p className="text-2xl font-handwritten text-purple-600 mb-2 transform -rotate-1">
          "Stay updated with real-time tracking!"
        </p>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Monitor signature status and download completed documents in real-time
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8">
        {/* Search Section */}
        <div className="card-gradient">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg">
              <Search className="h-6 w-6 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Find Your Document</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={signatureId}
                onChange={(e) => setSignatureId(e.target.value)}
                placeholder="Enter signature request ID"
                className="input-field text-lg"
              />
            </div>
            <button
              onClick={checkStatus}
              disabled={loading || !signatureId.trim()}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3 px-8"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Searching...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  Check Status
                </>
              )}
            </button>
          </div>
        </div>

        {/* Error Section */}
        {error && (
          <div className="card-gradient border-error-200 bg-gradient-to-br from-error-50 to-red-50 animate-scale-in">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-error-100 rounded-full">
                <AlertCircle className="h-8 w-8 text-error-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-error-900 mb-2">Something went wrong</h3>
                <p className="text-error-700 text-lg">{error}</p>
                <button
                  onClick={() => setError('')}
                  className="mt-4 btn-secondary text-sm"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Status Section */}
        {status && (
          <div className="card-gradient animate-scale-in">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Document Status</h3>
              </div>
              
              <div className="flex gap-3">
                {status.status !== 'completed' && status.status !== 'failed' && (
                  <button
                    onClick={polling ? () => setPolling(false) : startPolling}
                    className={`btn-secondary inline-flex items-center gap-2 ${
                      polling ? 'bg-red-100 text-red-700 border-red-200' : ''
                    }`}
                  >
                    <RefreshCw className={`h-4 w-4 ${polling ? 'animate-spin' : ''}`} />
                    {polling ? 'Stop Auto-Refresh' : 'Auto Refresh'}
                  </button>
                )}
                <button
                  onClick={checkStatus}
                  disabled={loading}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>
            </div>

            {/* Status Badge */}
            <div className={`status-badge ${getStatusStyle(status.status)} text-lg p-4 mb-8 justify-center`}>
              {getStatusIcon(status.status)}
              <div className="text-center">
                <p className="font-bold capitalize text-xl">{status.status}</p>
                <p className="text-sm opacity-90">{getStatusMessage(status.status)}</p>
              </div>
            </div>

            {/* Document Details */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-6">Document Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Document ID</label>
                  <p className="font-mono text-sm bg-gray-100 p-3 rounded-lg break-all">{status.documentId}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Signature ID</label>
                  <p className="font-mono text-sm bg-gray-100 p-3 rounded-lg break-all">{status.signatureId}</p>
                </div>
                {status.createdAt && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Created</label>
                    <p className="text-sm bg-gray-100 p-3 rounded-lg">
                      {new Date(status.createdAt).toLocaleString()}
                    </p>
                  </div>
                )}
                {status.completedAt && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-600">Completed</label>
                    <p className="text-sm bg-gray-100 p-3 rounded-lg">
                      {new Date(status.completedAt).toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Download Section */}
            {status.status === 'completed' && (
              <div className="bg-gradient-to-br from-success-50 to-emerald-50 rounded-xl p-8 border border-success-200">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-success-100 rounded-full">
                      <Download className="h-8 w-8 text-success-600" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-success-900 mb-3">🎉 Ready to Download!</h4>
                  <p className="text-success-700 mb-6 text-lg">
                    Your signed document is ready. Click below to download the completed PDF.
                  </p>
                  <button
                    onClick={handleDownload}
                    className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3 shadow-glow"
                  >
                    <Download className="h-5 w-5" />
                    Download Signed PDF
                    <Sparkles className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPage;