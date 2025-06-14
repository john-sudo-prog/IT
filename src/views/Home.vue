<template>
  <div class="bg-gradient-to-b from-white to-blue-50">
    <!-- 导航栏 -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="max-w-[1200px] mx-auto">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <div class="flex flex-col">
                <span class="text-xl font-bold text-gray-900">代码未来</span>
                <span class="text-sm text-blue-600">智创无限</span>
              </div>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#home" @click.prevent="scrollToSection('home')" class="text-gray-600 hover:text-blue-600 transition-colors">首页</a>
              <a href="#services" @click.prevent="scrollToSection('services')" class="text-gray-600 hover:text-blue-600 transition-colors">服务领域</a>
              <a href="#advantages" @click.prevent="scrollToSection('advantages')" class="text-gray-600 hover:text-blue-600 transition-colors">核心优势</a>
              <a href="#value" @click.prevent="scrollToSection('value')" class="text-gray-600 hover:text-blue-600 transition-colors">客户价值</a>
              <a href="#cooperation" @click.prevent="scrollToSection('cooperation')" class="text-gray-600 hover:text-blue-600 transition-colors">合作模式</a>
              <button class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">联系我们</button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- 英雄区域 -->
    <section id="home" class="relative pt-16 min-h-[80vh] flex items-center overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90"></div>
        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
             alt="背景" 
             class="w-full h-full object-cover"
        />
      </div>
      
      <div class="relative w-full px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-[1200px] mx-auto">
          <div class="grid md:grid-cols-2 gap-24 items-center">
            <!-- 左侧文字内容 -->
            <div class="text-left">
              <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
                代码未来，<br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">智创无限</span>
              </h1>
              <p class="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                专注高端软件定制与数字化转型解决方案<br>
                为全球企业提供技术赋能
              </p>
              <!-- <p class="text-lg md:text-xl text-blue-200 font-medium mb-8 italic animate-fade-in-up animation-delay-400">
                愿景：用代码重构商业价值，让技术成为您的核心竞争力。
              </p> -->
              <!-- 特别承诺 -->
              <div class="inline-block bg-gradient-to-r from-blue-600/90 to-indigo-600/90 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 mb-12 animate-fade-in-up animation-delay-500">
                <p class="text-xl font-medium">特别承诺：首版不满意免费返工！</p>
              </div>
              <div class="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-600">
                <button class="group bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center">
                  <Rocket class="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  开始合作
                </button>
                <button class="group border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Play class="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  了解更多
                </button>
              </div>
            </div>

            <!-- 右侧动态方块装饰 -->
            <div class="relative hidden md:block h-[500px] animate-fade-in-up animation-delay-300">
              <div class="relative w-full h-full">
                <!-- 中心大方块 -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl animate-float">
                  <div class="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                </div>
                
                <!-- 浮动小方块 -->
                <div class="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl shadow-lg animate-float animation-delay-200"></div>
                <div class="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl shadow-lg animate-float animation-delay-400"></div>
                <div class="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-400 rounded-xl shadow-lg animate-float animation-delay-600"></div>
                <div class="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-indigo-500 to-blue-400 rounded-xl shadow-lg animate-float animation-delay-800"></div>
                
                <!-- 装饰线条 -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-indigo-400/30 rounded-full animate-spin-slow animation-delay-1000"></div>
                
                <!-- 技术标签 -->
                <div class="absolute top-1/4 -left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-200">
                  <p class="text-gray-800 font-medium">React Native</p>
                </div>
                <div class="absolute bottom-1/4 -right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-400">
                  <p class="text-gray-800 font-medium">Spring Boot</p>
                </div>
                <div class="absolute top-1/2 -left-12 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-600">
                  <p class="text-gray-800 font-medium">Vue.js</p>
                </div>
                <div class="absolute top-1/2 -right-12 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-800">
                  <p class="text-gray-800 font-medium">Flutter</p>
                </div>
                <div class="absolute bottom-1/3 -left-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-1000">
                  <p class="text-gray-800 font-medium">Node.js</p>
                </div>
                <div class="absolute top-1/3 -right-8 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-1200">
                  <p class="text-gray-800 font-medium">Python</p>
                </div>
                <!-- 装饰性标签 -->
                <div class="absolute top-1/4 left-1/4 bg-gradient-to-r from-blue-500/90 to-indigo-500/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-1400">
                  <p class="text-white font-medium">微服务</p>
                </div>
                <div class="absolute bottom-1/4 right-1/4 bg-gradient-to-r from-indigo-500/90 to-blue-500/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-1600">
                  <p class="text-white font-medium">云原生</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务领域 -->
    <section id="services" class="relative py-24 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">服务领域</h2>
          <p class="text-xl text-gray-700">全方位技术解决方案，助力企业数字化转型</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div class="bg-gradient-to-br from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">全栈软件开发</h3>
            <p class="text-gray-700">Web/App/AI/区块链全技术栈开发服务</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div class="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Settings class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">企业级系统集成</h3>
            <p class="text-gray-700">ERP/CRM/云计算系统集成解决方案</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div class="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">专业技术团队外包</h3>
            <p class="text-gray-700">按需驻场/远程协作技术团队服务</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div class="bg-gradient-to-br from-pink-500 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">软件测试与运维</h3>
            <p class="text-gray-700">专业测试服务与运维托管解决方案</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section id="advantages" class="relative py-24 bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">为何选择我们</h2>
          <p class="text-xl text-gray-700">专业实力与服务承诺的完美结合</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="group text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div class="bg-gradient-to-br from-blue-500 to-indigo-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Award class="h-10 w-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">丰富经验</h3>
            <p class="text-gray-700">10年+行业经验<br>交付300+成功案例</p>
          </div>
          
          <div class="group text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div class="bg-gradient-to-br from-indigo-500 to-purple-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle class="h-10 w-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">质量保证</h3>
            <p class="text-gray-700">ISO27001认证<br>严格代码质量管理</p>
          </div>
          
          <div class="group text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div class="bg-gradient-to-br from-purple-500 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Zap class="h-10 w-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">高效交付</h3>
            <p class="text-gray-700">敏捷开发流程<br>节省30%时间成本</p>
          </div>
          
          <div class="group text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
            <div class="bg-gradient-to-br from-pink-500 to-rose-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Clock class="h-10 w-10 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">全时支持</h3>
            <p class="text-gray-700">7×24小时<br>全时区技术支持</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户价值 -->
    <section id="value" class="relative py-24 bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">客户价值导向</h2>
          <p class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-medium mb-8">代码未来 —— 您的专属技术合伙人</p>
          <p class="text-xl text-gray-700 mb-12">我们不只是开发者，更是业务伙伴</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div class="bg-gradient-to-br from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <DollarSign class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">成本优化方案</h3>
            <p class="text-gray-700">灵活的外包模式降低50%人力成本</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div class="bg-gradient-to-br from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Building2 class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">行业定制开发</h3>
            <p class="text-gray-700">深耕金融、医疗、零售领域，提供合规化设计</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div class="bg-gradient-to-br from-blue-600 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">风险共担机制</h3>
            <p class="text-gray-700">里程碑付款+交付质量承诺</p>
          </div>
        </div>

        <!-- 典型客户 -->
        <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 mb-16">
          <h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">典型客户案例</h3>
          <div class="space-y-6">
            <div class="flex items-start group">
              <div class="bg-gradient-to-br from-green-500 to-green-600 w-8 h-8 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <CheckCircle class="h-5 w-5 text-white" />
              </div>
              <p class="text-gray-700 text-lg">为某跨国零售集团搭建分布式供应链系统，提升运营效率40%</p>
            </div>
            <div class="flex items-start group">
              <div class="bg-gradient-to-br from-green-500 to-green-600 w-8 h-8 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <CheckCircle class="h-5 w-5 text-white" />
              </div>
              <p class="text-gray-700 text-lg">助力医疗科技公司通过FDA认证级软件开发</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作模式 -->
    <section id="cooperation" class="relative py-24 bg-gradient-to-br from-amber-100 via-yellow-50 to-green-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">合作模式</h2>
          <p class="text-xl text-gray-700">灵活多样的合作方式，满足不同需求</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div class="bg-gradient-to-br from-blue-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">技术团队外包</h3>
            <div class="space-y-3">
              <p class="text-gray-700">• 按需驻场/远程协作</p>
              <p class="text-gray-700">• 灵活配置技术团队</p>
              <p class="text-gray-700">• 快速响应业务需求</p>
            </div>
          </div>
          
          <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div class="bg-gradient-to-br from-indigo-500 to-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Settings class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">项目定制开发</h3>
            <div class="space-y-3">
              <p class="text-gray-700">• 需求分析与规划</p>
              <p class="text-gray-700">• 产品设计与开发</p>
              <p class="text-gray-700">• 测试与部署上线</p>
            </div>
          </div>
          
          <div class="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
            <div class="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">技术咨询服务</h3>
            <div class="space-y-3">
              <p class="text-gray-700">• 技术架构设计</p>
              <p class="text-gray-700">• 性能优化方案</p>
              <p class="text-gray-700">• 安全合规咨询</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section id="process" class="relative py-24 bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">服务流程</h2>
          <p class="text-xl text-gray-700">从概念到产品，我们提供</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="group text-center">
            <div class="bg-gradient-to-br from-blue-600 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Rocket class="h-10 w-10 text-white" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">极速原型设计</h4>
            <p class="text-gray-700">3周出Demo</p>
          </div>
          <div class="group text-center">
            <div class="bg-gradient-to-br from-blue-600 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Package class="h-10 w-10 text-white" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">性价比初创套餐</h4>
            <p class="text-gray-700">含服务器部署</p>
          </div>
          <div class="group text-center">
            <div class="bg-gradient-to-br from-blue-600 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <RefreshCw class="h-10 w-10 text-white" />
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-3">持续迭代维护</h4>
            <p class="text-gray-700">订阅制服务</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-12">
          <!-- 公司信息 -->
          <div class="space-y-4">
            <div class="flex flex-col">
              <span class="text-2xl font-bold">代码未来</span>
              <span class="text-sm text-blue-400">智创无限</span>
            </div>
            <p class="text-gray-400 text-sm">专注高端软件定制与数字化转型解决方案</p>
          </div>

          <!-- 技术栈 -->
          <div>
            <h3 class="text-lg font-semibold mb-4">技术栈</h3>
            <div class="space-y-2">
              <p class="text-gray-400">前端：Vue3/React/TypeScript</p>
              <p class="text-gray-400">后端：Java/Spring Boot/Node.js</p>
              <p class="text-gray-400">云原生：Docker/Kubernetes</p>
            </div>
          </div>

          <!-- 联系方式 -->
          <div>
            <h3 class="text-lg font-semibold mb-4">联系我们</h3>
            <div class="space-y-2">
              <p class="text-gray-400">电话：400-888-8888</p>
              <p class="text-gray-400">邮箱：contact@codefuture.com</p>
              <p class="text-gray-400">地址：北京市朝阳区科技园区</p>
            </div>
          </div>

          <!-- 关注我们 -->
          <div>
            <h3 class="text-lg font-semibold mb-4">关注我们</h3>
            <div class="space-y-2">
              <p class="text-gray-400">微信公众号：代码未来</p>
              <p class="text-gray-400">知乎：代码未来科技</p>
              <p class="text-gray-400">微博：@代码未来</p>
            </div>
          </div>
        </div>

        <!-- 版权信息 -->
        <div class="mt-12 pt-8 border-t border-gray-700 text-center">
          <p class="text-gray-400 text-sm">© 2024 代码未来科技有限公司. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Rocket, Play, Globe, Settings, Users, Shield, 
  Award, CheckCircle, Zap, Clock, DollarSign, 
  Building2, ShieldCheck, Package, RefreshCw 
} from 'lucide-vue-next'

// 平滑滚动到指定区域
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navHeight = 64 // 导航栏高度
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style>
/* 动画关键帧 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 动画类 */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* 动画延迟 */
.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-800 {
  animation-delay: 0.8s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-1200 {
  animation-delay: 1.2s;
}

.animation-delay-1400 {
  animation-delay: 1.4s;
}

.animation-delay-1600 {
  animation-delay: 1.6s;
}

/* 滚动行为 */
html {
  scroll-behavior: smooth;
}

/* 导航栏样式 */
nav {
  transition: all 0.3s ease;
}

nav.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 添加新的动画效果 */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* 优化背景图片加载 */
.bg-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.3s ease-in-out;
}

.bg-image.loading {
  opacity: 0;
}

.bg-image.loaded {
  opacity: 1;
}

@keyframes spin-slow {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style> 