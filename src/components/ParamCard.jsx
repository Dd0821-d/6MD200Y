import CountUp from './CountUp'

export default function ParamCard({ label, value, unit, sub, highlight = false }) {
  const isRange = value.includes('-') && !value.startsWith('-')

  return (
    <div className={`glow-card rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center ${highlight ? 'ring-1 ring-emerald-400/30' : ''}`}>
      <div className="flex items-baseline gap-0.5 mb-1">
        <span className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none ${highlight ? 'gradient-text' : 'text-white'}`}>
          {isRange ? value : <CountUp value={value} decimals={value.includes('.') ? 2 : 0} />}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-gray-400 mb-2 leading-tight">{unit}</span>
      <p className="text-sm sm:text-base font-semibold text-gray-200">{label}</p>
      {sub && <p className="text-xs text-gray-500 mt-0.5">{sub}</p>}
    </div>
  )
}
