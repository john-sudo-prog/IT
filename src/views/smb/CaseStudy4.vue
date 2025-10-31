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
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight">某公司 | 内部数据管理平台</h1>
      </div>
    </section>

    <main class="max-w-5xl mx-auto px-6 py-14">

      <section class="space-y-6 text-gray-700 leading-relaxed">
        <h3 class="text-2xl font-semibold">1. 项目背景</h3>
        <p>某公司是一家中小型创新型企业，现有员工约30人，年营业额约400万美元。公司专注于法律服务与数字化转型，业务涵盖法律咨询、合规管理、诉讼支持等多个方向，其中内部数据管理平台是公司运营管理的核心系统之一。</p>
        <p>该平台致力于构建一个安全、高效、智能且合规的法律业务管理系统。平台整合案件管理、客户信息、法律文档存储与检索功能，具备高并发处理能力，能够支持公司内部海量法律文档的实时管理与处理，并通过顶级安全防护保障公司及客户敏感数据安全。随着业务国际化发展，需要为不同地区办公室提供统一的数据管理服务。</p>
        <p>随着业务扩展，新加坡办公室访问深圳服务器时存在明显延迟，尤其在大型案件与紧急事务期间，数据同步波动更突出；同时外部网络攻击与 DDoS 事件增多，影响办公与客户服务。基于此，建议采用 AWS 云技术重构平台，实现弹性伸缩、安全合规与便捷运维。</p>
      </section>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">2. 项目目标</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li><b>降低访问延迟：</b>在 AWS 新加坡区域部署 EC2，就近访问显著加速，保证高峰期数据处理流畅。</li>
          <li><b>增强安全性：</b>使用 AWS Shield 与 WAF 等安全服务，抵御网络与 DDoS 攻击，保护敏感法律数据与客户信息。</li>
          <li><b>提升业务可用性：</b>通过 ELB + 多可用区 EC2 消除单点故障，确保案件高峰与紧急处理时平台稳定。</li>
          <li><b>优化性能与成本：</b>以 Auto Scaling 按需伸缩 EC2 容量，结合 Reserved Instances 与成本工具降低 TCO。</li>
          <li><b>持续技术支持：</b>在 AWS 与点一云支持下，建立性能评估与安全审计机制，持续优化平台能力。</li>
        </ul>
      </section>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">3. 项目架构图</h3>
        <figure class="mt-6">
          <img :src="archUrl" alt="内部数据管理平台 AWS 参考架构" class="w-full h-auto rounded-2xl shadow-xl" />
          <figcaption class="mt-3 text-sm text-gray-600">架构要点：多可用区 VPC、公私子网、ALB 前端与 Auto Scaling EC2 应用层，S3 存储与端点、Aurora/MySQL 读写分离，前置 WAF/CloudFront/Route53，配合 CloudWatch/CloudTrail/KMS 审计与密钥管理</figcaption>
        </figure>
      </section>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">4. 项目成果</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li><b>显著降低延迟：</b>新加坡区域就近部署，跨境访问延迟明显下降，办公效率与处理速度提升。</li>
          <li><b>安全性增强：</b>Shield + WAF 自动化防护，约 95% 常见攻击被拦截，内部与客户数据更安全。</li>
          <li><b>高可用保障：</b>ELB + 多可用区 EC2 提升可用性至 99.9% 级别，案件高峰与紧急事务期间保持稳定。</li>
          <li><b>性能与成本优化：</b>Auto Scaling 高峰稳定、低谷降本；Reserved Instances 等策略降低长期成本。</li>
          <li><b>持续改进能力：</b>建立例行评估与安全审计流程，持续优化系统以适配业务扩展。</li>
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
import archUrl from '@/assets/web/case4-architecture.png'
</script>

<style scoped>
</style>


