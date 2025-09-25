const ProgressBar = ({ progress, className = '', showPercentage = true, animated = true }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {showPercentage && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-bold text-primary-600">{progress}%</span>
        </div>
      )}
      <div className="progress-bar">
        <div
          className={`progress-fill ${animated ? 'animate-pulse' : ''}`}
          style={{ width: `${progress}%` }}
        >
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;