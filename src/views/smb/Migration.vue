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
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800">Lift and Shift 迁移服务</h1>
      </div>
    </section>

    <main class="max-w-5xl mx-auto px-6 py-14">
      <p class="text-gray-700 leading-relaxed">在最小改造的前提下将应用与数据迁移至AWS，快速获得云的弹性、灵活与成本优势。</p>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">关键步骤</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>评估：识别适合直接迁移的工作负载，理清依赖、性能与合规需求。</li>
          <li>规划：制定与 AWS Well-Architected 原则一致的迁移计划与时间表。</li>
          <li>执行：使用 AWS Migration Hub、Application Migration Service、DMS 等工具实施迁移。</li>
          <li>测试：进行性能、安全与功能验证，确保云上运行稳定。</li>
          <li>优化：按需扩缩容、实例规格调整或无服务器化改造，提升性价比。</li>
        </ul>
      </section>

      <section class="mt-12">
        <h3 class="text-2xl font-semibold mb-4">基于工作说明书(SoW)的附加服务</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>云原生重构：引入托管数据库、微服务架构与自动扩缩容。</li>
          <li>成本优化：通过 AWS Cost Explorer/Budgets 等工具建立成本治理机制。</li>
          <li>安全与合规：完善 IAM、网络安全组、CloudTrail/GuardDuty 等监控与审计。</li>
          <li>监控与管理：落地 CloudWatch 等可观测能力，保障可用性与可靠性。</li>
          <li>备份与灾难恢复：使用 AWS Backup 与 S3 设计备份与跨域容灾方案。</li>
          <li>培训与支持：面向运维与开发团队的云技能培训与驻场支持。</li>
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


