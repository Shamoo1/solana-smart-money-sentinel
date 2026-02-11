function CriteriaPanel({ criteria, onCriteriaChange }) {
  const handleChange = (key, value) => {
    onCriteriaChange({
      ...criteria,
      [key]: parseFloat(value) || 0
    })
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Filter Criteria</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Age (minutes)
          </label>
          <input
            type="number"
            value={criteria.maxAge}
            onChange={(e) => handleChange('maxAge', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Min Cap ($)
            </label>
            <input
              type="number"
              value={criteria.minCap}
              onChange={(e) => handleChange('minCap', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Cap ($)
            </label>
            <input
              type="number"
              value={criteria.maxCap}
              onChange={(e) => handleChange('maxCap', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Min Liquidity ($)
          </label>
          <input
            type="number"
            value={criteria.minLiquidity}
            onChange={(e) => handleChange('minLiquidity', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Holder Distribution</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Max Bundles (%)
              </label>
              <input
                type="number"
                value={criteria.maxBundles}
                onChange={(e) => handleChange('maxBundles', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Max Snipers (%)
              </label>
              <input
                type="number"
                value={criteria.maxSnipers}
                onChange={(e) => handleChange('maxSnipers', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Max Insiders (%)
              </label>
              <input
                type="number"
                value={criteria.maxInsiders}
                onChange={(e) => handleChange('maxInsiders', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Min Pro Traders (%)
              </label>
              <input
                type="number"
                value={criteria.minProTraders}
                onChange={(e) => handleChange('minProTraders', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">
                Max Dev Holding (%)
              </label>
              <input
                type="number"
                value={criteria.maxDevHolding}
                onChange={(e) => handleChange('maxDevHolding', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CriteriaPanel