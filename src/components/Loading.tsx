import React from 'react';

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ 
  message = "Loading...", 
  fullScreen = false 
}) => {
  const containerClass = fullScreen 
    ? "fixed inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 flex items-center justify-center z-50"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClass}>
      <div className="text-center">
        {/* Whale Logo Loading Animation */}
        <div className="mb-6">
          <div className="w-20 h-14 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mx-auto relative flex items-center justify-center animate-pulse">
            <span className="text-white text-3xl animate-bounce">🐋</span>
          </div>
        </div>
        
        {/* Loading Spinner */}
        <div className="mb-4">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white border-opacity-20 border-t-white"></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-white text-lg font-medium">
          {message}
        </div>
        
        {/* Loading Dots Animation */}
        <div className="flex justify-center space-x-1 mt-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
