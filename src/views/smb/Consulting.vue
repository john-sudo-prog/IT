<template>
  <div class="min-h-screen">
    <header class="sticky top-0 z-30 glass-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-gray-800">
        <router-link to="/" class="flex items-center gap-3 cursor-pointer">
          <img :src="logoUrl" alt="LOGO" class="h-9 w-auto" />
        </router-link>
      </div>
    </header>

    <section class="relative isolate overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-sky-50 to-blue-50"></div>
        <div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-sky-200/60 to-indigo-200/60 blur-3xl"></div>
        <div class="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-teal-200/50 to-sky-200/50 blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">云咨询与战略</h1>
      </div>
    </section>

    <main class="max-w-5xl mx-auto px-6 py-14">

      <p class="text-gray-700 leading-relaxed">在当今快速变化的技术环境中，企业为了保持竞争力，必须认真对待云策略。我们的云咨询与战略服务专为小型和中型企业（SMB）设计，致力于帮助他们制定和实施有效的云战略。</p>

      <section class="mt-12 space-y-6 text-gray-700 leading-relaxed">
        <h3 class="text-2xl font-semibold">2.1 评估云适应性</h3>
        <p>根据上云动机对业务进行分类：若已有业务从线下迁移至云上，称为“业务迁移上云”；若新业务首发即在云上部署，称为“业务创新上云”。</p>
        <h4 class="text-xl font-semibold">业务迁移上云（典型目标）</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>加速资源交付：云上资源近乎实时交付，显著缩短传统IDC的采购周期。</li>
          <li>降低成本：由Capex转为Opex按量计费，减少一次性投入并按需购买。</li>
          <li>获取最新技术：云原生中间件、容器等能力可快速采用。</li>
          <li>提升安全性：依托云厂商的大规模在线安全能力，更好地应对互联网攻击。</li>
        </ul>
        <h4 class="text-xl font-semibold">业务创新上云（典型目标）</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>快速获取创新能力：IoT、大数据、AI/中台等PaaS、SaaS能力开箱可用。</li>
          <li>更快进入新市场：弹性扩缩容、全球可达，支持业务快速试错与迭代。</li>
        </ul>
        <h4 class="text-xl font-semibold">过程与方法</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li>现状分析：全面分析硬件/软件/网络与业务流程，定位性能与效率瓶颈。</li>
          <li>云适应性评分：从性能、可扩展性、安全与合规等维度量化评估与分级。</li>
          <li>业务影响分析：对齐业务优先级，优先迁移可最大化业务价值的工作负载。</li>
        </ul>
      </section>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">2.2 制定云战略</h3>
        <h4 class="text-xl font-semibold">组织与治理准备</h4>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>企业管理层：明确云在企业战略中的定位与目标。</li>
          <li>云卓越中心（虚拟组织）：架构/技术人员负责上云架构与迁移，安全/合规专家制定治理与风控，财务专家定义成本分摊与预算流程。</li>
          <li>云管理团队：建设云上运维体系与自动化平台，持续优化架构与资源交付（资产/权限/自动化）。</li>
        </ul>
        <h4 class="text-xl font-semibold mt-6">战略制定流程</h4>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>业务需求对齐：围绕降本、灵活性、创新力等目标形成一致共识。</li>
          <li>迁移路线图：短期（快速见效）、中期（规模化迁移）、长期（技术与基础设施演进）。</li>
          <li>云服务模型选择：结合财务、合规、性能选择公有云/私有云/混合云。</li>
        </ul>
      </section>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">2.3 实施最佳实践</h3>
        <h4 class="text-xl font-semibold">最佳实践框架</h4>
        <p class="text-gray-700">遵循 <a href="https://aws.amazon.com/architecture/well-architected/" target="_blank" rel="noopener noreferrer" class="link">AWS Well-Architected Framework</a> 六大支柱：卓越操作性、安全性、可靠性、性能效率、成本优化、可持续性。</p>
        <h4 class="text-xl font-semibold mt-6">持续改进与赋能</h4>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>持续反馈与调整：基于运行数据与使用反馈，滚动优化架构与治理策略。</li>
          <li>培训与知识转移：体系化培训，确保团队具备独立管理与优化云环境的能力。</li>
        </ul>
        <p class="text-gray-700 mt-4">我们提供端到端的咨询与战略落地支持，帮助企业在云环境中实现转型与创新。</p>
        <figure class="mt-8">
          <img :src="waImgUrl" alt="Well-Architected" class="w-full h-auto rounded-2xl shadow-xl" />
          <figcaption class="mt-3 text-sm text-gray-600">Well-Architected Framework 六大支柱</figcaption>
        </figure>
      </section>

      <div class="mt-12">
        <router-link to="/" class="btn btn-primary">← 返回首页</router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import logoUrl from '@/assets/web/logo.CX6W3yQJ.jpg'
import waImgUrl from '@/assets/web/well-architected.png'
</script>

<style scoped>
</style>


