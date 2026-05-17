import { FileText, TrendingDown, Zap, AlertTriangle, FlaskConical, Leaf } from 'lucide-react'

const painPoints = [
  {
    icon: Zap,
    title: '能耗高，碳排放量大',
    desc: '传统热风干燥能源利用效率不足50%，生产端直接碳排放量大，背离农业节能降碳发展要求。',
  },
  {
    icon: TrendingDown,
    title: '损耗高，隐性碳排突出',
    desc: '自然晾晒损耗率30%-35%；常规热风干燥成品率不足70%。原料损耗造成全链条资源浪费，衍生大量隐性碳排放。',
  },
  {
    icon: AlertTriangle,
    title: '化学添加多，绿色生产难',
    desc: '传统加工使用化学促干剂、熏硫护色，存在食品安全隐患；露天晾晒易受污染，不符合绿色生产标准。',
  },
]

export default function Background() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            研制<span className="gradient-text">背景及意义</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            响应国家双碳战略，解决特色林果干燥加工行业高能耗、高损耗、高排放的核心痛点。
          </p>
        </div>

        {/* Policy background */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">政策背景</h2>
          </div>
          <div className="glow-card rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-start gap-3">
              <Leaf className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-gray-300 leading-relaxed">
                我国坚定不移推进<strong className="text-white">双碳战略</strong>与农业绿色低碳转型。联合国气候变化峰会上明确
                <strong className="text-emerald-400">2035年发展目标：温室气体净排放量较峰值下降7%-10%</strong>。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Leaf className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">2026年中央一号文件</strong>明确支持特色农产品开拓"一带一路"市场、推广绿色节能加工装备。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Leaf className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
              <p className="text-gray-300 leading-relaxed">
                新疆及西北产区<strong className="text-white">葡萄、红枣、枸杞</strong>，秦岭沿线<strong className="text-white">猕猴桃</strong>等特色林果，
                已纳入农产品加工节能改造重点支持范围。
              </p>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">行业现状与痛点</h2>
          </div>
          <p className="text-gray-400 mb-8 leading-relaxed">
            当前在双碳战略与农业绿色发展导向下，我国特色林果干燥加工行业短板突出，高耗能、高损耗、高排放问题凸显，传统工艺的节能降碳潜力已达瓶颈。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map(p => (
              <div key={p.title} className="glow-card rounded-2xl p-6 sm:p-8">
                <div className="w-12 h-12 rounded-xl bg-red-400/10 flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Loss comparison */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FlaskConical className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">传统工艺损耗对比</h2>
          </div>
          <p className="text-sm text-gray-500 -mt-4 mb-4">以葡萄加工为典型案例</p>
          <div className="overflow-x-auto rounded-2xl border border-white/5">
            <table className="data-table">
              <thead>
                <tr>
                  <th>工艺方式</th>
                  <th>损耗率</th>
                  <th>单吨合格产出</th>
                  <th>成品率</th>
                  <th>碳排放量/吨</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-gray-400">自然晾晒</td>
                  <td className="text-red-400 font-semibold">35%</td>
                  <td className="text-gray-400">152.95 kg</td>
                  <td className="text-red-400 font-semibold">65%</td>
                  <td className="text-gray-400">—</td>
                </tr>
                <tr>
                  <td className="text-gray-400">传统热风干燥</td>
                  <td className="text-red-400 font-semibold">25%</td>
                  <td className="text-gray-400">176.45 kg</td>
                  <td className="text-red-400 font-semibold">≤75%</td>
                  <td className="text-gray-400">795.27 kg</td>
                </tr>
                <tr>
                  <td className="text-gray-400">烘房干燥</td>
                  <td className="text-red-400 font-semibold">15-30%</td>
                  <td className="text-gray-400">—</td>
                  <td className="text-red-400 font-semibold">≤75%</td>
                  <td className="text-gray-400">1422 kg</td>
                </tr>
                <tr>
                  <td className="col-highlight text-emerald-400 font-bold">6MD-200Y 本设备</td>
                  <td className="col-highlight text-emerald-400 font-bold">0.74%</td>
                  <td className="col-highlight text-emerald-400 font-bold">233.55 kg</td>
                  <td className="col-highlight text-emerald-400 font-bold">99.26%</td>
                  <td className="col-highlight text-emerald-400 font-bold">573.13 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-400 mt-4 leading-relaxed">
            在同等原料投入下，本设备较传统方式增产<strong className="text-emerald-400">三分之一以上</strong>，
            将产后损耗从行业普遍的25%-35%压缩至不足2%，显著提升原料利用率，减少资源无效消耗。
          </p>
        </section>

      </div>
    </div>
  )
}
