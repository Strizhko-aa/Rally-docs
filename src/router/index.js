import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage'
import DocumentsPage from '../components/Documents'
import OrderPage from '../components/Order/OrderPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      title: 'Home',
      component: MainPage
    },
    {
      path: '/Documents',
      name: 'Documents',
      title: 'Документы',
      component: DocumentsPage
    },
    {
      path: '/Order',
      name: 'Order',
      title: 'Заявка',
      component: OrderPage
    }
  ]
})
