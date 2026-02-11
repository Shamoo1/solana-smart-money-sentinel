function TokenCard({ token, isAlert }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)
  }

  const formatAddress = (address) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }

  const getStatusColor = (value, threshold, inverse = false) => {
    const isGood = inverse ? value >= threshold : value <= threshold
    return isGood ? 'text-green-600' : 'text-red-600'
  }

  return (
    <div className={`rounded-xl border p-5 transition-all ${
      isAlert 
        ? 'border-green-300 bg-green-50 shadow-lg' 
        : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-gray-900">{token.symbol}</h3>
            <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
              {token.source}
            </span>
            {isAlert && (
              <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-bold rounded-full animate-pulse">
                ALERT
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">{token.name}</p>
          <p className="text-xs text-gray-500 mt-1 font-mono">{formatAddress(token.address)}</p>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-gray-600">Age</p>
          <p className="text-lg font-bold text-gray-900">{token.age}m</p>
        </div>
      </div>

      {/* Market metrics */}
      <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
        <div>
          <p className="text-xs text-gray-600 mb-1">Market Cap</p>
          <p className="text-sm font-bold text-gray-900">{formatCurrency(token.marketCap)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600 mb-1">Liquidity</p>
          <p className="text-sm font-bold text-gray-900">{formatCurrency(token.liquidity)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-600 mb-1">Volume</p>
          <p className="text-sm font-bold text-gray-900">{formatCurrency(token.volume)}</p>
        </div>
      </div>

      {/* Holder distribution metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-1">Bundles</p>
          <p className={`text-base font-bold ${getStatusColor(token.bundles, 20)}`}>
            {token.bundles}%
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-1">Snipers</p>
          <p className={`text-base font-bold ${getStatusColor(token.snipers, 20)}`}>
            {token.snipers}%
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-1">Insiders</p>
          <p className={`text-base font-bold ${getStatusColor(token.insiders, 20)}`}>
            {token.insiders}%
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-1">Pro Traders</p>
          <p className={`text-base font-bold ${getStatusColor(token.proTraders, 15, true)}`}>
            {token.proTraders}%
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-1">Dev Hold</p>
          <p className={`text-base font-bold ${getStatusColor(token.devHolding, 8)}`}>
            {token.devHolding}%
          </p>
        </div>
      </div>

      {/* Additional info */}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4 text-xs text-gray-600">
          <span>{token.holders} holders</span>
          <span className={token.priceChange >= 0 ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
            {token.priceChange >= 0 ? '+' : ''}{token.priceChange}%
          </span>
        </div>
        
        <button className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium rounded-lg transition-colors">
          View Chart
        </button>
      </div>
    </div>
  )
}

export default TokenCard