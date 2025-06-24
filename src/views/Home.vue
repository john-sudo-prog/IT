<template>
  <div class="bg-gradient-to-b from-blue-950 to-slate-900">
    <!-- 导航栏 -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-blue-950/80 backdrop-blur-md shadow-sm border-b border-blue-800">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="max-w-[1200px] mx-auto">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <div class="flex flex-col">
                <div class="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-2xl font-bold tracking-wider">
                  <span class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-lg shadow-lg shadow-blue-500/30">BR</span>
                </div>
              </div>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#home" @click.prevent="scrollToSection('home')" class="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" @click.prevent="scrollToSection('services')" class="text-gray-300 hover:text-blue-400 transition-colors">Services</a>
              <a href="#process" @click.prevent="scrollToSection('process')" class="text-gray-300 hover:text-blue-400 transition-colors">Process</a>
              <a href="#advantages" @click.prevent="scrollToSection('advantages')" class="text-gray-300 hover:text-blue-400 transition-colors">Advantages</a>
              <a href="#value" @click.prevent="scrollToSection('value')" class="text-gray-300 hover:text-blue-400 transition-colors">Value</a>
              <button class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- 英雄区域 -->
    <section id="home" class="relative pt-16 min-h-[80vh] flex items-center overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-950/95 to-slate-900/95"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <img src="../assets/bg.png" 
             alt="Background" 
             class="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div class="relative w-full px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-[1200px] mx-auto">
          <div class="grid md:grid-cols-2 gap-24 items-center">
            <!-- 左侧内容 -->
            <div class="relative z-10 lg:w-1/2">
              <div class="text-center lg:text-left">
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 whitespace-nowrap">Professional Software Development</span>
                  <span class="text-white whitespace-nowrap">Solution Provider</span>
                </h1>
                <p class="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Focused on providing comprehensive software development services for enterprises, including full-stack development, cloud services, DevOps, security compliance and other solutions
                </p>
                <div class="flex flex-wrap justify-center lg:justify-start gap-6">
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-300">10+ Years Experience</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-300">300+ Success Cases</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-300">50+ Tech Experts</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧动态方块装饰 -->
            <div class="relative hidden md:block h-[500px] animate-fade-in-up animation-delay-300">
              <div class="relative w-full h-full">
                <!-- 中心大方块 -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl animate-float">
                  <div class="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                </div>
                
                <!-- 浮动小方块 -->
                <div class="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl shadow-lg animate-float animation-delay-200"></div>
                <div class="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl shadow-lg animate-float animation-delay-400"></div>
                <div class="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl shadow-lg animate-float animation-delay-600"></div>
                <div class="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl shadow-lg animate-float animation-delay-800"></div>
                
                <!-- 装饰线条 -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-blue-400/30 rounded-full animate-spin-slow"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-blue-400/30 rounded-full animate-spin-slow animation-delay-1000"></div>
                
                <!-- 技术标签 -->
                <div class="absolute top-1/4 -left-8 bg-blue-950/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-200">
                  <p class="text-blue-400 font-medium">React Native</p>
                </div>
                <div class="absolute bottom-1/4 -right-8 bg-blue-950/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-400">
                  <p class="text-blue-400 font-medium">Spring Boot</p>
                </div>
                <div class="absolute top-1/2 -left-12 bg-blue-950/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-600">
                  <p class="text-blue-400 font-medium">Vue.js</p>
                </div>
                <div class="absolute top-1/2 -right-12 bg-blue-950/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-800">
                  <p class="text-blue-400 font-medium">Flutter</p>
                </div>
                <div class="absolute bottom-1/3 -left-8 bg-blue-950/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-1000">
                  <p class="text-blue-400 font-medium">Node.js</p>
                </div>
                <div class="absolute top-1/3 -right-8 bg-blue-950/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-1200">
                  <p class="text-blue-400 font-medium">Python</p>
                </div>
                <!-- 装饰性标签 -->
                <div class="absolute top-1/4 left-1/4 bg-gradient-to-r from-blue-500/90 to-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-1400">
                  <p class="text-white font-medium">Microservices</p>
                </div>
                <div class="absolute bottom-1/4 right-1/4 bg-gradient-to-r from-blue-600/90 to-blue-500/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg animate-float animation-delay-1600">
                  <p class="text-white font-medium">Cloud Native</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务领域 -->
    <section id="services" class="relative py-24 bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Service Areas</h2>
          <p class="text-xl text-gray-300">Comprehensive Technical Solutions</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- 全栈开发 -->
          <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20"></div>
            <div class="relative bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50">
              <div class="flex items-center space-x-4 mb-6">
                <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Code2 class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white">Full-Stack Software Development</h3>
                </div>
              </div>
              <div class="space-y-4">
                <p class="text-gray-300">Providing complete technical solutions from frontend to backend</p>
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Web Application Development</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Mobile Application Development</span>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Microservices Architecture</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Cloud-Native Applications</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Vue3/React</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Spring Boot</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Flutter</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Kubernetes</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 安全与合规 -->
          <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20"></div>
            <div class="relative bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50">
              <div class="flex items-center space-x-4 mb-6">
                <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Shield class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white">Security & Compliance</h3>
                </div>
              </div>
              <div class="space-y-4">
                <p class="text-gray-300">Compliant with industry security standards</p>
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Security Assessment</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Vulnerability Remediation</span>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Compliance Certification</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Security Training</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Level 3 Protection</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">ISO27001</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Penetration Testing</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Security Audit</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 云服务与DevOps -->
          <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
            <div class="relative bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50">
              <div class="flex items-center space-x-4 mb-6">
                <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Cloud class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white">Cloud Services & DevOps</h3>
                </div>
              </div>
              <div class="space-y-4">
                <p class="text-gray-300">Providing cloud-native solutions and automated operations services</p>
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Containerized Deployment</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">CI/CD Pipeline</span>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Monitoring & Alerting</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Automated Operations</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Docker</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">K8s</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Jenkins</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Prometheus</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 数据分析 -->
          <div class="relative">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
            <div class="relative bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50">
              <div class="flex items-center space-x-4 mb-6">
                <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center">
                  <LineChart class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-white">Data Analytics</h3>
                </div>
              </div>
              <div class="space-y-4">
                <p class="text-gray-300">Providing data analysis and visualization solutions</p>
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Data Mining</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">BI Reporting</span>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Predictive Analytics</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-gray-300">Data Visualization</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Python</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">TensorFlow</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Tableau</span>
                  <span class="px-3 py-1 bg-zinc-700/50 text-cyan-400 rounded-full text-sm">Power BI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section id="process" class="relative py-24 bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Service Process</h2>
          <p class="text-xl text-gray-300">Professional and Standardized Project Management Process</p>
        </div>
        
        <div class="grid md:grid-cols-4 gap-8">
          <div class="group bg-zinc-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-700/50 hover:border-cyan-500/50">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <FileSearch class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Requirements Analysis</h3>
            <p class="text-gray-300">Deep understanding of business requirements and solution development</p>
          </div>
          
          <div class="group bg-zinc-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-700/50 hover:border-cyan-500/50">
            <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Layout class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Solution Design</h3>
            <p class="text-gray-300">Technical architecture design and development planning</p>
          </div>
          
          <div class="group bg-zinc-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-700/50 hover:border-cyan-500/50">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Code2 class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Development Implementation</h3>
            <p class="text-gray-300">Agile development with continuous integration and deployment</p>
          </div>
          
          <div class="group bg-zinc-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-700/50 hover:border-cyan-500/50">
            <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Server class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Deployment & Operations</h3>
            <p class="text-gray-300">System deployment, operations monitoring and support</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section id="advantages" class="relative py-24 bg-gradient-to-br from-gray-900 via-zinc-900 to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Core Advantages</h2>
          <p class="text-xl text-gray-300">Professional Technical Team with Rich Project Experience</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- 左侧：核心数据 -->
          <div class="grid grid-cols-2 gap-6">
            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center">
                    <Clock class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">10+</h3>
                    <p class="text-sm text-gray-300">Years Experience</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-400">Technical Expertise</span>
                    <span class="text-sm text-cyan-400">95%</span>
                  </div>
                  <div class="h-1.5 bg-zinc-700 rounded-full">
                    <div class="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" style="width: 95%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-10 h-10 rounded-xl flex items-center justify-center">
                    <CheckCircle class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">300+</h3>
                    <p class="text-sm text-gray-300">Success Cases</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-400">Client Satisfaction</span>
                    <span class="text-sm text-cyan-400">98%</span>
                  </div>
                  <div class="h-1.5 bg-zinc-700 rounded-full">
                    <div class="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" style="width: 98%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center">
                    <Users class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">50+</h3>
                    <p class="text-sm text-gray-300">Tech Experts</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-400">Team Size</span>
                    <span class="text-sm text-cyan-400">100+</span>
                  </div>
                  <div class="h-1.5 bg-zinc-700 rounded-full">
                    <div class="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" style="width: 100%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-10 h-10 rounded-xl flex items-center justify-center">
                    <Server class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-white">24/7</h3>
                    <p class="text-sm text-gray-300">Technical Support</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-400">Response Time</span>
                    <span class="text-sm text-cyan-400">15 Minutes</span>
                  </div>
                  <div class="h-1.5 bg-zinc-700 rounded-full">
                    <div class="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" style="width: 90%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：核心优势 -->
          <div class="grid grid-cols-2 gap-6">
            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center">
                    <Code2 class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white">Full-Stack Technology</h3>
                  </div>
                </div>
                <div class="space-y-2">
                  <p class="text-sm text-gray-300">Covering frontend and backend technology stack</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span class="px-2 py-0.5 bg-zinc-700/50 text-cyan-400 rounded-full text-xs">Vue3/React</span>
                    <span class="px-2 py-0.5 bg-zinc-700/50 text-cyan-400 rounded-full text-xs">Spring Boot</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-10 h-10 rounded-xl flex items-center justify-center">
                    <Shield class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white">Security & Compliance</h3>
                  </div>
                </div>
                <div class="space-y-2">
                  <p class="text-sm text-gray-300">Compliant with industry security standards</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span class="px-2 py-0.5 bg-zinc-700/50 text-cyan-400 rounded-full text-xs">Level 3 Protection</span>
                    <span class="px-2 py-0.5 bg-zinc-700/50 text-cyan-400 rounded-full text-xs">ISO27001</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-10 h-10 rounded-xl flex items-center justify-center">
                    <Zap class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white">Agile Development</h3>
                  </div>
                </div>
                <div class="space-y-2">
                  <p class="text-sm text-gray-300">Quick response to requirement changes</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span class="px-2 py-0.5 bg-zinc-700/50 text-cyan-400 rounded-full text-xs">Scrum</span>
                    <span class="px-2 py-0.5 bg-zinc-700/50 text-cyan-400 rounded-full text-xs">CI/CD</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-10 h-10 rounded-xl flex items-center justify-center">
                    <Globe class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-white">Global Services</h3>
                  </div>
                </div>
                <div class="space-y-2">
                  <p class="text-sm text-gray-300">Support for multiple languages and time zones</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span class="px-2 py-0.5 bg-zinc-700/50 text-cyan-400 rounded-full text-xs">Multi-language</span>
                    <span class="px-2 py-0.5 bg-zinc-700/50 text-cyan-400 rounded-full text-xs">Multi-timezone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户价值 -->
    <section id="value" class="relative py-24 bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Customer Value Orientation</h2>
          <p class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-medium mb-8">Code Future — Your Dedicated Technology Partner</p>
          <p class="text-xl text-gray-300 mb-12">We are not just developers, but business partners</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="group bg-zinc-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-700/50 hover:border-cyan-500/50">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <DollarSign class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Cost Optimization Solutions</h3>
            <p class="text-gray-300">Flexible outsourcing model reduces 50% labor costs</p>
          </div>
          
          <div class="group bg-zinc-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-700/50 hover:border-cyan-500/50">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Building2 class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Industry Custom Development</h3>
            <p class="text-gray-300">Deep expertise in finance, healthcare, retail sectors with compliance design</p>
          </div>
          
          <div class="group bg-zinc-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-700/50 hover:border-cyan-500/50">
            <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Security & Compliance Guarantee</h3>
            <p class="text-gray-300">Compliant with industry standards, ensuring data security and privacy protection</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作模式 -->
    <section id="cooperation" class="relative py-24 bg-gradient-to-br from-gray-900 via-zinc-900 to-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Cooperation Models</h2>
          <p class="text-xl text-gray-300">Flexible and diverse cooperation methods to meet different needs</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="group bg-zinc-800/50 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-zinc-700/50 hover:border-cyan-500/50">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Technical Team Outsourcing</h3>
            <div class="space-y-3">
              <p class="text-gray-300">• On-site/Remote collaboration as needed</p>
              <p class="text-gray-300">• Flexible technical team configuration</p>
              <p class="text-gray-300">• Quick response to business requirements</p>
            </div>
          </div>
          
          <div class="group bg-zinc-800/50 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-zinc-700/50 hover:border-cyan-500/50">
            <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Settings class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Project Custom Development</h3>
            <div class="space-y-3">
              <p class="text-gray-300">• Requirements analysis and planning</p>
              <p class="text-gray-300">• Product design and development</p>
              <p class="text-gray-300">• Testing and deployment</p>
            </div>
          </div>
          
          <div class="group bg-zinc-800/50 backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-zinc-700/50 hover:border-cyan-500/50">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">Technical Consulting Services</h3>
            <div class="space-y-3">
              <p class="text-gray-300">• Technical architecture design</p>
              <p class="text-gray-300">• Performance optimization solutions</p>
              <p class="text-gray-300">• Security and compliance consulting</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="bg-gradient-to-br from-zinc-900 to-gray-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-12">
          <!-- 公司信息 -->
          <div class="space-y-4">
            <div class="flex flex-col">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div class="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-xl shadow-lg shadow-blue-500/30 font-bold text-lg flex items-center space-x-2 group-hover:scale-105 transition-all duration-300">
                  <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>WuHan BaiRui</span>
                  <div class="w-1 h-1 bg-white/60 rounded-full"></div>
                </div>
              </div>
              <!-- <div class="mt-2 flex items-center space-x-2">
                <div class="w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                <span class="text-cyan-400 text-xs font-medium tracking-wider">代码未来科技</span>
              </div> -->
            </div>
            <p class="text-gray-400 text-sm">Focused on high-end software customization and digital transformation solutions</p>
          </div>

          <!-- 技术栈 -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Technology Stack</h3>
            <div class="space-y-2">
              <p class="text-gray-400">Frontend: Vue3/React/TypeScript</p>
              <p class="text-gray-400">Backend: Java/Spring Boot/Node.js</p>
              <p class="text-gray-400">Cloud Native: Docker/Kubernetes</p>
            </div>
          </div>

          <!-- 联系方式 -->
          <div>
            <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
            <div class="space-y-2">
              <!-- <p class="text-gray-400">电话：400-888-8888</p> -->
              <p class="text-gray-400">Email: WHBaiRuiT@poraytech.com</p>
              <p class="text-gray-400">Address: Wuhan, Hubei Province</p>
            </div>
          </div>

          <!-- 关注我们 -->
          <!-- <div>
            <h3 class="text-lg font-semibold mb-4">关注我们</h3>
            <div class="space-y-2">
              <p class="text-gray-400">微信公众号：代码未来</p>
              <p class="text-gray-400">知乎：代码未来科技</p>
              <p class="text-gray-400">微博：@代码未来</p>
            </div>
          </div> -->
        </div>
        
        <!-- 版权信息 -->
        <div class="mt-12 pt-8 border-t border-zinc-700 text-center">
          <p class="text-gray-400 text-sm">© 2025 Wuhan Bairui Technology Co., Ltd. All rights reserved.</p>
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
  Building2, ShieldCheck, Package, RefreshCw, FileText, Layout, Code, Server, FileSearch, Code2, Cloud, LineChart 
} from 'lucide-vue-next'

// Smooth scroll to specified section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navHeight = 64 // Navigation bar height
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
/* Animation keyframes */
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

/* Animation classes */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

/* Animation delays */
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

/* Scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Navigation bar styles */
nav {
  transition: all 0.3s ease;
}

nav.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Add new animation effects */
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

/* Optimize background image loading */
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