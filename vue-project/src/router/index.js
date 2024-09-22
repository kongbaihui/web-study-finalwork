import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'


Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/finalHomework/SearchView.vue')
  },
  {
    path:'/home',
    name:'home',
    component: () => import('../views/finalHomework/HomeView.vue')
  },
  {
    path:'/cal',
    name:'cal',
    component: () => import('../views/finalHomework/CalendarView.vue')
  },
  {
    path:'/about',
    name:'about',
    component: () => import('../views/finalHomework/AboutView.vue')
  },
  {
    path:'/file',
    name:'file',
    component: () => import('../views/finalHomework/ProfileView.vue')
  },
  {
    path:'/contact',
    name:'contact',
    component: () => import('../views/finalHomework/ContactView.vue')
  },
  {
    path:'/my',
    name:'my',
    component: () => import('../views/finalHomework/MyView.vue')
  },
  {
    path:'/serve',
    name:'serve',
    component: () => import('../views/finalHomework/ServeView.vue')
  },
  {
    path:'/page1',
    name:'page1',
    component: () => import('../views/finalHomework/PageOneView.vue')
  },  
  {
    path:'/page2',
    name:'page2',
    component: () => import('../views/finalHomework/PageTwoView.vue')
  },
  {
    path:'/page3',
    name:'page3',
    component: () => import('../views/finalHomework/PageThreeView.vue')
  },  
  {
    path:'/page4',
    name:'page4',
    component: () => import('../views/finalHomework/PageFourView.vue')
  },
  {
    path:'/page5',
    name:'page5',
    component: () => import('../views/finalHomework/PageFiveView.vue')
  },
  {
    path:'/page6',
    name:'page6',
    component: () => import('../views/finalHomework/PageSixView.vue')
  },
  {
    path:'/page7',
    name:'page7',
    component: () => import('../views/finalHomework/PageSevenView.vue')
  },
  {
    path:'/page8',
    name:'page8',
    component: () => import('../views/finalHomework/PageEight.vue')
  }, 
  {
    path:'/page9',
    name:'page9',
    component: () => import('../views/finalHomework/PageNine.vue')
  },
  {
    path:'/page10',
    name:'page10',
    component: () => import('../views/finalHomework/PageTen.vue')
  },
  {
    path:'/page11',
    name:'page11',
    component: () => import('../views/finalHomework/PageElevenView.vue')
  },
  {
    path:'/page12',
    name:'page12',
    component: () => import('../views/finalHomework/PageTwelveView.vue')
  },
  {
    path:'/page13',
    name:'page13',
    component: () => import('../views/finalHomework/PageThirteenView.vue')
  },
  {
    path: '/',
    redirect: '/search',
  }

]

const router = new VueRouter({
  routes
})

export default router
