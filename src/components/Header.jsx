function Header({ isMonitoring, onToggleMonitoring }) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Smart Money Entry Alert</h1>
            <p className="text-sm text-gray-600 mt-1">Monitoring Pump.fun & Bags on Solana</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isMonitoring ? 'Live Monitoring' : 'Paused'}
              </span>
            </div>
            
            <button
              onClick={onToggleMonitoring}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                isMonitoring 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header