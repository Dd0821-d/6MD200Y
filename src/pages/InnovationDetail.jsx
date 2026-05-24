import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Zap, Thermometer, Recycle, Gauge, TrendingUp, Leaf, Droplets, Layers, Cpu } from 'lucide-react'

const colorMap = {
  emerald: { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'border-emerald-400/20' },
  blue: { bg: 'bg-blue-400/10', text: 'text-blue-400', border: 'border-blue-400/20' },
  amber: { bg: 'bg-amber-400/10', text: 'text-amber-400', border: 'border-amber-400/20' },
  green: { bg: 'bg-green-400/10', text: 'text-green-400', border: 'border-green-400/20' },
  purple: { bg: 'bg-purple-400/10', text: 'text-purple-400', border: 'border-purple-400/20' },
}

const innovations = {
  'coupling-heating': {
    title: '耦合高效加热节能创新',
    subtitle: '真空脉动 + 碳纤维红外辐射 · 从源头降低能耗',
    color: 'emerald',
    icon: Zap,
    intro: '本创新点并非真空脉动与红外辐射两种技术的简单堆砌，而是基于物料干燥传热传质机理实现的深度有机融合。通过真空环境降低水的沸点、红外辐射穿透加热、脉动气流高效排湿三重机制协同，最终获得"1+1>2"的协同节能增效效果，较传统热风干燥综合节能27.9%。',
    sections: [
      {
        icon: Zap,
        heading: '真空脉动机制',
        body: '通过真空泵与电磁阀协同控制，干燥室压力在常压与绝压间交替循环。真空阶段水的沸点降至33~46℃（5~10kPa绝压），水分在低温下即可高效汽化，大幅降低热能需求。',
        items: [
          '周期性压力调控原位生成连通性蜂窝孔道，强化传质过程',
          '较传统热风干燥综合能耗降低27.9%',
          '单位产品碳排放减少30%',
          '精准控制"真空抽气→真空保持→恢复常压→常压保持"四阶段循环',
        ],
      },
      {
        icon: Cpu,
        heading: '碳纤维红外辐射加热',
        body: '选用表面覆盖环氧树脂的碳晶涂层式红外加热板，通电后激发红外波长集中在5~15μm，穿透性强，可直接将热能传递至物料内部，避免空气分子吸收散射造成的热损失。',
        items: [
          '电热辐射转换效率≥70%，从供热端大幅降低能耗',
          '真空环境下红外电磁波几乎无衰减穿透，直接作用于物料内部',
          '较传统电阻加热节电超30%',
          '升温速率快：通电后10分钟内即可达到90℃以上',
        ],
      },
      {
        icon: Layers,
        heading: '耦合协同效应',
        body: '两种技术在时序上和物理过程上相互强化。每个脉动循环完成"能量注入→水分蒸发→水汽排除"的完整过程，干燥全程物料处于真空低氧环境，抑制酶促褐变与非酶褐变。',
        items: [
          '真空阶段：红外电磁波无衰减穿透 + 低温沸点高效汽化',
          '常压恢复阶段：外部空气涌入，瞬时气流携带水蒸气快速排出',
          '高效脱水与品质保持同步实现',
          '节能、提质、减碳三重效益统一',
        ],
      },
    ],
    specs: [
      { label: '综合节能率', value: '27.9%' },
      { label: '电热转换效率', value: '≥70%' },
      { label: '红外波长范围', value: '5~15μm' },
      { label: '碳减排比例', value: '30%' },
      { label: '较电阻加热节电', value: '30%+' },
    ],
  },

  'layered-temp-control': {
    title: '分层精准控温降耗创新',
    subtitle: '分层独立控温 · 精度±0.22℃ · 均匀度96.22%',
    color: 'blue',
    icon: Thermometer,
    intro: '本创新点针对传统干燥设备"整体加热、温度不均"的根本缺陷，自主研发分层式红外加热板结构与智能温度调控算法。每层加热板独立配备温度传感器与功率调节回路，结合多传感器数据融合技术，实现干燥全程精准按需供能，杜绝局部过热与无效运行，保障整批次均匀度达96.22%。',
    sections: [
      {
        icon: Thermometer,
        heading: '分层独立加热结构',
        body: '干燥室内设置多层碳纤维红外加热板，每层配备独立温度传感器与功率调节回路，依据物料装载量与预设工艺分区控制，实现按需精准供能。',
        items: [
          '精准控温区间：48.60~83.09℃，调节精度±0.22℃',
          '分层独立控制，层间温差动态补偿：上层自动调高1~2℃',
          '阶段化功率调节：初期满功率、中期降15~20%、后期仅30%维持',
          '真空/常压阶段功率智能适配：常压阶段短暂提升5~10%补充对流热损',
        ],
      },
      {
        icon: Layers,
        heading: '多维度数据驱动调控',
        body: '集成温度、湿度、重量多传感器数据，构建干燥过程的多维感知体系，通过数据融合算法实时判断物料干燥状态，动态调整加热策略。',
        items: [
          '实时含水率智能识别率高达92.97%',
          '基于干燥状态智能调控真空-常压脉动周期',
          '消除低负载及过度干燥等无效能耗',
          '电能损耗降低10%~15%，均匀度提升至96.22%',
        ],
      },
    ],
    specs: [
      { label: '温控区间', value: '48.60~83.09℃' },
      { label: '控温精度', value: '±0.22℃' },
      { label: '干燥均匀度', value: '96.22%' },
      { label: '含水率识别率', value: '92.97%' },
      { label: '电能损耗降低', value: '10%~15%' },
    ],
  },

  'water-recycle': {
    title: '水资源闭环循环减废创新',
    subtitle: '冷凝水全回收 · 废料资源化 · 零排放',
    color: 'green',
    icon: Recycle,
    intro: '本创新点构建了完整的水资源闭环循环利用体系。水环式真空泵运行中产生的大量冷凝水通过专用管道全量集中收集，经自然沉淀处理后回用于前端清洗工序；沉淀残渣经堆肥腐熟转化为优质有机肥料，反哺林果种植，形成"加工→回收→还田"的绿色循环经济模式，实现加工废水零排放与废料精准资源化。',
    sections: [
      {
        icon: Droplets,
        heading: '冷凝水全量回收体系',
        body: '干燥过程中物料水分蒸发后经真空泵冷凝回收，通过专用管道全量集中收集至冷凝水箱，经自然沉淀处理后100%回用于前端物料清洗工序。',
        items: [
          '干燥每吨物料可回收757.5kg冷凝水',
          '经自然沉淀后100%回用于物料前道清洗环节',
          '单台设备年回收冷凝水88吨以上',
          '年节约清洁水资源10吨以上',
          '全封闭运行，杜绝水资源浪费与外排污染',
        ],
      },
      {
        icon: Leaf,
        heading: '废料资源化利用链',
        body: '沉淀残渣含有丰富的有机质及N、P、K等营养元素，经堆肥腐熟后可转化为优质有机肥料，反哺林果种植，实现"加工→回收→还田"的绿色循环。',
        items: [
          '每吨物料产生7.5kg加工废料',
          '沉淀残渣经堆肥腐熟可转化为约14kg有机肥',
          '按林果基肥标准可满足约33.3m²土地用肥需求',
          '年可制备约1,680kg有机肥',
          '满足约2.66×10⁷m²林果地基肥需求',
        ],
      },
    ],
    specs: [
      { label: '单吨冷凝水回收', value: '757.5kg' },
      { label: '年回收冷凝水', value: '88吨+' },
      { label: '年节约清洁水', value: '10吨+' },
      { label: '年可产有机肥', value: '1,680kg' },
      { label: '废水排放', value: '零排放' },
    ],
  },

  'smart-control': {
    title: '智能管控减损降碳创新',
    subtitle: '智能监测 · 精准调控 · 损耗率<2%',
    color: 'amber',
    icon: Gauge,
    intro: '本创新点聚焦干燥过程中的原料损耗与品质控制难题，通过集成称重传感器、温湿度传感器与智能调控算法，构建干燥全过程智能监控体系。结合微信小程序实现远程运维，将产后损耗率从行业普遍的25%~35%降至2%以内，在减少原料浪费的同时大幅削减隐性碳排放，实现"减损即减碳"。',
    sections: [
      {
        icon: Gauge,
        heading: '智能称重监测系统',
        body: '干燥室内部集成物料承载台-双支撑架-称重传感器一体化称重系统，精准感知物料重量变化并转换为实时数据，操作人员无需打开干燥仓即可直观观察水分脱除进度。',
        items: [
          '高精度拉压力称重传感器，单传感器量程0~450kg，综合精度±0.2kg',
          '全密封防水防腐蚀、耐高温（-20~120℃）、抗真空负压',
          '触摸屏实时显示重量数据及变化曲线，更新频率1次/10秒',
          '干燥进度可视化：自动计算并显示水分脱除百分比',
        ],
      },
      {
        icon: Thermometer,
        heading: '精准调控减损策略',
        body: '基于实时重量与多传感器数据的交叉验证，智能调整干燥参数，确保不同批次、品种物料均能达到最佳干燥效果，将成品率提升至99.26%。',
        items: [
          '干燥初期、中期、后期分阶段精准调控温湿度与真空周期',
          '多数据交叉验证：称重+温湿度数据偏差超5%自动提示校准',
          '干燥终点智能判定，避免过度干燥造成的品质损失',
          '损耗率由行业25%~35%降至2%以内',
          '原料利用率大幅提升，每吨多产出合格品30%以上',
        ],
      },
    ],
    specs: [
      { label: '成品率', value: '99.26%' },
      { label: '损耗率', value: '<2%' },
      { label: '传感器精度', value: '±0.2kg' },
      { label: '数据更新频率', value: '1次/10秒' },
      { label: '传统损耗率', value: '25%~35%' },
    ],
  },

  'low-carbon-business': {
    title: '低碳商业化协同模式创新',
    subtitle: '低成本 · 高适配 · 可推广 · 绿色增收',
    color: 'purple',
    icon: TrendingUp,
    intro: '本创新点以"低成本、高适配、易推广"为核心策略，打破绿色节能装备"成本高、门槛高、推广难"的现实瓶颈。设备定价8万元，远低于市场同类12万~17万元的高端节能设备；可适配葡萄、红枣、枸杞、猕猴桃等多种特色林果烘干需求，覆盖家庭农场、合作社、深加工企业等多元主体，实现节能、降碳、增收同步落地。',
    sections: [
      {
        icon: TrendingUp,
        heading: '高性价比与市场适配',
        body: '设备定价仅8万元，较同类高端节能设备价格降低30%~50%，降低绿色装备采用门槛，使广大中小型加工主体也能享受节能降碳技术红利。',
        items: [
          '设备定价8万元，远低于同类12万~17万元',
          '适配葡萄、红枣、枸杞、猕猴桃等多种特色林果烘干需求',
          '覆盖家庭农场、合作社、深加工企业等多元经营主体',
          '潜在市场规模超200亿元，涉及超6亿亩林果种植面积',
        ],
      },
      {
        icon: Leaf,
        heading: '政策红利与碳交易收益',
        body: '可享受绿色农业专项补贴、乡村振兴扶持等多重政策红利，碳减排量可纳入碳普惠交易体系，实现"减碳即增收"的可持续商业化路径。',
        items: [
          '可享受绿色农业专项补贴、乡村振兴扶持等政策红利',
          '碳减排量纳入碳普惠交易，每吨碳减排约增收33~49元',
          '年节约电费6.01×10⁷元（较热风干燥）',
          '单吨收益4,671元（较传统工艺增收1,142元/吨）',
          '投资回收期短，综合经济效益显著',
        ],
      },
      {
        icon: Zap,
        heading: '端云协同 · 持续进化',
        body: '每台设备配套专属微信小程序，通过一机一码机制实现远程运维与数据采集，运行数据持续汇聚至云端，为工艺参数库的迭代优化提供数据基础，软硬件协同持续放大节能减碳效益。',
        items: [
          '微信小程序远程操控，降低运维人力成本',
          '内置多品类林果专用干燥工艺库，一键适配最优参数',
          '故障智能预警，减少意外停机与维修成本',
          '品质追溯：自动记录每批次干燥参数，助力品牌溢价',
        ],
      },
    ],
    specs: [
      { label: '设备定价', value: '8万元' },
      { label: '潜在市场规模', value: '200亿元+' },
      { label: '单吨收益', value: '4,671元' },
      { label: '年节约电费', value: '6.01×10⁷元' },
      { label: '运维平台', value: '微信小程序' },
    ],
  },
}

export default function InnovationDetail() {
  const { innovationId } = useParams()
  const inv = innovations[innovationId]

  if (!inv) {
    return (
      <div className="py-32 text-center">
        <p className="text-gray-400 text-lg">创新点未找到</p>
        <Link to="/innovation" className="text-emerald-400 hover:text-emerald-300 mt-4 inline-block">返回创新应用</Link>
      </div>
    )
  }

  const c = colorMap[inv.color]
  const Icon = inv.icon

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link
          to="/innovation"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> 返回创新应用
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
              <Icon className={`w-7 h-7 ${c.text}`} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">{inv.title}</h1>
              <p className={`text-sm ${c.text} font-medium`}>{inv.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed text-base">{inv.intro}</p>
        </div>

        <div className="space-y-8 mb-12">
          {inv.sections.map((sec, si) => {
            const SecIcon = sec.icon
            return (
              <div key={si} className="glow-card rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg ${c.bg} flex items-center justify-center`}>
                    <SecIcon className={`w-5 h-5 ${c.text}`} />
                  </div>
                  <h2 className="text-lg font-bold text-white">{sec.heading}</h2>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{sec.body}</p>
                <ul className="space-y-2.5">
                  {sec.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${c.bg.replace('10', '50')}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="glow-card rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-lg font-bold text-white mb-5">关键指标</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {inv.specs.map((spec, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-4 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-sm text-gray-400">{spec.label}</span>
                <span className={`text-sm font-bold ${c.text}`}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/innovation"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/30 text-white font-medium rounded-xl transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4" /> 返回创新应用
          </Link>
        </div>

      </div>
    </div>
  )
}
