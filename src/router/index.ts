import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InscricaoView from '../views/InscricaoView.vue'
import LocalizacaoView from '../views/LocalizacaoView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/inscricoes',
    name: 'inscrcao',
    component: InscricaoView
  },
  {
    path: '/localizacao',
    name: 'localizacao',
    component: LocalizacaoView
  },
]

const router = new VueRouter({
  routes
})

export default router
