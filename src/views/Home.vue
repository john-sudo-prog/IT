<template>
  <div class="bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50">
    <!-- 导航栏 -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div class="max-w-[1200px] mx-auto">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <div class="flex flex-col">
                <div class="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-amber-300 bg-clip-text text-transparent text-2xl font-bold tracking-wider">
                  <span class="bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 text-white px-3 py-1 rounded-lg shadow-lg shadow-fuchsia-500/30">DENG Game</span>
                </div>
              </div>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#home" @click.prevent="scrollToSection('home')" class="text-gray-700 hover:text-cyan-500 transition-colors">Home</a>
              <a href="#services" @click.prevent="scrollToSection('services')" class="text-gray-700 hover:text-fuchsia-500 transition-colors">Services</a>
              <a href="#process" @click.prevent="scrollToSection('process')" class="text-gray-700 hover:text-amber-500 transition-colors">Process</a>
              <a href="#advantages" @click.prevent="scrollToSection('advantages')" class="text-gray-700 hover:text-emerald-500 transition-colors">Advantages</a>
              <a href="#value" @click.prevent="scrollToSection('value')" class="text-gray-700 hover:text-indigo-500 transition-colors">Value</a>
              <button @click.prevent="scrollToSection('contact')" class="px-4 py-2 rounded-lg bg-white/70 text-gray-900 backdrop-blur-md ring-1 ring-slate-200 hover:ring-cyan-400/50 hover:shadow-md transition-all duration-300">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- 英雄区域 -->
    <section id="home" class="relative pt-16 min-h-[80vh] flex items-center overflow-hidden">
      <!-- 背景装饰 -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-r from-white to-slate-50"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-fuchsia-500/10 to-amber-400/10"></div>
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2000&q=80" 
             alt="Background" 
             class="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div class="relative w-full px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-[1200px] mx-auto">
          <div class="grid md:grid-cols-2 gap-24 items-center">
            <!-- 左侧内容 -->
            <div class="relative z-10">
              <div class="text-center lg:text-left">
                <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  <span class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400">DENG Game</span>
                  <br/>
                  <span class="text-gray-900">DNI ENGINEERING PTY LTD</span>
                </h1>
                <p class="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto lg:mx-0">
                  We are a mobile game developer and publisher focused on the global market.
                </p>
                <p class="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto lg:mx-0">
                  Our mission is to bring top-tier hyper-casual experiences to players worldwide.
                </p>
                <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Becoming one of the most beloved game companies for players around the world. Building a game bridge that connects Eastern and Western cultures.
                </p>
                <div class="flex flex-wrap justify-center lg:justify-start gap-6">
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                    <span class="text-gray-700">10+ Years in Mobile Games</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span class="text-gray-700">Millions of Global Downloads</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-700">Multiple Top Charts Appearances</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 右侧动态方块装饰 -->
            <div class="relative hidden md:block h-[500px] animate-fade-in-up animation-delay-300">
              <div class="relative w-full h-full">
                <!-- 中心大方块 -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-fuchsia-500 to-indigo-600 rounded-2xl shadow-2xl animate-float">
                  <div class="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl"></div>
                </div>
                
                <!-- 浮动小方块 -->
                <div class="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl shadow-lg animate-float animation-delay-200"></div>
                <div class="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-amber-400 to-fuchsia-500 rounded-xl shadow-lg animate-float animation-delay-400"></div>
                <div class="absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-xl shadow-lg animate-float animation-delay-600"></div>
                <div class="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-fuchsia-400 to-violet-500 rounded-xl shadow-lg animate-float animation-delay-800"></div>
                
                <!-- 装饰线条 -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-slate-300/30 rounded-full animate-spin-slow"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-slate-300/20 rounded-full animate-spin-slow animation-delay-1000"></div>
                
                <!-- 游戏标签 -->
                <div class="absolute top-1/4 -left-8 bg-white/60 backdrop-blur-md ring-1 ring-slate-200 px-4 py-2 rounded-lg shadow-sm animate-float animation-delay-200">
                  <p class="text-fuchsia-600/80 font-medium">Hyper-casual</p>
                </div>
                <div class="absolute bottom-1/4 -right-8 bg-white/60 backdrop-blur-md ring-1 ring-slate-200 px-4 py-2 rounded-lg shadow-sm animate-float animation-delay-400">
                  <p class="text-amber-600/80 font-medium">Arcade</p>
                </div>
                <div class="absolute top-1/2 -left-12 bg-white/60 backdrop-blur-md ring-1 ring-slate-200 px-4 py-2 rounded-lg shadow-sm animate-float animation-delay-600">
                  <p class="text-cyan-600/80 font-medium">Puzzle</p>
                </div>
                <div class="absolute top-1/2 -right-12 bg-white/60 backdrop-blur-md ring-1 ring-slate-200 px-4 py-2 rounded-lg shadow-sm animate-float animation-delay-800">
                  <p class="text-emerald-600/80 font-medium">Runner</p>
                </div>
                <div class="absolute bottom-1/3 -left-8 bg-white/60 backdrop-blur-md ring-1 ring-slate-200 px-4 py-2 rounded-lg shadow-sm animate-float animation-delay-1000">
                  <p class="text-sky-700/80 font-medium">Unity</p>
                </div>
                <div class="absolute top-1/3 -right-8 bg-white/60 backdrop-blur-md ring-1 ring-slate-200 px-4 py-2 rounded-lg shadow-sm animate-float animation-delay-1200">
                  <p class="text-sky-700/80 font-medium">Unreal</p>
                </div>
                <!-- 装饰性标签 -->
                <div class="absolute top-1/4 left-1/4 bg-white/70 backdrop-blur-md ring-1 ring-slate-200 px-4 py-2 rounded-lg shadow-sm animate-float animation-delay-1400">
                  <p class="text-gray-800 font-medium">Global Publish</p>
                </div>
                <div class="absolute bottom-1/4 right-1/4 bg-white/70 backdrop-blur-md ring-1 ring-slate-200 px-4 py-2 rounded-lg shadow-sm animate-float animation-delay-1600">
                  <p class="text-gray-800 font-medium">Live Ops</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Game Portfolio -->
    <section id="services" class="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Game Portfolio</h2>
          <div class="mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 mb-6"></div>
          <p class="text-xl text-gray-600">High-quality mobile games for the global market</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Hyper-casual -->
          <div class="relative">
            <div class="relative bg-slate-50 p-8 rounded-2xl ring-1 ring-gray-200 shadow-sm hover:ring-gray-300 transition">
              <div class="flex items-center space-x-4 mb-6">
                <div class="bg-gradient-to-br from-emerald-400 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Code2 class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900">Hyper-casual</h3>
                </div>
              </div>
              <div class="space-y-4">
                <p class="text-gray-600">Lightweight, snappy, pick-up-and-play. Built for satisfying feedback and tempo.</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-600">Core loop and retention optimization</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-600">Monetization and ad integration</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-600">Rapid iteration and A/B testing</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-600">Global publishing support</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="px-3 py-1 bg-slate-100 text-cyan-600 rounded-full text-sm">Unity</span>
                  <span class="px-3 py-1 bg-slate-100 text-cyan-600 rounded-full text-sm">Unreal</span>
                  <span class="px-3 py-1 bg-slate-100 text-cyan-600 rounded-full text-sm">Hyper-casual</span>
                  <span class="px-3 py-1 bg-slate-100 text-cyan-600 rounded-full text-sm">Ad Monetization</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Casual & Puzzle -->
          <div class="relative">
            <div class="relative bg-slate-50 p-8 rounded-2xl ring-1 ring-gray-200 shadow-sm hover:ring-gray-300 transition">
              <div class="flex items-center space-x-4 mb-6">
                <div class="bg-gradient-to-br from-fuchsia-500 to-violet-600 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shield class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900">Casual & Puzzle</h3>
                </div>
              </div>
              <div class="space-y-4">
                <p class="text-gray-600">Relaxing, puzzle, and soothing experiences for broad audiences and long-tail markets.</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-600">Level and difficulty curve design</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-600">Sound design and haptic polish</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-600">UGC and social sharing</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full"></div>
                    <span class="text-gray-600">Localization copy and cultural fit</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="px-3 py-1 bg-slate-100 text-fuchsia-600 rounded-full text-sm">Match-3</span>
                  <span class="px-3 py-1 bg-slate-100 text-fuchsia-600 rounded-full text-sm">Puzzle</span>
                  <span class="px-3 py-1 bg-slate-100 text-fuchsia-600 rounded-full text-sm">Casual</span>
                  <span class="px-3 py-1 bg-slate-100 text-fuchsia-600 rounded-full text-sm">Localization</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Action Runner -->
          <div class="relative">
            <div class="relative bg-slate-100 p-8 rounded-2xl ring-1 ring-amber-100 shadow-sm hover:ring-amber-200 transition">
              <div class="flex items-center space-x-4 mb-6">
                <div class="bg-gradient-to-br from-amber-500 to-orange-500 w-12 aspect-square rounded-full flex-none flex items-center justify-center">
                  <Cloud class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900">Action Runner</h3>
                </div>
              </div>
              <div class="space-y-4">
                <p class="text-gray-600">Fast-paced with strong feedback, built on tactile feel and satisfying impact.</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full mt-1"></div>
                    <span class="text-gray-600">Procedural levels and obstacles</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full mt-1"></div>
                    <span class="text-gray-600">Skins and progression systems</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full mt-1"></div>
                    <span class="text-gray-600">Competitive modes and leaderboards</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full mt-1"></div>
                    <span class="text-gray-600">Smooth cross-region experience</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="px-3 py-1 bg-slate-100 text-amber-600 rounded-full text-sm">Runner</span>
                  <span class="px-3 py-1 bg-slate-100 text-amber-600 rounded-full text-sm">Action</span>
                  <span class="px-3 py-1 bg-slate-100 text-amber-600 rounded-full text-sm">Skins</span>
                  <span class="px-3 py-1 bg-slate-100 text-amber-600 rounded-full text-sm">Leaderboard</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Simulation & Idle -->
          <div class="relative">
            <div class="relative bg-slate-100 p-8 rounded-2xl ring-1 ring-emerald-100 shadow-sm hover:ring-emerald-200 transition">
              <div class="flex items-center space-x-4 mb-6">
                <div class="bg-gradient-to-br from-emerald-500 to-teal-500 w-12 aspect-square rounded-full flex-none flex items-center justify-center">
                  <LineChart class="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900">Simulation & Idle</h3>
                </div>
              </div>
              <div class="space-y-4">
                <p class="text-gray-600">Light strategy, casual building, idle growth. Balanced for long-term retention and monetization.</p>
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full mt-1"></div>
                    <span class="text-gray-600">Art style and thematic innovation</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full mt-1"></div>
                    <span class="text-gray-600">Progression and economy systems</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full mt-1"></div>
                    <span class="text-gray-600">Ad and IAP balance</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-2 aspect-square flex-none bg-cyan-400 rounded-full mt-1"></div>
                    <span class="text-gray-600">Live-ops events</span>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-4">
                  <span class="px-3 py-1 bg-slate-100 text-emerald-600 rounded-full text-sm">Idler</span>
                  <span class="px-3 py-1 bg-slate-100 text-emerald-600 rounded-full text-sm">Simulation</span>
                  <span class="px-3 py-1 bg-slate-100 text-emerald-600 rounded-full text-sm">IAP</span>
                  <span class="px-3 py-1 bg-slate-100 text-emerald-600 rounded-full text-sm">Live Events</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Production Pipeline -->
    <section id="process" class="relative py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Production Pipeline</h2>
          <div class="mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-500 mb-6"></div>
          <p class="text-xl text-gray-600">Professional, standardized production and publishing workflow</p>
        </div>
        
        <div class="grid md:grid-cols-4 gap-8">
          <div class="group bg-slate-50 p-8 rounded-2xl ring-1 ring-gray-200 shadow-sm hover:ring-cyan-400/50 transition-all duration-300">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <FileSearch class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Ideation & Prototyping</h3>
            <p class="text-gray-600">Market insights, gameplay validation, rapid prototyping</p>
          </div>
          
          <div class="group bg-slate-100 p-8 rounded-2xl ring-1 ring-violet-100 shadow-sm hover:ring-violet-200 transition-all duration-300">
            <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Layout class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Production & Polish</h3>
            <p class="text-gray-600">Deepening core loops, unifying art and game feel</p>
          </div>
          
          <div class="group bg-slate-50 p-8 rounded-2xl ring-1 ring-gray-200 shadow-sm hover:ring-cyan-400/50 transition-all duration-300">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Code2 class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Testing & Launch</h3>
            <p class="text-gray-600">Retention and monetization optimization, global multi-channel UA</p>
          </div>
          
          <div class="group bg-slate-100 p-8 rounded-2xl ring-1 ring-indigo-100 shadow-sm hover:ring-indigo-200 transition-all duration-300">
            <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Server class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Live-ops & Growth</h3>
            <p class="text-gray-600">Version updates, event planning, data-driven growth</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Pillars -->
    <section id="advantages" class="relative py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Pillars</h2>
          <div class="mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 mb-6"></div>
          <p class="text-xl text-gray-600">Creativity, experience, and growth driven by data</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- 左侧：核心数据 -->
          <div class="grid grid-cols-2 gap-6">
            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl blur opacity-10"></div>
              <div class="relative bg-white p-6 rounded-2xl ring-1 ring-gray-200">
                <div class="flex items-center space-x-3 mb-4">
                <div class="bg-gradient-to-br from-emerald-500 to-teal-500 w-10 aspect-square rounded-full flex-none flex items-center justify-center">
                    <Clock class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900">10+</h3>
                    <p class="text-sm text-gray-600">Years of Experience</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-400">Development Efficiency</span>
                    <span class="text-sm text-cyan-400">95%</span>
                  </div>
                  <div class="h-1.5 bg-slate-100 rounded-full">
                    <div class="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" style="width: 95%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl blur opacity-10"></div>
              <div class="relative bg-white p-6 rounded-2xl ring-1 ring-gray-200">
                <div class="flex items-center space-x-3 mb-4">
                <div class="bg-gradient-to-br from-fuchsia-500 to-violet-600 w-10 aspect-square rounded-full flex-none flex items-center justify-center">
                    <CheckCircle class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900">300+</h3>
                    <p class="text-sm text-gray-600">Total Downloads</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-400">Player Satisfaction</span>
                    <span class="text-sm text-cyan-400">98%</span>
                  </div>
                  <div class="h-1.5 bg-slate-100 rounded-full">
                    <div class="h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" style="width: 98%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl blur opacity-10"></div>
              <div class="relative bg-white p-6 rounded-2xl ring-1 ring-gray-200">
                <div class="flex items-center space-x-3 mb-4">
                <div class="bg-gradient-to-br from-amber-500 to-orange-500 w-10 aspect-square rounded-full flex-none flex items-center justify-center">
                    <Users class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900">50+</h3>
                    <p class="text-sm text-gray-600">Publishing Channels</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-400">Countries/Regions Covered</span>
                    <span class="text-sm text-cyan-400">100+</span>
                  </div>
                  <div class="h-1.5 bg-slate-100 rounded-full">
                    <div class="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" style="width: 100%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-100 rounded-2xl blur opacity-10"></div>
              <div class="relative bg-white p-6 rounded-2xl ring-1 ring-gray-200">
                <div class="flex items-center space-x-3 mb-4">
                <div class="bg-gradient-to-br from-indigo-500 to-sky-500 w-10 aspect-square rounded-full flex-none flex items-center justify-center">
                    <Server class="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900">24/7</h3>
                    <p class="text-sm text-gray-600">Operations Support</p>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-400">Response Time</span>
                    <span class="text-sm text-cyan-400">15 Minutes</span>
                  </div>
                  <div class="h-1.5 bg-slate-100 rounded-full">
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
                  <div class="bg-gradient-to-br from-rose-500 to-pink-500 w-10 aspect-square rounded-full flex-none flex items-center justify-center">
                    <Code2 class="h-5 w-5 text-white" />
                  </div>
                  <div>
                  <h3 class="text-lg font-semibold text-white">Creativity First</h3>
                  </div>
                </div>
                <div class="space-y-2">
                  <p class="text-sm text-gray-300">User insights and ideation library, rapid prototype validation</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span class="px-2 py-0.5 bg-slate-100 text-rose-600 rounded-full text-xs">Market Insight</span>
                    <span class="px-2 py-0.5 bg-slate-100 text-rose-600 rounded-full text-xs">Prototype</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="bg-gradient-to-br from-emerald-500 to-teal-500 w-10 aspect-square rounded-full flex-none flex items-center justify-center">
                    <Shield class="h-5 w-5 text-white" />
                  </div>
                  <div>
                  <h3 class="text-lg font-semibold text-white">Experience Focused</h3>
                  </div>
                </div>
                <div class="space-y-2">
                  <p class="text-sm text-gray-300">Polished haptics and feedback, balanced difficulty and tempo</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span class="px-2 py-0.5 bg-slate-100 text-emerald-600 rounded-full text-xs">Haptics</span>
                    <span class="px-2 py-0.5 bg-slate-100 text-emerald-600 rounded-full text-xs">Game Feel</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="bg-gradient-to-br from-amber-500 to-orange-500 w-10 aspect-square rounded-full flex-none flex items-center justify-center">
                    <Zap class="h-5 w-5 text-white" />
                  </div>
                  <div>
                  <h3 class="text-lg font-semibold text-white">Agile Iteration</h3>
                  </div>
                </div>
                <div class="space-y-2">
                  <p class="text-sm text-gray-300">Small, fast steps with data-driven optimization</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span class="px-2 py-0.5 bg-slate-100 text-amber-600 rounded-full text-xs">A/B Test</span>
                    <span class="px-2 py-0.5 bg-slate-100 text-amber-600 rounded-full text-xs">Analytics</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20"></div>
              <div class="relative bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
                <div class="flex items-center space-x-3 mb-4">
                  <div class="bg-gradient-to-br from-indigo-500 to-sky-500 w-10 aspect-square rounded-full flex-none flex items-center justify-center">
                    <Globe class="h-5 w-5 text-white" />
                  </div>
                  <div>
                  <h3 class="text-lg font-semibold text-white">Global Publishing</h3>
                  </div>
                </div>
                <div class="space-y-2">
                  <p class="text-sm text-gray-300">Multi-language localization and cross-channel UA</p>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span class="px-2 py-0.5 bg-slate-100 text-indigo-600 rounded-full text-xs">Localization</span>
                    <span class="px-2 py-0.5 bg-slate-100 text-indigo-600 rounded-full text-xs">UA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section id="value" class="relative py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <div class="mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 mb-6"></div>
          <p class="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 font-medium mb-8">DENG Game — Creating mobile games loved by players worldwide</p>
          <p class="text-xl text-gray-600 mb-12">Representative titles (samples)</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="group bg-white p-8 rounded-2xl ring-1 ring-gray-200 shadow-sm hover:ring-cyan-400/50 transition-all duration-300">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <DollarSign class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Slicing Frenzy</h3>
            <p class="text-gray-600">Hyper-casual slicing satisfaction, 8M+ global downloads</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl ring-1 ring-gray-200 shadow-sm hover:ring-cyan-400/50 transition-all duration-300">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Building2 class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Mini City Builder</h3>
            <p class="text-gray-600">Simulation + idle growth, strong 30-day retention</p>
          </div>
          
          <div class="group bg-white p-8 rounded-2xl ring-1 ring-gray-200 shadow-sm hover:ring-cyan-400/50 transition-all duration-300">
            <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Turbo Runner</h3>
            <p class="text-gray-600">Upgraded tactile runner, efficient ad monetization</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnerships & Publishing -->
    <section id="cooperation" class="relative py-24 bg-gradient-to-b from-slate-50 to-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partnerships & Publishing</h2>
          <div class="mx-auto w-24 h-1.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mb-6"></div>
          <p class="text-xl text-gray-600">Flexible collaboration models to create global hits together</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="group bg-white backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 ring-1 ring-gray-200 hover:ring-cyan-400/50 shadow-sm">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Co-development</h3>
            <div class="space-y-3">
              <p class="text-gray-700">• Gameplay co-creation and technical support</p>
              <p class="text-gray-700">• Multi-platform adaptation (iOS/Android)</p>
              <p class="text-gray-700">• Data-driven iteration</p>
            </div>
          </div>
          
          <div class="group bg-white backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 ring-1 ring-gray-200 hover:ring-cyan-400/50 shadow-sm">
            <div class="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Settings class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Publishing</h3>
            <div class="space-y-3">
              <p class="text-gray-700">• Global UA strategy and channel buying</p>
              <p class="text-gray-700">• Ad and IAP monetization solutions</p>
              <p class="text-gray-700">• Localization and live-ops support</p>
            </div>
          </div>
          
          <div class="group bg-white backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 ring-1 ring-gray-200 hover:ring-cyan-400/50 shadow-sm">
            <div class="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield class="h-8 w-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">Technical Support</h3>
            <div class="space-y-3">
              <p class="text-gray-700">• Engine and performance optimization</p>
              <p class="text-gray-700">• Anti-cheat and data security</p>
              <p class="text-gray-700">• Cross-region compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer id="contact" class="bg-gradient-to-br from-zinc-900 to-black text-white py-10 border-t border-zinc-800">
      <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-12">
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex flex-col">
              <div class="relative group">
                <div class="absolute -inset-1 rounded-xl blur-sm opacity-70 group-hover:opacity-90 transition-opacity bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500"></div>
                <div class="relative px-4 py-2 rounded-xl font-bold text-lg flex items-center space-x-2 group-hover:scale-105 transition-all duration-300 text-white bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 shadow-lg shadow-fuchsia-500/30">
                  <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>DENG Game</span>
                  <div class="w-1 h-1 bg-white/70 rounded-full"></div>
                </div>
              </div>
              <!-- <div class="mt-2 flex items-center space-x-2">
                <div class="w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                <span class="text-cyan-400 text-xs font-medium tracking-wider">代码未来科技</span>
              </div> -->
            </div>
            <p class="text-gray-400 text-sm">Focused on mobile game development and global publishing, bridging Eastern and Western cultures</p>
          </div>

          <!-- Team & Products -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-white">Team & Products</h3>
            <div class="space-y-2">
              <p class="text-gray-400">Engine: Unity / Unreal</p>
              <p class="text-gray-400">Genres: Hyper-casual / Runner / Puzzle / Simulation</p>
              <p class="text-gray-400">Publishing: Global UA and localization</p>
            </div>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <div class="space-y-2">
              <p class="text-gray-400">Company: DNI ENGINEERING PTY LTD</p>
              <p class="text-gray-400">Brand: DENG Game</p>
              <p class="text-gray-400">Email: contact@denggame.com</p>
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
        <div class="mt-12 pt-8 border-t border-zinc-800 text-center">
          <p class="text-gray-400 text-sm">© DNI ENGINEERING PTY LTD · DENG Game</p>
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