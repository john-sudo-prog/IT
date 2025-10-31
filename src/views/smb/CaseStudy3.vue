<template>
  <div class="bg-white min-h-screen">
    <header class="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-gray-800">
        <div class="flex items-center gap-3">
          <img :src="logoUrl" alt="LOGO" class="h-9 w-auto" />
          <router-link to="/" class="font-semibold">点一云</router-link>
        </div>
        <nav class="hidden md:flex items-center gap-8 text-sm">
          <router-link to="/" class="hover:text-indigo-600">首页</router-link>
          <a href="/#services" class="hover:text-indigo-600">云服务产品</a>
          <a href="/#solutions" class="hover:text-indigo-600">SMB服务级别</a>
          <a href="/#cases" class="hover:text-indigo-600">成功案例</a>
          <a href="/#about" class="hover:text-indigo-600">关于我们</a>
          <a href="/#contact" class="hover:text-indigo-600">联系我们</a>
        </nav>
      </div>
    </header>

    <section class="relative isolate text-white overflow-hidden">
      <div class="absolute inset-0 -z-10 bg-slate-900">
        <div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-400/40 to-indigo-500/40 blur-3xl"></div>
        <div class="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-amber-300/40 to-rose-400/40 blur-3xl"></div>
      </div>
      <div class="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight">某公司 | 库存管理系统</h1>
      </div>
    </section>

    <main class="max-w-5xl mx-auto px-6 py-14">

      <section class="space-y-6 text-gray-700 leading-relaxed">
        <h3 class="text-2xl font-semibold">1. 项目背景</h3>
        <p>某公司是一家中小型创新型企业，现有员工约50人，年营业额约900万美元。公司专注于旅游业务与数字化转型，业务涵盖旅游产品销售、行程规划、客户服务等多个方向，其中库存管理系统是公司运营管理的核心系统之一。</p>
        <p>该库存管理系统致力于构建一个安全、高效、智能且可靠的旅游业务管理系统。平台整合产品库存管理、客户订单、旅游资源存储与检索功能，具备高并发处理能力，能够支持公司内部海量旅游产品数据的实时管理和处理需求，并通过顶级安全防护保障公司及客户敏感数据安全无虞。随着公司业务国际化发展，该平台需要为公司在不同地区的办公室提供统一的库存管理服务。</p>
        <p>随着业务的不断扩展，现有本地化 IT 基础设施面临挑战：旺季性能瓶颈导致查询与下单延迟；数据量增长带来存储扩容与频繁硬件升级；缺少专业运维团队导致维护依赖外包且成本高；安全防护能力有限，存在数据泄露与中断风险。基于此，建议采用 AWS 云技术重构系统，实现弹性伸缩、安全合规与便捷运维。</p>
      </section>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">2. 项目目标</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li><b>降低访问延迟：</b>在 AWS 弗吉尼亚北部区域部署 EC2，提高旺季处理能力并降低响应延迟，保障查询与下单流畅。</li>
          <li><b>增强安全性：</b>使用 AWS Shield 与 WAF 等安全服务，抵御网络与 DDoS 攻击，保护敏感数据与业务连续性。</li>
          <li><b>提升业务可用性：</b>借助 ELB 与多可用区 EC2 架构消除单点故障，确保库存服务在高峰与紧急订单时稳定运行。</li>
          <li><b>优化性能与成本：</b>通过 Auto Scaling 按需伸缩 EC2 容量，结合 Reserved Instances 与成本工具优化 TCO。</li>
          <li><b>持续技术支持：</b>在 AWS 与点一云支持下建立持续评估与改进机制，快速响应新需求与挑战。</li>
        </ul>
      </section>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">3. 项目架构图</h3>
        <figure class="mt-6">
          <img :src="archUrl" alt="库存管理系统 AWS 参考架构" class="w-full h-auto rounded-2xl shadow-xl" />
          <figcaption class="mt-3 text-sm text-gray-600">架构要点：多可用区 VPC、公私子网、Auto Scaling 的 EC2 应用层，私有 API + Lambda 处理、S3 端点、MySQL 主读写分离，前置 CloudFront/Route53/WAF，配合 CloudWatch/CloudTrail/KMS 审计与密钥管理</figcaption>
        </figure>
      </section>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">4. 项目成果</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li><b>显著降低延迟：</b>高性能 EC2 与弹性伸缩，旺季响应时间显著下降，查询与订单处理更流畅。</li>
          <li><b>安全性增强：</b>Shield + WAF 自动化防护，约 95% 常见攻击被拦截，内部数据安全与合规性提升。</li>
          <li><b>高可用保障：</b>ALB + 多可用区 EC2 确保服务连续性，旺季与突发情况下仍可稳定提供库存服务。</li>
          <li><b>性能与成本优化：</b>Auto Scaling 提升高并发承载并在低谷降本；Reserved Instances 等手段降低长期成本。</li>
          <li><b>持续改进能力：</b>建立性能评估与安全审计机制，持续优化系统以支撑业务扩展与国际化需求。</li>
        </ul>
      </section>

      <div class="mt-12">
        <router-link to="/" class="inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 shadow-lg shadow-sky-900/20 hover:opacity-95">← 返回首页</router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import logoUrl from '@/assets/web/logo.CX6W3yQJ.jpg'
import archUrl from '@/assets/web/case3-architecture.png'
</script>

<style scoped>
</style>


