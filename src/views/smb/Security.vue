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
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">云安全与成本优化</h1>
      </div>
    </section>

    <main class="max-w-5xl mx-auto px-6 py-14">

      <section class="space-y-6 text-gray-700 leading-relaxed">
        <h3 class="text-2xl font-semibold">云安全评估</h3>
        <ul class="list-disc pl-6 space-y-2">
          <li>漏洞扫描与配置体检：发现潜在风险与错误配置，并提出加固建议。</li>
          <li>安全架构增强：多因素认证、网络分段、数据加密与密钥管理。</li>
        </ul>
      </section>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">合规性管理</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>对标 GDPR/HIPAA/等保2.0 等标准，提供证据链文档与审计报告。</li>
        </ul>
      </section>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">成本优化策略</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>资源使用分析与优化：识别闲置/过配资源，给出降本方案。</li>
          <li>预算与告警：结合企业预算设定阈值与告警，持续优化 TCO。</li>
          <li>云财务管理四支柱：查看、成本节省、计划与运营，形成闭环治理。</li>
        </ul>
      </section>

      <div class="mt-12">
        <router-link to="/" class="btn btn-primary">← 返回首页</router-link>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import logoUrl from '@/assets/web/logo.CX6W3yQJ.jpg'
</script>

<style scoped>
</style>


