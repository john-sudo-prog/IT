import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import SmbHome from '../views/smb/SmbHome.vue'
import Consulting from '../views/smb/Consulting.vue'
import Migration from '../views/smb/Migration.vue'
import Infra from '../views/smb/Infra.vue'
import Security from '../views/smb/Security.vue'
import CaseStudy1 from '../views/smb/CaseStudy1.vue'
import CaseStudy2 from '../views/smb/CaseStudy2.vue'
import CaseStudy3 from '../views/smb/CaseStudy3.vue'
import CaseStudy4 from '../views/smb/CaseStudy4.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'SmbHome', component: SmbHome },
  { path: '/consulting', name: 'Consulting', component: Consulting },
  { path: '/migration', name: 'Migration', component: Migration },
  { path: '/infra', name: 'Infra', component: Infra },
  { path: '/security', name: 'Security', component: Security },
  { path: '/cases/1', name: 'CaseStudy1', component: CaseStudy1 },
  { path: '/cases/2', name: 'CaseStudy2', component: CaseStudy2 },
  { path: '/cases/3', name: 'CaseStudy3', component: CaseStudy3 },
  { path: '/cases/4', name: 'CaseStudy4', component: CaseStudy4 },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 