import TokenCard from './TokenCard'

function TokenList({ title, tokens, isAlert }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className={`px-6 py-4 border-b border-gray-200 ${isAlert ? 'bg-green-50' : ''}`}>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 mt-0.5">
          {tokens.length} token{tokens.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      <div className="p-4">
        {tokens.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-sm">No tokens yet. Start monitoring to see results.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {tokens.map(token => (
              <TokenCard key={token.id} token={token} isAlert={isAlert} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TokenList