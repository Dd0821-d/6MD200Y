import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Cpu, Thermometer, Recycle, Smartphone, Gauge, Zap, Droplets, Wifi, Layers, Leaf } from 'lucide-react'

const colorMap = {
  emerald: { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'border-emerald-400/20', ring: 'ring-emerald-400/20' },
  blue: { bg: 'bg-blue-400/10', text: 'text-blue-400', border: 'border-blue-400/20', ring: 'ring-blue-400/20' },
  amber: { bg: 'bg-amber-400/10', text: 'text-amber-400', border: 'border-amber-400/20', ring: 'ring-amber-400/20' },
  green: { bg: 'bg-green-400/10', text: 'text-green-400', border: 'border-green-400/20', ring: 'ring-green-400/20' },
  purple: { bg: 'bg-purple-400/10', text: 'text-purple-400', border: 'border-purple-400/20', ring: 'ring-purple-400/20' },
}

const modules = {
  'vacuum-ir': {
    title: '真空脉动与碳纤维红外辐射加热耦合模块',
    subtitle: '系统节能降碳核心技术单元',
    color: 'emerald',
    icon: Cpu,
    intro: '本模块为系统实现节能降碳的核心技术单元，并非真空脉动与红外辐射两种技术的简单堆砌，而是基于物料干燥传热传质机理实现的深度有机融合，最终获得"1+1>2"的协同节能增效效果。',
    sections: [
      {
        icon: Zap,
        heading: '真空脉动子单元',
        body: '通过真空泵与电磁阀协同控制，干燥室压力在常压与绝压间交替循环。以葡萄等鲜果为例，可根据其传热传质特性定制真空保持与常压恢复的最优时长配比。',
        items: [
          '周期性压力调控可原位生成连通性蜂窝孔道，强化传质过程',
          '较传统热风干燥综合能耗降低 28% 以上',
          '单位产品碳排放减少 30%',
          '单次循环精准控制"真空抽气→真空保持→恢复常压→常压保持"四个阶段',
        ],
      },
      {
        icon: Layers,
        heading: '碳纤维红外辐射加热子单元',
        body: '选用表面覆盖环氧树脂的碳晶涂层式红外加热板，通电后激发的红外波长集中在 5~15μm，穿透性强，可直接将热能传递至物料内部。',
        items: [
          '电热辐射转换效率 ≥70%，从供热端大幅降低能耗',
          '避免常压下空气分子吸收散射造成的热能损失',
          '较传统电阻加热节电超 30%',
          '升温速率快：通电后 10 分钟内即可达到 90℃ 以上',
        ],
      },
      {
        icon: Leaf,
        heading: '耦合协同机制',
        body: '两种技术在时序上和物理过程上相互强化，共同达成"1+1>2"的干燥效果，具体分解为能量供给与物质排出两个环节的协同。',
        items: [
          '真空阶段：仓内空气稀薄，红外电磁波几乎无衰减穿透，直接作用于物料内部；真空降低水的沸点（5~10kPa绝压下沸点降至33~46℃），热量更高效驱动水分汽化',
          '常压恢复阶段：外部空气涌入，气体流速瞬时增大，将前一阶段蒸发的水蒸气快速携带出仓，为下一轮蒸发创造更大驱动力',
          '每个脉动循环完成"能量注入→水分蒸发→水汽排除"的完整过程',
          '干燥全程物料大部分时间处于真空低氧环境，抑制酶促褐变与非酶褐变，高效脱水与品质保持同步实现',
        ],
      },
    ],
    specs: [
      { label: '电热辐射转换效率', value: '≥70%' },
      { label: '红外波长范围', value: '5~15μm' },
      { label: '综合能耗降低', value: '28%+' },
      { label: '碳减排比例', value: '30%' },
      { label: '节电比例（较电阻加热）', value: '30%+' },
    ],
  },
  'temp-humidity': {
    title: '智能温湿度控制模块',
    subtitle: '特色林果干燥工艺核心控制单元 · 精准控能 · 动态适配',
    color: 'blue',
    icon: Thermometer,
    intro: '本模块为系统节能控制的核心单元，以"精准控能、动态适配、低碳运行"为设计理念，由温度智能控制与湿度智能监测两大子系统组成。通过"精准供热+智能控湿"协同运行，从供能端和运行端双向降低能耗，有效提升能源利用效率。',
    sections: [
      {
        icon: Thermometer,
        heading: '温度智能控制子系统',
        body: '采用分层式红外加热板结构，依据物料装载量与预设工艺分区控制加热板，实现按需精准供能。内置林果专用干燥工艺参数库，在保障干燥效率与果品营养的同时，实现精细化节能控制。',
        items: [
          '精准控温区间：48.60~83.09℃，调节精度 ±0.22℃',
          '分层独立控制：每层加热板配备独立温度传感器与功率调节回路',
          '阶段化功率调节：干燥初期满功率、中期降15-20%、后期仅30%维持',
          '层间温差动态补偿：上层层温自动调高1-2℃，确保整批次均匀度96.22%',
          '真空/常压阶段功率适配：常压阶段短暂提升5-10%补充对流热损',
        ],
      },
      {
        icon: Droplets,
        heading: '湿度智能监测子系统',
        body: '设备装配电容式湿度传感器与重力传感器，精准感知干燥状态，结合初始含水率精准计算实时含水率，为节能调控提供数据支撑。',
        items: [
          '电容式湿度传感器：监测范围 38.1~83.9%RH，精度 2.5%RH',
          '响应速度快、稳定性好、抗干扰能力强',
          '实时含水率智能识别率高达 92.97%',
          '基于实时干燥状态，智能调控真空-常压脉动周期',
          '消除低负载及过度干燥等无效能耗，电能损耗降低 10%~15%',
        ],
      },
    ],
    specs: [
      { label: '温控区间', value: '48.60~83.09℃' },
      { label: '控温精度', value: '±0.22℃' },
      { label: '湿度监测范围', value: '38.1~83.9%RH' },
      { label: '湿度监测精度', value: '2.5%RH' },
      { label: '含水率识别率', value: '92.97%' },
      { label: '电能损耗降低', value: '10%~15%' },
      { label: '干燥均匀度', value: '96.22%' },
    ],
  },
  'gravity-weigh': {
    title: '重力感应称重监测模块',
    subtitle: '人工精准调控核心 · 实时在线监测',
    color: 'amber',
    icon: Gauge,
    intro: '本模块通过在干燥室内部集成物料承载台-双支撑架-称重传感器一体化称重系统，精准感知物料压力变化并转换为重量数据，实现干燥全过程物料重量的实时在线监测。操作人员无需打开干燥仓，在外部中控屏即可直观观察水分脱除进度，从根本上解决固定工艺参数无法适配不同批次、品种的天然差异问题。',
    sections: [
      {
        icon: Gauge,
        heading: '硬件组成与信号转换',
        body: '干燥室内部设置水平物料承载台，两侧对称安装高强度不锈钢支撑架，每个支撑架底部直接与拉压力称重传感器刚性连接，形成"两点对称支撑、同步受力"的稳定结构。',
        items: [
          '高精度拉压力称重传感器，单传感器量程 0~450kg，综合精度 ±0.2kg',
          '全密封防水防腐蚀、耐高温（-20~120℃）、抗真空负压',
          '信号经高精度24位A/D转换器转换为数字信号',
          '通过耐高温屏蔽线缆传输至外部中控系统',
          '触摸屏实时显示重量数据及变化曲线，数据更新频率 1次/10秒',
        ],
      },
      {
        icon: Layers,
        heading: '人工精准调控逻辑',
        body: '操作人员根据实时重量与预设标准曲线的偏差，在外部中控系统手动调整对应干燥参数，实现"看重量调参数"的个性化控制。',
        items: [
          '干燥进度可视化：自动计算并显示水分脱除百分比，生成重量变化趋势曲线',
          '干燥初期（脱除率<30%）：重量下降慢则提温2-3℃或延长真空2-3分钟；过快则降功率10%',
          '干燥中期（30%-80%）：重量平缓则缩短常压保持1-2分钟；过快则降功率10-15%',
          '干燥后期（≥80%）：重量无变化时判定完成，自动停止运行',
          '多数据交叉验证：称重+温湿度数据偏差超5%自动提示校准',
        ],
      },
    ],
    specs: [
      { label: '传感器量程', value: '0~450kg' },
      { label: '综合精度', value: '±0.2kg' },
      { label: '响应时间', value: '≤1s' },
      { label: '数据更新频率', value: '1次/10秒' },
      { label: '工作温度范围', value: '-20~120℃' },
      { label: '成品率保障', value: '99.26%' },
    ],
  },
  'waste-recycle': {
    title: '废水废料循环利用模块',
    subtitle: '水资源闭环循环 · 零排放 · 全回收',
    color: 'green',
    icon: Recycle,
    intro: '本设备原生配套水环式真空泵与冷凝水收集水箱，构建完整的水资源闭环循环利用体系。干燥每吨特色林果物料可产生757.5kg冷凝水与7.5kg加工废料，全部实现资源化利用，达成加工废水零排放与废料精准资源化。',
    sections: [
      {
        icon: Droplets,
        heading: '冷凝水全量回收体系',
        body: '干燥过程中产生的大量冷凝水通过专用管道全量集中收集，经自然沉淀处理后回用于前端工序。',
        items: [
          '干燥每吨物料可回收 757.5kg 冷凝水',
          '经自然沉淀后 100% 回用于物料前道清洗环节',
          '单台设备年回收冷凝水 88 吨以上',
          '年节约清洁水资源 10 吨以上',
          '全封闭运行，杜绝水资源浪费与外排污染',
        ],
      },
      {
        icon: Leaf,
        heading: '废料资源化利用',
        body: '沉淀残渣含有丰富的有机质与营养元素，经堆肥腐熟后可转化为优质有机肥料，反哺林果种植，形成"加工→回收→还田"的绿色循环。',
        items: [
          '每吨物料产生 7.5kg 加工废料',
          '沉淀残渣经堆肥腐熟可转化为约 14kg 有机肥',
          '按林果基肥标准可满足约 33.3m² 土地用肥需求',
          '年可制备约 1,680kg 有机肥',
          '满足约 2.66×10⁷m² 林果地基肥需求',
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
  'smart-platform': {
    title: '掌上智能运维平台',
    subtitle: '微信小程序 · 端云协同 · 工业物联网',
    color: 'purple',
    icon: Smartphone,
    intro: '设备配套专属智能监测微信小程序，采用一机一码机制实现运行数据的实时采集、云端存储与远程传输。小程序与核心硬件形成"端-云协同"的工业物联网架构，使每台设备成为数据采集终端，为工艺参数库的持续迭代优化提供数据基础。',
    sections: [
      {
        icon: Wifi,
        heading: '核心功能',
        body: '一机一码绑定，用户通过微信扫码即可完成设备注册与绑定，实时查看设备运行状态、工艺参数与干燥进度。',
        items: [
          '运行数据实时采集 + 云端存储 + 远程传输',
          '内置多品类林果专用干燥工艺库（葡萄、红枣、枸杞、猕猴桃等）',
          '一键适配最优参数，避免参数设置偏差导致的无效能耗',
          '远程设备操控，支持启停、参数调节、模式切换',
          '智能故障预警：传感器异常、温度偏离、真空泄漏等自动推送告警',
        ],
      },
      {
        icon: Layers,
        heading: '端云协同架构',
        body: '每台设备作为工业物联网数据采集终端，运行数据持续汇聚至云端，形成行业级干燥工艺大数据平台。',
        items: [
          '减少设备空载运行与意外停机时间',
          '软硬件深度协同，持续放大节能减碳综合效益',
          '工艺参数库持续迭代：基于海量运行数据的机器学习优化',
          '支持多设备集中管理，适合合作社、加工企业的规模化运维需求',
          '品质追溯：自动记录每批次干燥参数，生成完整品质档案',
        ],
      },
    ],
    specs: [
      { label: '平台类型', value: '微信小程序' },
      { label: '绑定方式', value: '一机一码' },
      { label: '内置工艺库', value: '葡萄/红枣/枸杞/猕猴桃等' },
      { label: '核心功能', value: '远程操控+故障预警+品质追溯' },
    ],
  },
}

export default function ModuleDetail() {
  const { moduleId } = useParams()
  const mod = modules[moduleId]

  if (!mod) {
    return (
      <div className="py-32 text-center">
        <p className="text-gray-400 text-lg">模块未找到</p>
        <Link to="/solution" className="text-emerald-400 hover:text-emerald-300 mt-4 inline-block">返回技术方案</Link>
      </div>
    )
  }

  const c = colorMap[mod.color]
  const Icon = mod.icon

  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          to="/solution"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 no-underline transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> 返回技术方案
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
              <Icon className={`w-7 h-7 ${c.text}`} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">{mod.title}</h1>
              <p className={`text-sm ${c.text} font-medium`}>{mod.subtitle}</p>
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed text-base">{mod.intro}</p>
        </div>

        {/* Detail sections */}
        <div className="space-y-8 mb-12">
          {mod.sections.map((sec, si) => {
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

        {/* Specs table */}
        <div className="glow-card rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-lg font-bold text-white mb-5">核心参数</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {mod.specs.map((spec, i) => (
              <div key={i} className="flex items-center justify-between py-3 px-4 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-sm text-gray-400">{spec.label}</span>
                <span className={`text-sm font-bold ${c.text}`}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="text-center">
          <Link
            to="/solution"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/30 text-white font-medium rounded-xl transition-colors no-underline"
          >
            <ArrowLeft className="w-4 h-4" /> 返回技术方案总览
          </Link>
        </div>

      </div>
    </div>
  )
}
