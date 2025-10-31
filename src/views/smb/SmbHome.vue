<template>
  <div class="bg-white text-gray-800">
    <!-- Navbar -->
    <header class="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-gray-800">
        <div class="flex items-center gap-3">
          <img :src="logoUrl" alt="LOGO" class="h-9 w-auto" />
        </div>
        <nav class="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" class="hover:text-indigo-600">首页</a>
          <a href="#services" class="hover:text-indigo-600">云服务产品</a>
          <a href="#solutions" class="hover:text-indigo-600">SMB服务级别</a>
          <a href="#cases" class="hover:text-indigo-600">成功案例</a>
          <a href="#about" class="hover:text-indigo-600">关于我们</a>
          <a href="#contact" class="hover:text-indigo-600">联系我们</a>
        </nav>
      </div>
    </header>

    <!-- Hero -->
    <section id="home" class="relative isolate text-white overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <img :src="heroBg" alt="hero" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-slate-900/60"></div>
        <div class="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-400/40 to-sky-500/40 blur-3xl"></div>
        <div class="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-300/40 to-indigo-400/40 blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">中小企业云服务专家</h1>
        <p class="text-white/90 text-base md:text-xl max-w-3xl mx-auto mb-8">为中小企业提供全方位的云服务解决方案，助力数字化转型</p>
        <div class="flex items-center justify-center gap-3">
          <a href="#services" class="inline-block px-6 py-3 rounded-full font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-900/20">了解我们的服务</a>
          <a href="#contact" class="inline-block px-6 py-3 rounded-full font-semibold text-indigo-700 bg-white/90 hover:bg-white">联系我们</a>
        </div>
      </div>
    </section>

    <!-- 什么是SMB -->
    <section id="smb-intro" class="py-16 md:py-20 bg-neutral-50">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">什么是SMB</h2>
        <div class="h-1 w-16 mx-auto rounded-full bg-indigo-600 mb-6"></div>
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
    <section id="smb-features" class="py-16 md:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">SMB客户特点</h2>
        <div class="h-1 w-16 mx-auto rounded-full bg-indigo-600 mb-8"></div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h4 class="text-lg md:text-xl font-semibold tracking-tight mb-2">系统部署受限</h4>
            <p class="text-gray-600">受限于规模与预算，难以在本地实现高可用与高可靠架构。</p>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h4 class="text-lg md:text-xl font-semibold tracking-tight mb-2">硬件性能瓶颈</h4>
            <p class="text-gray-600">硬件逐步淘汰且更新成本高，难以持续满足业务增长的性能需求。</p>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h4 class="text-lg md:text-xl font-semibold tracking-tight mb-2">动态弹性伸缩不足</h4>
            <p class="text-gray-600">物理资源固定，无法随业务波动进行弹性扩缩，资源利用率不佳。</p>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h4 class="text-lg md:text-xl font-semibold tracking-tight mb-2">IT运维负担重</h4>
            <p class="text-gray-600">系统部署与补丁升级高度依赖人工，升级慢、停机久、人力投入大。</p>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h4 class="text-lg md:text-xl font-semibold tracking-tight mb-2">缺乏专业技术人员</h4>
            <p class="text-gray-600">缺少云计算专才，虽有上云诉求，但难以充分发挥云的弹性与优势。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 我们的价值 -->
    <section id="value" class="py-16 md:py-20 bg-neutral-50">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">为什么选择点一云</h2>
        <div class="h-1 w-16 mx-auto rounded-full bg-indigo-600 mb-8"></div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200">
            <h4 class="text-lg md:text-xl font-semibold mb-2">专家团队</h4>
            <p class="text-gray-600">AWS/腾讯云/华为云多项认证，深耕行业多年，最佳实践沉淀。</p>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200">
            <h4 class="text-lg md:text-xl font-semibold mb-2">可衡量的价值</h4>
            <p class="text-gray-600">以业务指标为导向，聚焦性能、可靠、成本、安全四大目标。</p>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200">
            <h4 class="text-lg md:text-xl font-semibold mb-2">端到端服务</h4>
            <p class="text-gray-600">从咨询到运维的全生命周期陪伴，落地见效更快更稳。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 特色服务 -->
    <section id="services" class="py-16 md:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">特色服务</h2>
        <div class="h-1 w-16 mx-auto rounded-full bg-indigo-600 mb-8"></div>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">云咨询与战略</h3>
            <p class="text-gray-600 mb-2">从业务目标出发，制定上云路线与治理框架，确保“轻投入、快见效”。</p>
            <router-link class="text-indigo-600 hover:underline" to="/consulting">了解详情</router-link>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">基于工作模型(SoW)的迁移服务</h3>
            <p class="text-gray-600 mb-2">遵循 AWS Well-Architected 最佳实践，安全高效完成迁移。</p>
            <router-link class="text-indigo-600 hover:underline" to="/migration">了解详情</router-link>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">基础设施管理</h3>
            <p class="text-gray-600 mb-2">持续监控、自动化运维、容量与成本治理，保障稳定、可扩展、可观测。</p>
            <router-link class="text-indigo-600 hover:underline" to="/infra">了解详情</router-link>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">云安全和成本优化</h3>
            <p class="text-gray-600 mb-2">身份与访问、合规与审计、数据保护与告警联动，同时优化用量与计费。</p>
            <router-link class="text-indigo-600 hover:underline" to="/security">了解详情</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 成功案例 -->
    <section id="cases" class="py-16 md:py-20 bg-neutral-50">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">SMB客户成功案例</h2>
        <div class="h-1 w-16 mx-auto rounded-full bg-indigo-600 mb-8"></div>
        <p class="text-center text-gray-600 mb-6">看看我们如何帮助客户实现业务目标</p>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">广西锋锐信息技术服务有限公司上云成功案例</h3>
            <p class="text-gray-600">帮助企业完成AWS云迁移，提升系统性能，降低运维成本</p>
            <router-link class="text-indigo-600 hover:underline" to="/cases/1">查看详情</router-link>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">武汉柏锐科技有限公司上云成功案例</h3>
            <p class="text-gray-600">为游戏公司提供高性能云托管服务，支持全球玩家同时在线</p>
            <router-link class="text-indigo-600 hover:underline" to="/cases/2">查看详情</router-link>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">某企业库存管理系统上云成功案例</h3>
            <p class="text-gray-600">为库存管理系统提供稳定可靠的云服务，提升用户体验</p>
            <router-link class="text-indigo-600 hover:underline" to="/cases/3">查看详情</router-link>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 hover:shadow-md transition">
            <h3 class="text-lg md:text-xl font-semibold tracking-tight mb-2">某企业数据管理系统上云成功案例</h3>
            <p class="text-gray-600">为企业提供强大的计算和存储资源，提高数据处理能力</p>
            <router-link class="text-indigo-600 hover:underline" to="/cases/4">查看详情</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section id="partners" class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-between gap-6 flex-wrap opacity-80">
          <img v-for="(logo, idx) in partnerLogos" :key="idx" :src="logo" alt="partner" class="h-10 md:h-12 w-auto object-contain" />
        </div>
      </div>
    </section>

    <!-- 客户评价 -->
    <section id="testimonials" class="py-16 md:py-20 bg-neutral-50">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">客户怎么说</h2>
        <div class="h-1 w-16 mx-auto rounded-full bg-indigo-600 mb-8"></div>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(t, i) in testimonials" :key="i" class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200">
            <p class="text-gray-700 leading-7 mb-4">“{{ t.quote }}”</p>
            <div class="text-sm text-gray-500">— {{ t.author }}，{{ t.role }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 关于我们 -->
    <section id="about" class="py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">关于我们</h2>
        <div class="h-1 w-16 mx-auto rounded-full bg-indigo-600 mb-6"></div>
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
    <section id="contact" class="py-16 md:py-20 bg-neutral-50">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">联系我们</h2>
        <div class="h-1 w-16 mx-auto rounded-full bg-indigo-600 mb-8"></div>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 flex items-start gap-4">
            <span class="text-indigo-600 mt-1">✉️</span>
            <div>
              <h4 class="font-semibold">邮箱</h4>
              <p><a class="text-indigo-600 hover:underline" href="mailto:san@dycloud.ai">san@dycloud.ai</a></p>
            </div>
          </div>
          <div class="p-8 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 flex items-start gap-4">
            <span class="text-indigo-600 mt-1">📞</span>
            <div>
              <h4 class="font-semibold">电话</h4>
              <p><a class="text-indigo-600 hover:underline" href="tel:15989283653">15989283653 劉先生</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-gray-100 py-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 class="font-semibold mb-3">服务产品</h4>
            <ul class="space-y-2 text-gray-600">
              <li><a href="#services" class="hover:text-indigo-600">云咨询与战略</a></li>
              <li><a href="#services" class="hover:text-indigo-600">云迁移服务</a></li>
              <li><a href="#services" class="hover:text-indigo-600">基础设施管理</a></li>
              <li><a href="#services" class="hover:text-indigo-600">云安全与优化</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-3">公司</h4>
            <ul class="space-y-2 text-gray-600">
              <li><a href="#about" class="hover:text-indigo-600">关于我们</a></li>
              <li><a href="#cases" class="hover:text-indigo-600">成功案例</a></li>
              <li><a href="#contact" class="hover:text-indigo-600">联系我们</a></li>
            </ul>
          </div>
        </div>
        <p class="text-sm text-gray-500">© 2025 DYCloud.ltd 保留所有权利.</p>
      </div>
    </footer>
  </div>
  
</template>

<script setup lang="ts">
import logoUrl from '@/assets/web/logo.CX6W3yQJ.jpg'
import heroBg from '@/assets/img/bg.jpg'
import partner1 from '@/assets/img/partner/1.jpg'
import partner2 from '@/assets/img/partner/2.jpg'
import partner3 from '@/assets/img/partner/3.jpg'
import partner4 from '@/assets/img/partner/4.jpg'
import partner5 from '@/assets/img/partner/5.jpg'
import partner6 from '@/assets/img/partner/6.jpg'

const partnerLogos = [partner1, partner2, partner3, partner4, partner5, partner6]

const testimonials = [
  { quote: '从评估到上线仅用数周，性能提升明显，成本更可控。', author: '李先生', role: '电商行业 CTO' },
  { quote: '迁移过程平滑透明，风险控制得当，值得信赖。', author: '王女士', role: '在线教育技术负责人' },
  { quote: '自动化运维让小团队也能保持高可靠与高效率。', author: '陈先生', role: 'SaaS 创始人' }
]
</script>

<style scoped>
</style>


