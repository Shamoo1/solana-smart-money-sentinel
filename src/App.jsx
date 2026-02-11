import { useState, useEffect } from 'react'
import Header from './components/Header'
import CriteriaPanel from './components/CriteriaPanel'
import TokenList from './components/TokenList'
import AlertSettings from './components/AlertSettings'

function App() {
  const [tokens, setTokens] = useState([])
  const [alerts, setAlerts] = useState([])
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [criteria, setCriteria] = useState({
    maxAge: 20,
    minCap: 5000,
    maxCap: 10000,
    minLiquidity: 10000,
    maxBundles: 20,
    maxSnipers: 20,
    maxInsiders: 20,
    minProTraders: 15,
    maxDevHolding: 8
  })

  useEffect(() => {
    if (!isMonitoring) return

    // Simulated token monitoring
    const interval = setInterval(() => {
      const newToken = generateMockToken()
      
      setTokens(prev => {
        const updated = [newToken, ...prev].slice(0, 50)
        return updated
      })

      // Check if token matches criteria
      if (matchesCriteria(newToken, criteria)) {
        const alert = {
          id: newToken.id,
          token: newToken,
          timestamp: Date.now()
        }
        
        setAlerts(prev => [alert, ...prev].slice(0, 20))
        
        if (soundEnabled) {
          playAlertSound()
        }
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [isMonitoring, criteria, soundEnabled])

  const matchesCriteria = (token, criteria) => {
    return (
      token.age <= criteria.maxAge &&
      token.marketCap >= criteria.minCap &&
      token.marketCap <= criteria.maxCap &&
      token.liquidity >= criteria.minLiquidity &&
      token.bundles <= criteria.maxBundles &&
      token.snipers <= criteria.maxSnipers &&
      token.insiders <= criteria.maxInsiders &&
      token.proTraders >= criteria.minProTraders &&
      token.devHolding <= criteria.maxDevHolding
    )
  }

  const playAlertSound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.value = 800
    oscillator.type = 'sine'
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.5)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isMonitoring={isMonitoring}
        onToggleMonitoring={() => setIsMonitoring(!isMonitoring)}
      />
      
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Left sidebar - Criteria */}
          <div className="xl:col-span-3">
            <CriteriaPanel 
              criteria={criteria}
              onCriteriaChange={setCriteria}
            />
            
            <div className="mt-6">
              <AlertSettings 
                soundEnabled={soundEnabled}
                onSoundToggle={() => setSoundEnabled(!soundEnabled)}
                alertCount={alerts.length}
                onClearAlerts={() => setAlerts([])}
              />
            </div>
          </div>

          {/* Main content - Token lists */}
          <div className="xl:col-span-9">
            <div className="grid grid-cols-1 gap-6">
              {/* Alerts section */}
              {alerts.length > 0 && (
                <TokenList 
                  title="🔔 Smart Money Alerts"
                  tokens={alerts.map(a => a.token)}
                  isAlert={true}
                />
              )}

              {/* All tokens */}
              <TokenList 
                title="All Monitored Tokens"
                tokens={tokens}
                isAlert={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function generateMockToken() {
  const sources = ['Pump.fun', 'Bags']
  const symbols = ['DOGE', 'PEPE', 'WOJAK', 'BONK', 'FLOKI', 'SHIB', 'MOON', 'ROCKET', 'APE', 'CHAD']
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)] + Math.floor(Math.random() * 999)
  
  return {
    id: Date.now() + Math.random(),
    symbol: randomSymbol,
    name: `${randomSymbol} Token`,
    source: sources[Math.floor(Math.random() * sources.length)],
    age: Math.floor(Math.random() * 30),
    marketCap: Math.floor(Math.random() * 50000) + 2000,
    liquidity: Math.floor(Math.random() * 50000) + 5000,
    volume: Math.floor(Math.random() * 100000) + 5000,
    bundles: Math.floor(Math.random() * 40),
    snipers: Math.floor(Math.random() * 35),
    insiders: Math.floor(Math.random() * 30),
    proTraders: Math.floor(Math.random() * 40),
    devHolding: Math.floor(Math.random() * 15),
    priceChange: (Math.random() * 200 - 50).toFixed(2),
    holders: Math.floor(Math.random() * 500) + 50,
    address: generateMockAddress()
  }
}

function generateMockAddress() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789'
  let address = ''
  for (let i = 0; i < 44; i++) {
    address += chars[Math.floor(Math.random() * chars.length)]
  }
  return address
}

export default App