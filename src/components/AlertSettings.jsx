function AlertSettings({ soundEnabled, onSoundToggle, alertCount, onClearAlerts }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Alert Settings</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-700">Sound Alerts</span>
          <button
            onClick={onSoundToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              soundEnabled ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                soundEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-700">Total Alerts</span>
            <span className="text-lg font-bold text-blue-500">{alertCount}</span>
          </div>
          
          {alertCount > 0 && (
            <button
              onClick={onClearAlerts}
              className="w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              Clear All Alerts
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default AlertSettings