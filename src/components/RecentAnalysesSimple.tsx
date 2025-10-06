// Simple version without external dependencies
export default function RecentAnalysesSimple({ userEmail }: { userEmail: string }) {
  return (
    <div className="bg-ocean-800 border border-ocean-600 rounded-lg p-6">
      <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
        <span>🕒</span>
        Recent Analyses
      </h3>
      
      <div className="text-center py-6">
        <div className="text-4xl mb-3">📊</div>
        <p className="text-ocean-300">No analyses yet</p>
        <p className="text-sm text-ocean-400 mt-1">Upload your first resume to get started!</p>
      </div>
      
      <div className="mt-4 pt-3 border-t border-ocean-600">
        <button 
          className="w-full text-ocean-300 hover:text-white hover:bg-ocean-700 py-2 px-4 rounded text-sm"
          onClick={() => window.location.href = '/dashboard'}
        >
          View All Analyses
        </button>
      </div>
    </div>
  );
}



