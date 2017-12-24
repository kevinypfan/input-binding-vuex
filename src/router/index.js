import Vue from 'vue'
import Router from 'vue-router'

import VmodelDetail from '../pages/VmodelDetail.vue'
import InputStoreBind from '../pages/InputStoreBind.vue'
import Next from '../pages/Next.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/1', component: VmodelDetail },
    { path: '/2', component: InputStoreBind },
    { path: '/next', component: Next }
  ],
  mode: 'history'
})
