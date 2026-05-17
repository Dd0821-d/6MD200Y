import { Lightbulb, TrendingUp, Phone, MapPin, Users, School } from 'lucide-react'

const innovations = [
  {
    title: '耦合高效加热节能创新',
    desc: '真空脉动与碳纤维红外辐射耦合技术，电热转化充分、热能直达物料内部，较传统工艺节能20%-30%，从源头降低能耗与碳排放。',
  },
  {
    title: '分层精准控温降耗创新',
    desc: '分层独立加热、智能精准控温，干燥均匀度达96.22%，杜绝局部过热与无效运行，最大限度提升能源利用效率。',
  },
  {
    title: '水资源闭环循环减废创新',
    desc: '构建冷凝水全回收回用体系，年节约清洁水资源10吨以上，废料循环利用，以资源循环促进节能减排。',
  },
  {
    title: '智能管控减损降碳创新',
    desc: '搭载智能监测与精准调控系统，将产后损耗率由行业10%-20%降至2%以内，减少原料浪费与隐性碳排放。',
  },
  {
    title: '低碳商业化协同模式创新',
    desc: '低成本、高适配、易推广，定价8.6万元，可享受绿色农业专项补贴，实现节能、降碳、增收同步落地。',
  },
]

export default function Innovation() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">
            创新点及<span className="gradient-text">应用前景</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            五大核心创新，让节能减排可量化、可复制，助力农业双碳目标落地。
          </p>
        </div>

        {/* Innovations */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">五大核心创新点</h2>
          </div>
          <div className="space-y-5">
            {innovations.map((inv, idx) => (
              <div key={idx} className="glow-card rounded-2xl p-5 sm:p-6 flex items-start gap-5">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-amber-400 font-black text-lg">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{inv.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{inv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Market prospect */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">应用前景</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glow-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-4">市场空间</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>· 适配葡萄、红枣、枸杞、猕猴桃等多种林果烘干需求</li>
                <li>· 依托超<strong className="text-white">6亿亩</strong>林果种植面积、<strong className="text-white">2亿吨</strong>年产量</li>
                <li>· 潜在市场规模超<strong className="text-emerald-400">200亿元</strong></li>
                <li>· 覆盖家庭农场、合作社、深加工企业等多元主体</li>
              </ul>
            </div>
            <div className="glow-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-4">定价与政策红利</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>· 设备定价仅<strong className="text-emerald-400">8.6万元</strong></li>
                <li>· 远低于市场同类12万-17万元的高端节能设备</li>
                <li>· 可享受绿色农业专项补贴、乡村振兴扶持等多重政策红利</li>
                <li>· 碳减排量可纳入碳普惠交易，实现"减碳即增收"</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Phone className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">联系方式</h2>
          </div>
          <div className="glow-card rounded-2xl p-6 sm:p-8 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <Users className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">联系人</p>
              <p className="text-white font-bold">王运</p>
            </div>
            <div>
              <Phone className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">联系电话</p>
              <p className="text-white font-bold">15241752991</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">地址</p>
              <p className="text-white font-bold">新疆阿拉尔 · 843300</p>
            </div>
          </div>
        </section>

        {/* Team info */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <School className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl font-bold text-white">团队信息</h2>
          </div>
          <div className="glow-card rounded-2xl p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">设计者</p>
                <p className="text-white font-semibold">王运，邹景洋，白鎔源</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">指导教师</p>
                <p className="text-white font-semibold">杨舟洋，弋晓康</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-sm text-gray-400 mb-1">所属院校</p>
                <p className="text-white font-semibold">塔里木大学 · 机械电气工程学院</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 italic max-w-2xl mx-auto leading-relaxed">
            "节能减排在商业化中落地、在市场化中壮大、在规模化中见效，
            走出一条生态效益、经济效益、社会效益高度统一的绿色发展之路。"
          </p>
        </div>

      </div>
    </div>
  )
}
