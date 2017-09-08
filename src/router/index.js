import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/components/index/index'
import deviceCheck from '@/components/deviceCheck/deviceCheck'
import deviceInfo from '@/components/deviceInfo/deviceInfo'
import changePwd from '@/components/changePwd/changePwd'
import installTable from '@/components/installTable/installTable'
import yearTable from '@/components/yearTable/yearTable'
import monthTable from '@/components/monthTable/monthTable'
import statisticsReport from '@/components/statisticsReport/statisticsReport'
import autoAlarm from '@/components/autoAlarm/autoAlarm'
import addFactory from '@/components/addFactory/addFactory'
import login from '@/components/login/login'
import main from '@/components/main/main'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children: [
        {
          path: '/index',
          component: index,
          name: 'index'
        },
        {
          path: '/deviceCheck',
          name: 'deviceCheck',
          component: deviceCheck
        },
        {
          path: '/deviceInfo',
          name: 'deviceInfo',
          component: deviceInfo
        },
        {
          path: '/changePwd',
          name: 'changePwd',
          component: changePwd
        },
        {
          path: '/installTable',
          name: 'installTable',
          component: installTable
        },
        {
          path: '/yearTable',
          name: 'yearTable',
          component: yearTable
        },
        {
          path: '/monthTable',
          name: 'monthTable',
          component: monthTable
        },
        {
          path: '/statisticsReport',
          name: 'statisticsReport',
          component: statisticsReport
        },
        {
          path: '/autoAlarm',
          name: 'autoAlarm',
          component: autoAlarm
        },
        {
          path: '/addFactory',
          name: 'addFactory',
          component: addFactory
        }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
