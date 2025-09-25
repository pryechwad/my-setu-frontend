import { useState, useEffect } from 'react';
import { Settings, AlertTriangle, Save, Shield, Key, Database, CheckCircle } from 'lucide-react';
import { saveCredentials, getCredentials, clearCredentials } from '../utils/localStorageHelpers';

const SettingsPage = ({ toastActions }) => {
  const [credentials, setCredentials] = useState({
    clientId: '',
    clientSecret: '',
    productInstanceId: '',
  });
  const [saved, setSaved] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);

  useEffect(() => {
    setCredentials(getCredentials());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveCredentials(credentials);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    
    toastActions?.showSuccess(
      '⚙️ API credentials saved successfully! You can now upload documents.',
      6000
    );
  };

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all credentials? This action cannot be undone.')) {
      clearCredentials();
      setCredentials({ clientId: '', clientSecret: '', productInstanceId: '' });
      
      toastActions?.showInfo(
        '🗑️ All API credentials have been cleared from your browser.',
        5000
      );
    }
  };

  const isFormValid = credentials.clientId && credentials.clientSecret && credentials.productInstanceId;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-lg opacity-30 animate-pulse-slow"></div>
            <div className="relative p-4 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-full border border-white/30">
              <Settings className="h-12 w-12 text-primary-600 floating-element" />
            </div>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          API Configuration
        </h1>
        <p className="text-2xl font-handwritten text-primary-600 mb-2 transform rotate-1">
          "Let's get you set up in 2 minutes!"
        </p>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Securely configure your Setu API credentials to start processing documents
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8">
        {/* Security Warning */}
        <div className="card-gradient border-amber-200 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-full">
              <AlertTriangle className="h-8 w-8 text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-amber-900 mb-3">🔒 Security Notice</h3>
              <div className="space-y-2 text-amber-800">
                <p className="font-medium">Your API credentials will be stored in your browser's localStorage.</p>
                <p>This is <strong>not secure for production use</strong>. Only use test/sandbox credentials.</p>
                <p>For production applications, implement proper backend authentication.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Form */}
        <div className="card-gradient">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg">
              <Key className="h-6 w-6 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">API Credentials</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Client ID */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                <Shield className="h-5 w-5 text-primary-500" />
                Client ID
              </label>
              <input
                type="text"
                value={credentials.clientId}
                onChange={(e) => setCredentials(prev => ({ ...prev, clientId: e.target.value }))}
                className="input-field text-lg"
                placeholder="Enter your x-client-id"
                required
              />
              <p className="text-sm text-gray-500">Your unique client identifier from Setu</p>
            </div>

            {/* Client Secret */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                <Key className="h-5 w-5 text-accent-500" />
                Client Secret
              </label>
              <div className="relative">
                <input
                  type={showSecrets ? "text" : "password"}
                  value={credentials.clientSecret}
                  onChange={(e) => setCredentials(prev => ({ ...prev, clientSecret: e.target.value }))}
                  className="input-field text-lg pr-12"
                  placeholder="Enter your x-client-secret"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowSecrets(!showSecrets)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showSecrets ? '🙈' : '👁️'}
                </button>
              </div>
              <p className="text-sm text-gray-500">Your secret key for API authentication</p>
            </div>

            {/* Product Instance ID */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
                <Database className="h-5 w-5 text-purple-500" />
                Product Instance ID
              </label>
              <input
                type="text"
                value={credentials.productInstanceId}
                onChange={(e) => setCredentials(prev => ({ ...prev, productInstanceId: e.target.value }))}
                className="input-field text-lg"
                placeholder="Enter your x-product-instance-id"
                required
              />
              <p className="text-sm text-gray-500">Your product instance identifier</p>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button 
                type="submit" 
                disabled={!isFormValid}
                className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-3 justify-center"
              >
                {saved ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    Saved Successfully!
                  </>
                ) : (
                  <>
                    <Save className="h-5 w-5" />
                    Save Credentials
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-3 justify-center"
              >
                <AlertTriangle className="h-5 w-5" />
                Clear All
              </button>
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="card-gradient bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-blue-900">Need Help?</h3>
          </div>
          
          <div className="space-y-4 text-blue-800">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-sm font-bold text-blue-700 mt-0.5">1</div>
              <div>
                <p className="font-medium">Get your API credentials from the Setu Developer Dashboard</p>
                <p className="text-sm opacity-75">Visit the Setu portal and navigate to your API settings</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-sm font-bold text-blue-700 mt-0.5">2</div>
              <div>
                <p className="font-medium">Use sandbox/test credentials only</p>
                <p className="text-sm opacity-75">Never use production credentials in this demo application</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-sm font-bold text-blue-700 mt-0.5">3</div>
              <div>
                <p className="font-medium">Test your configuration</p>
                <p className="text-sm opacity-75">Upload a document to verify your credentials are working</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status Indicator */}
        {isFormValid && (
          <div className="card-gradient border-success-200 bg-gradient-to-br from-success-50 to-emerald-50 animate-scale-in">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-success-100 rounded-full">
                <CheckCircle className="h-8 w-8 text-success-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-success-900">✅ Configuration Complete</h4>
                <p className="text-success-700">Your API credentials are configured and ready to use!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;