import { useState } from 'react';
import { Upload, X, FileText, Sparkles } from 'lucide-react';

const FileUploader = ({ onFileSelect, accept = '.pdf', maxSize = 10 * 1024 * 1024 }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');

  const validateFile = (file) => {
    if (!file.type.includes('pdf')) {
      return 'Please select a PDF file';
    }
    if (file.size > maxSize) {
      return `File size must be less than ${maxSize / (1024 * 1024)}MB`;
    }
    return null;
  };

  const handleFile = (file) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setError('');
    setSelectedFile(file);
    onFileSelect(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    setError('');
    onFileSelect(null);
  };

  return (
    <div className="w-full space-y-4">
      <div
        className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
          dragActive
            ? 'border-primary-400 bg-gradient-to-br from-primary-50 to-primary-100 scale-105'
            : error
            ? 'border-error-300 bg-gradient-to-br from-error-50 to-red-50'
            : 'border-gray-300 hover:border-primary-300 hover:bg-gradient-to-br hover:from-gray-50 hover:to-primary-50'
        }`}
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-hero-pattern opacity-10 rounded-2xl"></div>
        
        <div className="relative">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className={`absolute inset-0 rounded-full blur-lg opacity-30 ${
                dragActive ? 'bg-primary-400' : 'bg-gray-400'
              } animate-pulse`}></div>
              <div className={`relative p-4 rounded-full transition-all duration-300 ${
                dragActive 
                  ? 'bg-gradient-to-br from-primary-100 to-primary-200' 
                  : 'bg-gradient-to-br from-gray-100 to-gray-200'
              }`}>
                <Upload className={`h-12 w-12 transition-colors ${
                  dragActive ? 'text-primary-600' : 'text-gray-500'
                }`} />
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {dragActive ? 'Drop it like it\'s hot!' : 'Upload Your Document'}
          </h3>
          
          <p className="text-lg text-gray-600 mb-6">
            Drop your PDF here, or{' '}
            <label className="text-primary-600 cursor-pointer hover:text-primary-700 font-semibold underline decoration-2 underline-offset-2">
              browse files
              <input
                type="file"
                className="hidden"
                accept={accept}
                onChange={handleChange}
              />
            </label>
          </p>
          
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>PDF files only</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>Up to {maxSize / (1024 * 1024)}MB</span>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="card-gradient border-error-200 bg-gradient-to-r from-error-50 to-red-50 animate-scale-in">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-error-100 rounded-full">
              <X className="h-5 w-5 text-error-600" />
            </div>
            <div>
              <h4 className="font-semibold text-error-900">Upload Error</h4>
              <p className="text-error-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {selectedFile && (
        <div className="card-gradient animate-scale-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-success-100 to-emerald-100 rounded-xl">
                <FileText className="h-8 w-8 text-success-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{selectedFile.name}</h4>
                <p className="text-sm text-gray-600">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • PDF Document
                </p>
              </div>
            </div>
            <button
              onClick={removeFile}
              className="p-2 text-gray-400 hover:text-error-500 hover:bg-error-50 rounded-lg transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;