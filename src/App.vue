<template>
  <div class="min-h-screen bg-white">
    <!-- 导航栏 -->
    <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-2">
            <Code class="h-8 w-8 text-blue-600" />
            <div class="flex flex-col">
              <span class="text-xl font-bold text-gray-900">代码未来</span>
              <span class="text-sm text-blue-600">智创无限</span>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#services" class="text-gray-600 hover:text-blue-600 transition-colors">服务领域</a>
            <a href="#advantages" class="text-gray-600 hover:text-blue-600 transition-colors">核心优势</a>
            <a href="#cases" class="text-gray-600 hover:text-blue-600 transition-colors">客户案例</a>
            <a href="#cooperation" class="text-gray-600 hover:text-blue-600 transition-colors">合作模式</a>
            <a href="#contact" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">联系我们</a>
          </div>
          <button @click="toggleMobileMenu" class="md:hidden">
            <Menu class="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
      
      <!-- 移动端菜单 -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-100">
        <div class="px-4 py-2 space-y-2">
          <a href="#services" class="block py-2 text-gray-600 hover:text-blue-600">服务领域</a>
          <a href="#advantages" class="block py-2 text-gray-600 hover:text-blue-600">核心优势</a>
          <a href="#cases" class="block py-2 text-gray-600 hover:text-blue-600">客户案例</a>
          <a href="#cooperation" class="block py-2 text-gray-600 hover:text-blue-600">合作模式</a>
          <a href="#contact" class="block py-2 text-blue-600 font-medium">联系我们</a>
        </div>
      </div>
    </nav>

    <!-- 路由视图 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Code, Menu } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<style scoped>
/* 自定义滚动条 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 渐入动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
</style>