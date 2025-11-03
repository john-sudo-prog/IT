<template>
  <div class="text-gray-800">
    <!-- Navbar -->
    <header class="sticky top-0 z-30 glass-header">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-gray-800">
        <div class="flex items-center gap-3">
          <img :src="logoUrl" alt="LOGO" class="h-9 w-auto" />
        </div>
        <nav class="hidden md:flex items-center gap-8 text-sm">
          <router-link :to="{ path: '/', hash: '#home' }" class="link">首页</router-link>
          <router-link :to="{ path: '/', hash: '#services' }" class="link">云服务产品</router-link>
          <router-link :to="{ path: '/', hash: '#solutions' }" class="link">SMB服务级别</router-link>
          <router-link :to="{ path: '/', hash: '#cases' }" class="link">成功案例</router-link>
          <router-link :to="{ path: '/', hash: '#about' }" class="link">关于我们</router-link>
          <router-link :to="{ path: '/', hash: '#contact' }" class="link">联系我们</router-link>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <section id="home" class="relative isolate overflow-hidden tech-grid">
      <div class="absolute inset-0 -z-10">
        <div class="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-sky-200/50 to-indigo-200/50 blur-3xl"></div>
        <div class="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-teal-200/40 to-sky-200/40 blur-3xl"></div>
        <div class="orbit-accent spin-slow"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-4">中小企业云服务专家</h1>
        <p class="text-slate-600 text-base md:text-xl max-w-3xl mx-auto mb-8">为中小企业提供全方位的云服务解决方案，助力数字化转型</p>
        <div class="flex items-center justify-center gap-3">
          <router-link :to="{ path: '/', hash: '#services' }" class="btn btn-primary shadow-md shadow-sky-200">了解我们的服务</router-link>
          <router-link :to="{ path: '/', hash: '#contact' }" class="btn btn-outline">联系我们</router-link>
        </div>
      </div>
    </section>

    <!-- 什么是SMB -->
    <section id="smb-intro" class="py-16 md:py-20">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">什么是SMB</h2>
        <div class="title-underline mb-6"></div>
        <div class="space-y-5 text-gray-700 leading-8 text-base md:text-lg">
          <p>
            SMB（Small and Medium-sized Business，中小企业）指员工规模、营收规模相对较小、组织结构精简的企业群体。相比大型企业，SMB通常面临IT预算有限、专业技术人员短缺、业务增长不确定性高等挑战，因此在信息化与上云过程中更需要“轻投入、快见效、可持续”的方法论与服务体系。
          </p>
          <p>
            在云计算时代，SMB通过采用公共云与云原生技术，可以以更低的前期投入获得企业级能力：按需计费的计算与存储、全球可达的网络与CDN、内置的安全合规能力、以及能随业务峰谷弹性伸缩的基础设施。同时，借助自动化与托管化服务，SMB可以将有限的人力聚焦在核心业务创新，而不是繁琐的基础设施运维。
          </p>
          <p>
            我们为SMB提供覆盖“咨询规划 → 迁移实施 → 安全与合规 → 运营与成本优化”的端到端解决方案，遵循AWS Well-Architected最佳实践，帮助企业快速、安全地完成上云与用云：既解决当前痛点（性能、成本、安全、效率），也为未来扩张打下可扩展、可治理的技术底座。
          </p>
        </div>
      </div>
    </section>

    <!-- SMB客户特点 -->
    <section id="smb-features" class="py-16 md:py-20 section-alt">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">SMB客户特点</h2>
        <div class="title-underline mb-10"></div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div class="card card-mint card-tech glow-hover relative">
            <div class="card-accent"></div>
            <div class="badge">基础设施</div>
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <div class="h-12 w-12 aspect-square flex-none shrink-0 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl md:text-2xl">🏗️</div>
                <h4 class="font-semibold text-sm md:text-base">系统部署受限</h4>
              </div>
              <p class="text-gray-600">受限于规模与预算，难以在本地实现高可用与高可靠架构。</p>
            </div>
          </div>

          <div class="card card-lavender card-tech glow-hover relative">
            <div class="card-accent"></div>
            <div class="badge">性能</div>
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <div class="h-12 w-12 aspect-square flex-none shrink-0 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center text-xl md:text-2xl">🚀</div>
                <h4 class="font-semibold text-sm md:text-base">硬件性能瓶颈</h4>
              </div>
              <p class="text-gray-600">硬件逐步淘汰且更新成本高，难以持续满足业务增长的性能需求。</p>
            </div>
          </div>

          <div class="card card-sun card-tech glow-hover relative">
            <div class="card-accent"></div>
            <div class="badge">弹性</div>
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <div class="h-12 w-12 aspect-square flex-none shrink-0 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl md:text-2xl">🌤️</div>
                <h4 class="font-semibold text-sm md:text-base">动态弹性伸缩不足</h4>
              </div>
              <p class="text-gray-600">物理资源固定，无法随业务波动进行弹性扩缩，资源利用率不佳。</p>
            </div>
          </div>

          <div class="card card-coral card-tech glow-hover relative">
            <div class="card-accent"></div>
            <div class="badge">运维</div>
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <div class="h-12 w-12 aspect-square flex-none shrink-0 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-xl md:text-2xl">🧩</div>
                <h4 class="font-semibold text-sm md:text-base">IT运维负担重</h4>
              </div>
              <p class="text-gray-600">系统部署与补丁升级高度依赖人工，升级慢、停机久、人力投入大。</p>
            </div>
          </div>

          <div class="card card-mint card-tech glow-hover relative">
            <div class="card-accent"></div>
            <div class="badge">人才</div>
            <div class="space-y-2">
              <div class="flex items-center gap-3">
                <div class="h-12 w-12 aspect-square flex-none shrink-0 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl md:text-2xl">👩‍💻</div>
                <h4 class="font-semibold text-sm md:text-base">缺乏专业技术人员</h4>
              </div>
              <p class="text-gray-600">缺少云计算专才，虽有上云诉求，但难以充分发挥云的弹性与优势。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 特色服务 -->
    <section id="services" class="py-16 md:py-20 section-alt">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">特色服务</h2>
        <div class="title-underline mb-8"></div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="card card-mint card-tech glow-hover">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">云咨询与战略</h3>
            <p class="text-gray-600 mb-2">从业务目标出发，制定上云路线与治理框架，确保“轻投入、快见效”。</p>
            <router-link class="link" to="/consulting">了解详情</router-link>
          </div>
          <div class="card card-lavender card-tech glow-hover">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">基于工作模型(SoW)的迁移服务</h3>
            <p class="text-gray-600 mb-2">遵循 AWS Well-Architected 最佳实践，安全高效完成迁移。</p>
            <router-link class="link" to="/migration">了解详情</router-link>
          </div>
          <div class="card card-sun card-tech glow-hover">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">基础设施管理</h3>
            <p class="text-gray-600 mb-2">持续监控、自动化运维、容量与成本治理，保障稳定、可扩展、可观测。</p>
            <router-link class="link" to="/infra">了解详情</router-link>
          </div>
          <div class="card card-coral card-tech glow-hover">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">云安全和成本优化</h3>
            <p class="text-gray-600 mb-2">身份与访问、合规与审计、数据保护与告警联动，同时优化用量与计费。</p>
            <router-link class="link" to="/security">了解详情</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 云服务产品目录 -->
    <section id="service-catalog" class="py-16 md:py-20 section-alt">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">云服务产品目录</h2>
        <div class="title-underline mb-8"></div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card card-mint card-tech glow-hover">
            <div class="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mb-4">💡</div>
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">云咨询与战略</h3>
            <p class="text-gray-600 mb-4">为企业提供云战略规划、架构设计、风险评估和数字化转型咨询服务</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="text-emerald-600 mr-2">•</span>
                <span>云战略规划与路线图制定</span>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-600 mr-2">•</span>
                <span>业务需求分析与技术选型</span>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-600 mr-2">•</span>
                <span>风险评估与合规性咨询</span>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-600 mr-2">•</span>
                <span>成本效益分析与ROI评估</span>
              </li>
            </ul>
          </div>

          <div class="card card-lavender card-tech glow-hover">
            <div class="h-12 w-12 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center text-2xl mb-4">🔄</div>
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">基于工作模型(SoW)的迁移服务</h3>
            <p class="text-gray-600 mb-4">基于AWS Well-Architected框架，提供专业的云迁移和附加服务</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="text-violet-600 mr-2">•</span>
                <span>AWS Well-Architected评估</span>
              </li>
              <li class="flex items-start">
                <span class="text-violet-600 mr-2">•</span>
                <span>Lift and Shift迁移方案</span>
              </li>
              <li class="flex items-start">
                <span class="text-violet-600 mr-2">•</span>
                <span>应用重构与现代化</span>
              </li>
              <li class="flex items-start">
                <span class="text-violet-600 mr-2">•</span>
                <span>数据迁移与集成服务</span>
              </li>
            </ul>
          </div>

          <div class="card card-sun card-tech glow-hover">
            <div class="h-12 w-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl mb-4">🖥️</div>
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">基础设施管理</h3>
            <p class="text-gray-600 mb-4">全面的云基础设施管理服务，确保系统稳定运行和高效运维</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="text-amber-600 mr-2">•</span>
                <span>7x24小时监控与运维</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-600 mr-2">•</span>
                <span>自动化部署与配置管理</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-600 mr-2">•</span>
                <span>容量规划与资源优化</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-600 mr-2">•</span>
                <span>备份与灾难恢复</span>
              </li>
            </ul>
          </div>

          <div class="card card-coral card-tech glow-hover">
            <div class="h-12 w-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-2xl mb-4">🛡️</div>
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">云安全和成本优化</h3>
            <p class="text-gray-600 mb-4">全面的云安全防护和成本优化策略，保障企业数据安全</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="text-rose-600 mr-2">•</span>
                <span>身份与访问管理(IAM)</span>
              </li>
              <li class="flex items-start">
                <span class="text-rose-600 mr-2">•</span>
                <span>数据加密与安全监控</span>
              </li>
              <li class="flex items-start">
                <span class="text-rose-600 mr-2">•</span>
                <span>成本分析与优化建议</span>
              </li>
              <li class="flex items-start">
                <span class="text-rose-600 mr-2">•</span>
                <span>合规性审计与报告</span>
              </li>
            </ul>
          </div>

          <div class="card card-mint card-tech glow-hover">
            <div class="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mb-4">👥</div>
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">基于云的生产力和协作工具</h3>
            <p class="text-gray-600 mb-4">提供现代化的云协作工具，提升团队工作效率和沟通效果</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="text-emerald-600 mr-2">•</span>
                <span>云办公套件部署</span>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-600 mr-2">•</span>
                <span>团队协作平台搭建</span>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-600 mr-2">•</span>
                <span>远程办公解决方案</span>
              </li>
              <li class="flex items-start">
                <span class="text-emerald-600 mr-2">•</span>
                <span>文档管理与共享</span>
              </li>
            </ul>
          </div>

          <div class="card card-lavender card-tech glow-hover">
            <div class="h-12 w-12 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center text-2xl mb-4">⚙️</div>
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">云基础设施和服务管理</h3>
            <p class="text-gray-600 mb-4">专业的云服务管理，提供端到端的云基础设施解决方案</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li class="flex items-start">
                <span class="text-violet-600 mr-2">•</span>
                <span>多云环境管理</span>
              </li>
              <li class="flex items-start">
                <span class="text-violet-600 mr-2">•</span>
                <span>服务级别协议(SLA)管理</span>
              </li>
              <li class="flex items-start">
                <span class="text-violet-600 mr-2">•</span>
                <span>性能监控与优化</span>
              </li>
              <li class="flex items-start">
                <span class="text-violet-600 mr-2">•</span>
                <span>技术支持与维护</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- SMB服务分级及其差异化特点 -->
    <section id="solutions" class="py-16 md:py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">SMB服务分级及其差异化特点</h2>
        <div class="title-underline mb-8"></div>
        
        <div class="flex justify-center gap-4 mb-8">
          <button 
            @click="activeTab = 'basic'" 
            :class="['px-6 py-2 rounded-lg font-medium transition-all', activeTab === 'basic' ? 'bg-sky-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
          >
            基础级
          </button>
          <button 
            @click="activeTab = 'intermediate'" 
            :class="['px-6 py-2 rounded-lg font-medium transition-all', activeTab === 'intermediate' ? 'bg-sky-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
          >
            进阶级
          </button>
          <button 
            @click="activeTab = 'comprehensive'" 
            :class="['px-6 py-2 rounded-lg font-medium transition-all', activeTab === 'comprehensive' ? 'bg-sky-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']"
          >
            全面级
          </button>
        </div>

        <div class="space-y-6">
          <!-- 基础级 -->
          <div v-show="activeTab === 'basic'" class="card card-tech">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">基础级 - 刚接触云服务的企业</h3>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">特点</h4>
            <p class="text-gray-700 mb-4">入门级服务，帮助客户了解云服务概念，提供简单的迁移方案，快速上手传统应用</p>
            
            <h4 class="text-lg font-semibold text-gray-800 mb-2">服务内容</h4>
            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>云咨询和战略评估</li>
              <li>Lift and Shift 云迁移服务</li>
              <li>云基础安全评估</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mb-3">详细工作内容</h4>
            <div class="space-y-4">
              <div class="border-l-4 border-sky-500 pl-4">
                <h5 class="font-semibold text-gray-900 mb-2">1. 云咨询与战略评估服务</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>云战略规划：制定长期云战略，明确云服务模型</li>
                  <li>现状评估：分析IT架构与应用，评估云适配性</li>
                  <li>商业价值论证：提供TCO/ROI分析</li>
                  <li>风险管理：识别技术、安全及合规风险</li>
                  <li>实施路径设计：输出分阶段迁移路线图</li>
                </ul>
              </div>
              <div class="border-l-4 border-sky-500 pl-4">
                <h5 class="font-semibold text-gray-900 mb-2">2. Lift and Shift 云迁移服务</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>环境评估：扫描基础设施与应用架构</li>
                  <li>策略定制：设计迁移方案</li>
                  <li>自动化迁移：实现无缝迁移</li>
                  <li>性能调优：实施基准测试与优化</li>
                  <li>持续护航：提供运维支持</li>
                </ul>
              </div>
              <div class="border-l-4 border-sky-500 pl-4">
                <h5 class="font-semibold text-gray-900 mb-2">3. 云安全评估与加固服务</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>安全基线审计：检测云账户配置</li>
                  <li>合规性对标：针对行业规范核查</li>
                  <li>权限治理：审查权限分配</li>
                  <li>防护体系优化：推荐安全增强措施</li>
                  <li>安全意识赋能：提供培训课程</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 进阶级 -->
          <div v-show="activeTab === 'intermediate'" class="card card-tech">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">进阶级 - 有一定云基础的企业</h3>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">特点</h4>
            <p class="text-gray-700 mb-4">针对性强，注重基础设施运行的稳定性及优化，提供安全管理和合规性控制</p>
            
            <h4 class="text-lg font-semibold text-gray-800 mb-2">服务内容</h4>
            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>深入的基础设施管理</li>
              <li>资源优化与监控</li>
              <li>云安全加固措施</li>
              <li>备份和恢复服务</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mb-3">详细工作内容</h4>
            <div class="space-y-4">
              <div class="border-l-4 border-sky-500 pl-4">
                <h5 class="font-semibold text-gray-900 mb-2">1. 深入的基础设施管理</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>基础设施监控：定期监控分析性能</li>
                  <li>配置管理：规范化和自动化配置</li>
                  <li>自动化部署：使用Ansible等工具</li>
                  <li>补丁管理：定期更新系统</li>
                  <li>容量规划：确保资源充足</li>
                </ul>
              </div>
              <div class="border-l-4 border-sky-500 pl-4">
                <h5 class="font-semibold text-gray-900 mb-2">2. 资源优化与监控</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>资源利用率分析：监测评估使用情况</li>
                  <li>成本优化建议：提供优化方案</li>
                  <li>实时监控工具：部署告警系统</li>
                  <li>负载均衡与扩展：优化资源分配</li>
                  <li>性能基准评估：确保性能达标</li>
                </ul>
              </div>
              <div class="border-l-4 border-sky-500 pl-4">
                <h5 class="font-semibold text-gray-900 mb-2">3. 云安全加固措施</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>安全审计与评估：定期安全检查</li>
                  <li>漏洞扫描和管理：及时修复漏洞</li>
                  <li>数据加密：确保数据安全</li>
                  <li>访问控制与身份治理：完善IAM</li>
                  <li>安全事件响应：建立应急预案</li>
                </ul>
              </div>
              <div class="border-l-4 border-sky-500 pl-4">
                <h5 class="font-semibold text-gray-900 mb-2">4. 备份和恢复服务</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>备份策略制定：确保数据安全</li>
                  <li>定期备份实施：自动化备份</li>
                  <li>灾难恢复计划：制定恢复流程</li>
                  <li>恢复验证：定期演练</li>
                  <li>监控和报告：确保任务正常</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 全面级 -->
          <div v-show="activeTab === 'comprehensive'" class="card card-tech">
            <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">全面级 - 熟练掌握云技术的企业</h3>
            <h4 class="text-lg font-semibold text-gray-800 mb-2">特点</h4>
            <p class="text-gray-700 mb-4">综合性强，提供全方位的云解决方案，贴合企业的长期发展战略</p>
            
            <h4 class="text-lg font-semibold text-gray-800 mb-2">服务内容</h4>
            <ul class="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>全面的云咨询与战略制定</li>
              <li>复杂应用架构迁移与重构</li>
              <li>综合的基础设施管理和优化</li>
              <li>成本控制和优化策略</li>
            </ul>

            <h4 class="text-lg font-semibold text-gray-800 mb-3">详细工作内容</h4>
            <div class="space-y-4">
              <div class="border-l-4 border-sky-500 pl-4">
                <h5 class="font-semibold text-gray-900 mb-2">1. 全面的云咨询与战略制定</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>业务需求分析：深入了解业务目标</li>
                  <li>云模型选择：推荐合适的云服务模型</li>
                  <li>迁移准备评估：制定迁移优先级</li>
                  <li>风险评估与缓解：识别潜在风险</li>
                  <li>实施路线图：制定详细计划</li>
                </ul>
              </div>
              <div class="border-l-4 border-sky-500 pl-4">
                <h5 class="font-semibold text-gray-900 mb-2">2. 复杂应用架构迁移与重构</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>架构分析：识别需要重构的部分</li>
                  <li>迁移策略设计：制定适合的策略</li>
                  <li>数据迁移和集成：确保数据安全</li>
                  <li>应用优化：提升可扩展性</li>
                  <li>测试与验证：确保正常运行</li>
                </ul>
              </div>
              <div class="border-l-4 border-sky-500 pl-4">
                <h5 class="font-semibold text-gray-900 mb-2">3. 综合的基础设施管理和优化</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>基础设施监控：实时跟踪管理</li>
                  <li>自动化和配置管理：减少人工干预</li>
                  <li>资源优化：持续优化配置</li>
                  <li>容量规划：满足未来需求</li>
                  <li>安全和合规管理：保障安全性</li>
                </ul>
              </div>
              <div class="border-l-4 border-sky-500 pl-4">
                <h5 class="font-semibold text-gray-900 mb-2">4. 成本控制和优化策略</h5>
                <ul class="list-disc list-inside text-gray-700 space-y-1">
                  <li>成本分析：定期分析费用</li>
                  <li>预算管理：监控花费</li>
                  <li>资源使用优化：降低整体成本</li>
                  <li>自动化成本管理：跟踪实时数据</li>
                  <li>定期审计与报告：生成详细报告</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 成功案例 -->
    <section id="cases" class="py-16 md:py-20">
      <div class="section-surface">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">SMB客户成功案例</h2>
        <div class="title-underline mb-8"></div>
        <p class="text-center text-gray-600 mb-6">看看我们如何帮助客户实现业务目标</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="card card-mint card-tech glow-hover">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">广西锋锐信息技术服务有限公司上云成功案例</h3>
            <p class="text-gray-600">帮助企业完成AWS云迁移，提升系统性能，降低运维成本</p>
            <router-link class="link" to="/cases/1">查看详情</router-link>
          </div>
          <div class="card card-lavender card-tech glow-hover">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">武汉柏锐科技有限公司上云成功案例</h3>
            <p class="text-gray-600">为游戏公司提供高性能云托管服务，支持全球玩家同时在线</p>
            <router-link class="link" to="/cases/2">查看详情</router-link>
          </div>
          <div class="card card-sun card-tech glow-hover">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">某企业库存管理系统上云成功案例</h3>
            <p class="text-gray-600">为库存管理系统提供稳定可靠的云服务，提升用户体验</p>
            <router-link class="link" to="/cases/3">查看详情</router-link>
          </div>
          <div class="card card-coral card-tech glow-hover">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">某企业数据管理系统上云成功案例</h3>
            <p class="text-gray-600">为企业提供强大的计算和存储资源，提高数据处理能力</p>
            <router-link class="link" to="/cases/4">查看详情</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户评价 -->
    <section id="testimonials" class="py-16 md:py-20">
      <div class="section-surface">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">客户怎么说</h2>
        <div class="title-underline mb-8"></div>
          <div class="carousel">
          <div class="carousel-track">
            <div v-for="(t, i) in loopTestimonials" :key="i" class="card min-w-[300px] md:min-w-[420px]">
              <p class="text-gray-700 leading-7 mb-4">“{{ t.quote }}”</p>
              <div class="text-sm text-gray-500">— {{ t.author }}，{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="py-16 md:py-20 section-alt">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">关于我们</h2>
        <div class="title-underline mb-6"></div>
        <div class="space-y-5 text-gray-700 leading-8 text-base md:text-lg">
          <p>
            点一云是一家专注于云服务的专业公司，致力于为客户提供云运维托管、成本管理、架构咨询、云迁移、数据库等服务，覆盖游戏、音视频直播、WEB3、零售电商、AI智能、新能源等行业。始终为客户提供可信赖的云上服务与解决方案，通过与各大云原厂的技术深度集成，为客户提供音视频直播、WEB3区块链生态、现代AI智能分析、游戏托管运维、电商服务、内容审核等多行业解决方案，并将持续探索云计算创新云改革，为客户提供更全面、高效、安全的云服务，助力其在数字化时代取得成功。
          </p>
          <p>
            我们专注于AWS云原生架构设计、云迁移服务、云安全优化和成本管理，帮助中小企业降低IT成本，提升业务效率，实现可持续发展。
          </p>
          <p>
            点一云总部位于香港，在迪拜、深圳设有分公司，现有团队已有50+人，公司具有AWS、腾讯云、华为云等专业认证。成员均为在IT互联网行业服务三年以上，拥有丰富的技术以及经验。
          </p>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="py-16 md:py-20">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">联系我们</h2>
        <div class="title-underline mb-8"></div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="card flex items-start gap-4">
            <span class="text-sky-600 mt-1">✉️</span>
            <div>
              <h4 class="font-semibold">邮箱</h4>
              <p><a class="link" href="mailto:san@dycloud.ai">san@dycloud.ai</a></p>
            </div>
          </div>
          <div class="card flex items-start gap-4">
            <span class="text-sky-600 mt-1">📞</span>
            <div>
              <h4 class="font-semibold">电话</h4>
              <p><a class="link" href="tel:15989283653">15989283653 劉先生</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-10 bg-gray-900 text-gray-300">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 class="font-semibold mb-3 text-white">服务产品</h4>
            <ul class="space-y-2 text-gray-400">
              <li><router-link :to="{ path: '/', hash: '#services' }" class="text-sky-300 hover:text-sky-200 underline underline-offset-4">云咨询与战略</router-link></li>
              <li><router-link :to="{ path: '/', hash: '#services' }" class="text-sky-300 hover:text-sky-200 underline underline-offset-4">云迁移服务</router-link></li>
              <li><router-link :to="{ path: '/', hash: '#services' }" class="text-sky-300 hover:text-sky-200 underline underline-offset-4">基础设施管理</router-link></li>
              <li><router-link :to="{ path: '/', hash: '#services' }" class="text-sky-300 hover:text-sky-200 underline underline-offset-4">云安全与优化</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-3 text-white">公司</h4>
            <ul class="space-y-2 text-gray-400">
              <li><router-link :to="{ path: '/', hash: '#about' }" class="text-sky-300 hover:text-sky-200 underline underline-offset-4">关于我们</router-link></li>
              <li><router-link :to="{ path: '/', hash: '#cases' }" class="text-sky-300 hover:text-sky-200 underline underline-offset-4">成功案例</router-link></li>
              <li><router-link :to="{ path: '/', hash: '#contact' }" class="text-sky-300 hover:text-sky-200 underline underline-offset-4">联系我们</router-link></li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-gray-400">© 2025 DYCloud.ltd 保留所有权利.</p>
      </div>
    </footer>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logoUrl from '@/assets/web/logo.CX6W3yQJ.jpg'

const testimonials = [
  { quote: '从评估到上线仅用数周，性能提升明显，成本更可控。', author: '李先生', role: '电商行业 CTO' },
  { quote: '迁移过程平滑透明，风险控制得当，值得信赖。', author: '王女士', role: '在线教育技术负责人' },
  { quote: '自动化运维让小团队也能保持高可靠与高效率。', author: '陈先生', role: 'SaaS 创始人' }
]

const loopTestimonials = [...testimonials, ...testimonials]
const activeTab = ref<'basic' | 'intermediate' | 'comprehensive'>('basic')
</script>

<style scoped>
</style>


