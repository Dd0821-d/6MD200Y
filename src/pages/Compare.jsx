const fullComparison = [
  { label: '成品率', ours: '99.26%', hot: '≤75%', oven: '≤75%' },
  { label: '均匀度', ours: '96.22%', hot: '≤75%', oven: '≤75%' },
  { label: '损耗率', ours: '≤2%', hot: '15%-30%', oven: '15%-30%' },
  { label: '干燥周期', ours: '≥16h', hot: '≥24h', oven: '≥48h' },
  { label: '单位能耗', ours: '1.29 kW·h/kg', hot: '1.79 kW·h/kg', oven: '3.2 kW·h/kg' },
  { label: '营养保留率', ours: '85%-95%', hot: '40%-50%', oven: '30%-40%' },
  { label: '单吨耗电量', ours: '986.46 kW·h', hot: '1368.81 kW·h', oven: '2447.04 kW·h' },
  { label: '相对节能率', ours: '—', hot: '20%-30%', oven: '50%-60%' },
  { label: '碳排放/吨', ours: '573.13 kg', hot: '795.27 kg', oven: '1422 kg' },
  { label: '化学添加剂', ours: '无', hot: '有', oven: '有' },
  { label: '废水废料', ours: '零碳循环利用', hot: '有碳排无循环', oven: '废水无利用率' },
]

const energyComparison = [
  { label: '每吨综合电耗', ours: '986.46 kW·h', hot: '1368.81 kW·h', oven: '2447.04 kW·h' },
  { label: '碳排放量', ours: '573.13 kg', hot: '795.27 kg', oven: '1422 kg' },
  { label: '节电量', ours: '—', hot: '382.35 kW·h', oven: '1460.58 kW·h' },
  { label: '碳减排量', ours: '—', hot: '220.78 kg', oven: '848.26 kg' },
]

const economyComparison = [
  { label: '年收益', ours: '1.33×10⁹ 元', hot: '1.01×10⁹ 元', oven: '1.01×10⁹ 元' },
  { label: '单吨收益', ours: '4671 元', hot: '3529 元', oven: '3529 元' },
  { label: '单吨电费', ours: '542.56 元', hot: '752.85 元', oven: '1345.87 元' },
  { label: '碳排放量/吨', ours: '573.13 kg', hot: '795.27 kg', oven: '1422 kg' },
  { label: '年总电费', ours: '1.55×10⁸ 元', hot: '2.15×10⁸ 元', oven: '3.84×10⁸ 元' },
  { label: '年节约电费', ours: '—', hot: '6.01×10⁷ 元', oven: '2.29×10⁸ 元' },
]

function SectionTitle({ children }) {
  return <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">{children}</h2>
}

function TableWrapper({ children, id }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/5" id={id}>
      {children}
    </div>
  )
}

export default function Compare() {
  const renderTable = (dataRow, highlightOurs = true) => (
    <table className="data-table">
      <thead>
        <tr>
          <th>指标</th>
          <th className="col-highlight">6MD-200Y 本设备</th>
          <th>传统热风干燥</th>
          <th>烘房干燥</th>
        </tr>
      </thead>
      <tbody>
        {dataRow.map(row => (
          <tr key={row.label}>
            <td className="font-medium text-gray-300">{row.label}</td>
            <td className={`col-highlight ${row.ours === '—' ? 'text-gray-600' : 'text-emerald-400 font-bold'}`}>{row.ours}</td>
            <td className="text-gray-400">{row.hot}</td>
            <td className="text-gray-400">{row.oven}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            性能<span className="gradient-text">参数对比</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            全维度对比 6MD-200Y 与传统干燥工艺的核心指标，数据基于以葡萄为典型案例的理论计算与实验验证。
          </p>
        </div>

        {/* 1. Full comparison */}
        <section className="mb-16">
          <SectionTitle>全维度性能对比</SectionTitle>
          <TableWrapper>{renderTable(fullComparison)}</TableWrapper>
        </section>

        {/* 2. Energy comparison */}
        <section className="mb-16">
          <SectionTitle>能耗及碳排放对比</SectionTitle>
          <TableWrapper>{renderTable(energyComparison)}</TableWrapper>
          <p className="text-xs text-gray-600 mt-3 text-right">
            注：节电量 = 对比工艺电耗 − 本设备电耗；电网碳排放因子 0.5810 tCO₂/MW·h
          </p>
        </section>

        {/* 3. Economy comparison */}
        <section className="mb-16">
          <SectionTitle>经济价值对比</SectionTitle>
          <TableWrapper>{renderTable(economyComparison)}</TableWrapper>
        </section>

        {/* Key takeaways */}
        <section className="grid sm:grid-cols-3 gap-6">
          <div className="glow-card rounded-2xl p-6 text-center">
            <div className="gradient-text text-3xl font-black mb-2">27.9%</div>
            <p className="text-sm text-gray-400">较传统热风干燥节能率</p>
          </div>
          <div className="glow-card rounded-2xl p-6 text-center">
            <div className="gradient-text text-3xl font-black mb-2">220.78 kg</div>
            <p className="text-sm text-gray-400">每吨加工碳减排量（较热风）</p>
          </div>
          <div className="glow-card rounded-2xl p-6 text-center">
            <div className="gradient-text text-3xl font-black mb-2">8 万元</div>
            <p className="text-sm text-gray-400">设备定价，远低于同类12-17万元</p>
          </div>
        </section>

      </div>
    </div>
  )
}
