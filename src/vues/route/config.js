import NotFound from '../../views/404View.vue'
import HomeView from '../../views/HomeView.vue'
import LoginView from '../../views/LoginView.vue'
import UsersView from '../../views/nav1/UsersView.vue'
import FormView from '../../views/nav1/FormView.vue'
import TableView from '../../views/nav1/TableView.vue'
//import EchartsView from '../../views/charts/EchartsView.vue'  //这玩意巨大 5m
import Page1 from '../../views/nav1/Page1.vue'
import Page2 from '../../views/nav1/Page2.vue'
import Page3 from '../../views/nav1/Page3.vue'
import Page4 from '../../views/nav2/Page4.vue'
import Page5 from '../../views/nav2/Page5.vue'

let routes = [
  {
    path: '/login',
    component: LoginView,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  {
    path: '/',
    component: HomeView,
    name: '员工通讯录',
    iconCls: 'fa fa-address-card-o',
    children: [
      {path: '/table', component: TableView, name: '员工列表', iconCls: 'fa fa-user-o'}
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: {path: '/404'}
  }
]

export default routes

