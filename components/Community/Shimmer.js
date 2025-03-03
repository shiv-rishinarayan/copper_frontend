import React from "react";

// Shimmer Post Card Component - Used for loading states in the post list
const ShimmerPostCard = () => {
  return (
    <div className="bg-white p-5 rounded-lg mb-3 animate-pulse border border-gray-100 shadow-sm overflow-hidden relative">
      {/* Shimmer Effect - Diagonal animated gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="w-[200%] h-full absolute -translate-x-full animate-[shimmer_2s_infinite]"
          style={{ 
            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
            animation: 'shimmer 2s infinite linear'
          }}
        ></div>
      </div>

      {/* Post Header with Author */}
      <div className="flex justify-between items-center mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="flex-1">
            <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 w-24 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
      </div>

      {/* Post Content */}
      <div className="space-y-2 relative z-10">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Post Actions */}
      <div className="mt-4 flex justify-between items-center relative z-10">
        <div className="flex gap-4">
          <div className="h-4 w-16 bg-gray-200 rounded flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          </div>
          <div className="h-4 w-16 bg-gray-200 rounded flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
          </div>
        </div>
        <div className="h-4 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

// Small Shimmer Component - Used for loading indicators at the end of lists
const ShimmerLoader = () => {
  return (
    <div className="bg-white p-5 rounded-lg mb-3 transition-all duration-300 border-t-4 border-purple-500">
      <div className="text-center space-y-3">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500 mx-auto"></div>
        <p className="text-sm text-gray-600 animate-pulse font-medium">Loading more posts...</p>
        <div className="flex justify-center space-x-1 mb-2">
          <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Mini post preview placeholders */}
        <div className="max-w-md mx-auto bg-gray-50 p-3 rounded-lg mt-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-20 bg-gray-200 rounded"></div>
          </div>
          <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

// Multiple ShimmerPostCards for loading full page content
const ShimmerPostList = ({ count = 3 }) => {
  return (
    <div className="space-y-3">
      {Array(count).fill(0).map((_, index) => (
        <ShimmerPostCard key={index} />
      ))}
    </div>
  );
};

export { ShimmerPostCard, ShimmerLoader, ShimmerPostList }; 