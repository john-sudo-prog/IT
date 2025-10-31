<template>
  <div class="bg-white">
    <!-- Navbar -->
    <header class="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-gray-800">
        <div class="flex items-center gap-3">
          <img :src="logoUrl" alt="LOGO" class="h-9 w-auto" />
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

    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-center text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-10">基础设施管理详述</h2>
        <h3 class="text-2xl font-semibold mt-10 mb-4 text-center">监控和维护</h3>
        <ul class="list-disc pl-6 space-y-3 text-gray-700 max-w-3xl mx-auto text-lg leading-8">
          <li>实时监控：24/7 观测核心指标（CPU/内存/网络），快速定位异常。</li>
          <li>预警机制：阈值触发与告警联动，问题未发生先感知、先处置。</li>
        </ul>

        <h3 class="text-2xl font-semibold mt-10 mb-4 text-center">资源管理</h3>
        <ul class="list-disc pl-6 space-y-3 text-gray-700 max-w-3xl mx-auto text-lg leading-8">
          <li>资源优化：依据使用画像动态调优实例、存储与带宽，避免浪费。</li>
          <li>成本控制：提供细粒度用量报告与建议，确保预算可控。</li>
        </ul>

        <h3 class="text-2xl font-semibold mt-10 mb-4 text-center">灾难恢复</h3>
        <ul class="list-disc pl-6 space-y-3 text-gray-700 max-w-3xl mx-auto text-lg leading-8">
          <li>DR 方案：按业务RPO/RTO制定备份与恢复流程，满足合规与连续性。</li>
          <li>演练与测试：定期演练验证可恢复性，确保突发情况快速复原。</li>
        </ul>
      </div>
    </section>

    <footer class="border-t border-gray-100 py-10">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 class="font-semibold mb-3">服务产品</h4>
            <ul class="space-y-2 text-gray-600">
              <li><a href="/#services" class="hover:text-blue-600">云咨询与战略</a></li>
              <li><a href="/#services" class="hover:text-blue-600">云迁移服务</a></li>
              <li><a href="/#services" class="hover:text-blue-600">基础设施管理</a></li>
              <li><a href="/#services" class="hover:text-blue-600">云安全与优化</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-3">公司</h4>
            <ul class="space-y-2 text-gray-600">
              <li><a href="/#about" class="hover:text-blue-600">关于我们</a></li>
              <li><a href="/#cases" class="hover:text-blue-600">成功案例</a></li>
              <li><a href="/#contact" class="hover:text-blue-600">联系我们</a></li>
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
</script>

<style scoped>
</style>


