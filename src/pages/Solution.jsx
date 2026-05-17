import { Link } from 'react-router-dom'
import { Cpu, Thermometer, Recycle, Smartphone, Gauge } from 'lucide-react'

const modules = [
  {
    id: 'vacuum-ir',
    icon: Cpu,
    title: '真空脉动与碳纤维红外辐射加热耦合模块',
    subtitle: '系统节能降碳核心',
    color: 'emerald',
    sections: [
      {
        heading: '真空脉动子单元',
        items: [
          '真空泵与电磁阀协同控制，干燥室压力在常压与绝压间交替循环',
          '周期性压力调控可原位生成连通性蜂窝孔道，强化传质过程',
          '较传统热风干燥综合能耗降低 28% 以上，单位产品碳排放减少 30%',
        ],
      },
      {
        heading: '碳纤维红外辐射加热子单元',
        items: [
          '碳晶涂层式红外加热板，电热辐射转换效率 ≥70%',
          '红外波长集中在 5~15μm，穿透性强，直接加热物料内部',
          '较传统电阻加热节电超 30%，有效削减碳足迹',
        ],
      },
      {
        heading: '耦合协同机制',
        items: [
          '真空阶段：对流换热微弱 → 红外辐射无衰减穿透，高效驱动水分汽化',
          '常压恢复阶段：外部空气快速带走水蒸气，为下一轮蒸发创造驱动力',
          '每个脉动循环完成"能量注入—水分蒸发—水汽排除"的完整过程',
        ],
      },
    ],
  },
  {
    id: 'temp-humidity',
    icon: Thermometer,
    title: '智能温湿度控制模块',
    subtitle: '精准控能 · 动态适配 · 低碳运行',
    color: 'blue',
    sections: [
      {
        heading: '温度智能控制子系统',
        items: [
          '精准控温区间：48.60~83.09℃，调节精度 ±0.22℃',
          '分层式红外加热板，按物料装载量分区控制，避免无效能耗',
          '阶段化功率调节：初期满功率、中期降15-20%、后期仅30%维持',
        ],
      },
      {
        heading: '湿度智能监测子系统',
        items: [
          '电容式湿度传感器，监测范围 38.1~83.9%RH，精度 2.5%RH',
          '实时含水率智能识别率高达 92.97%',
          '根据含水率自动调整真空-常压脉动周期，实现按需供能',
        ],
      },
    ],
  },
  {
    id: 'gravity-weigh',
    icon: Gauge,
    title: '重力感应称重监测模块',
    subtitle: '人工精准调控核心',
    color: 'amber',
    sections: [
      {
        heading: '硬件配置',
        items: [
          '高精度拉压力称重传感器，量程 0~450kg，精度 ±0.2kg',
          '全密封防水防腐蚀、耐高温、抗真空负压',
          '24位A/D转换，数据更新频率 1次/10秒',
        ],
      },
      {
        heading: '人工精准调控',
        items: [
          '干燥进度可视化：实时显示水分脱除百分比 + 重量变化曲线',
          '干燥初期：加速/减速调控；中期：强化传质；后期：自动停止',
          '多数据交叉验证（称重+温湿度），偏差超5%自动提示',
        ],
      },
    ],
  },
  {
    id: 'waste-recycle',
    icon: Recycle,
    title: '废水废料循环利用模块',
    subtitle: '零排放 · 全回收 · 资源化',
    color: 'green',
    sections: [
      {
        heading: '冷凝水回收',
        items: [
          '干燥每吨物料可回收 757.5kg 冷凝水，全量集中收集',
          '经沉淀后 100% 回用于物料前道清洗环节',
          '单台设备年回收冷凝水 88 吨以上，年节约清洁水 10 吨以上',
        ],
      },
      {
        heading: '废料资源化',
        items: [
          '每吨物料产生 7.5kg 加工废料，沉淀残渣可堆肥腐熟',
          '年可制备约 1680kg 有机肥，满足约 2.66×10⁷m² 林果地基肥需求',
        ],
      },
    ],
  },
  {
    id: 'smart-platform',
    icon: Smartphone,
    title: '掌上智能运维平台',
    subtitle: '微信小程序 · 端云协同',
    color: 'purple',
    sections: [
      {
        heading: '核心功能',
        items: [
          '一机一码，运行数据实时采集 + 云端存储 + 远程传输',
          '内置多品类林果专用干燥工艺库（葡萄、红枣、枸杞、猕猴桃等）',
          '远程设备操控 + 智能故障预警，减少空载运行',
          '软硬件深度协同，持续放大节能减碳综合效益',
        ],
      },
    ],
  },
]

const colorMap = {
  emerald: { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'border-emerald-400/20' },
  blue: { bg: 'bg-blue-400/10', text: 'text-blue-400', border: 'border-blue-400/20' },
  amber: { bg: 'bg-amber-400/10', text: 'text-amber-400', border: 'border-amber-400/20' },
  green: { bg: 'bg-green-400/10', text: 'text-green-400', border: 'border-green-400/20' },
  purple: { bg: 'bg-purple-400/10', text: 'text-purple-400', border: 'border-purple-400/20' },
}

export default function Solution() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            技术<span className="gradient-text">方案</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            三大模块协同运行，在物料干燥过程中实现节能、低碳、无污染。
            <br />以高效化、智能化、节能化为设计理念。
          </p>
        </div>

        {/* Modules */}
        <div className="space-y-10">
          {modules.map((mod, idx) => {
            const c = colorMap[mod.color]
            return (
              <Link
                key={idx}
                to={`/solution/${mod.id}`}
                className="glow-card rounded-2xl p-6 sm:p-8 block no-underline hover:border-emerald-400/30 hover:shadow-[0_0_40px_rgba(34,211,160,0.08)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
                    <mod.icon className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-white">{mod.title}</h2>
                    <p className={`text-sm ${c.text} font-medium`}>{mod.subtitle}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {mod.sections.map((sec, si) => (
                    <div key={si}>
                      <h3 className={`text-sm font-semibold ${c.text} mb-3 uppercase tracking-wide`}>{sec.heading}</h3>
                      <ul className="space-y-2">
                        {sec.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.bg.replace('10', '50')}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </Link>
            )
          })}
        </div>

        <section className="mt-16">
          <div className="glow-card rounded-2xl p-6 sm:p-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 text-emerald-400 text-sm mb-4">
              模块化拓展能力
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              系统可升级为大型连续化生产线，满足家庭农场、合作社、深加工企业等不同经营主体的规模化生产需求。
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
