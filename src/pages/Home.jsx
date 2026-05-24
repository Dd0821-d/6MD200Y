import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Cpu, Recycle } from 'lucide-react'
import ParamCard from '../components/ParamCard'

const params = [
  { label: '节能率', value: '27.9', unit: '%', sub: '较传统热风干燥', highlight: true },
  { label: '成品率', value: '99.26', unit: '%', sub: '行业领先', highlight: true },
  { label: '损耗率', value: '2', unit: '%', sub: '远低于行业25-35%', highlight: true },
  { label: '干燥周期', value: '16', unit: 'h', sub: '传统热风48h+' },
  { label: '单位能耗', value: '1.29', unit: 'kW·h/kg', sub: '传统热风1.79' },
  { label: '单吨耗电', value: '986.46', unit: 'kW·h', sub: '传统热风1368.81' },
  { label: '干燥均匀度', value: '96.22', unit: '%', sub: '分层精准控温' },
  { label: '营养保留率', value: '85-95', unit: '%', sub: '传统40-50%' },
  { label: '温控精度', value: '0.22', unit: '℃', sub: '±精准调控' },
  { label: '碳排放', value: '573.13', unit: 'kg/吨', sub: '烘房干燥1422kg' },
  { label: '设备定价', value: '8', unit: '万元', sub: '同类12-17万元' },
  { label: '年节水', value: '10', unit: '吨+', sub: '冷凝水全回收' },
]

const modules = [
  { icon: Cpu, title: '真空脉动+红外耦合', desc: '真空脉动与碳纤维红外辐射耦合技术，电热转化效率≥70%，红外波长5-15μm穿透加热，节能20-30%。', to: '/solution' },
  { icon: Leaf, title: '智能温湿度控制', desc: '温控48.60-83.09℃，精度±0.22℃；电容式湿度传感器+重力感应称重，按需供能。', to: '/solution' },
  { icon: Recycle, title: '废水废料循环利用', desc: '冷凝水100%回用，年节水10吨+；废渣制有机肥，年可产1680kg，零排放。', to: '/solution' },
]

const quickCompare = [
  { label: '成品率', ours: '99.26%', hot: '≤75%', oven: '≤75%' },
  { label: '干燥周期', ours: '16h', hot: '≥24h', oven: '≥48h' },
  { label: '单位能耗', ours: '1.29 kWh/kg', hot: '1.79 kWh/kg', oven: '3.2 kWh/kg' },
  { label: '碳排放/吨', ours: '573 kg', hot: '795 kg', oven: '1422 kg' },
  { label: '营养保留', ours: '85-95%', hot: '40-50%', oven: '30-40%' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-3 leading-none">
6MD<span className="gradient-text">-</span>200Y
            </h1>
            <p className="text-xl sm:text-3xl lg:text-4xl text-emerald-400 font-bold mb-3 tracking-wide">
              真空脉动节能干燥设备
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              脉动节能 · 红外减碳
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              面向特色林果的低耗烘干装备 ——
              真空脉动 + 碳纤维红外辐射技术<br />
              节能<span className="text-emerald-400 font-semibold">27.9%</span>，
              成品率<span className="text-emerald-400 font-semibold">99.26%</span>，
              损耗率<span className="text-emerald-400 font-semibold">&lt;2%</span>
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/compare" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-xl transition-colors no-underline">
                查看性能参数 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/solution" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-colors no-underline">
                技术方案
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ★ 核心参数大屏 — 页面重心 */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              核心参数 <span className="gradient-text">一览</span>
            </h2>
            <p className="text-gray-500 text-lg">数据基于葡萄加工实验，每一项都经过验证</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {params.map(p => (
              <ParamCard key={p.label} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* 三大模块 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              三大<span className="gradient-text">核心模块</span>
            </h2>
            <p className="text-gray-500 text-lg">协同运行，实现节能、低碳、无污染</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {modules.map(m => (
              <Link key={m.title} to={m.to} className="no-underline">
                <div className="glow-card rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-5">
                    <m.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{m.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{m.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 快速对比 */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              快速<span className="gradient-text">对比</span>
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/5">
            <table className="data-table">
              <thead>
                <tr>
                  <th>指标</th>
                  <th className="col-highlight">6MD-200Y</th>
                  <th>传统热风干燥</th>
                  <th>烘房干燥</th>
                </tr>
              </thead>
              <tbody>
                {quickCompare.map(row => (
                  <tr key={row.label}>
                    <td className="font-medium text-gray-300">{row.label}</td>
                    <td className="col-highlight text-emerald-400 font-bold">{row.ours}</td>
                    <td className="text-gray-400">{row.hot}</td>
                    <td className="text-gray-400">{row.oven}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <Link to="/compare" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium text-sm no-underline">
              查看完整参数对比 <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
