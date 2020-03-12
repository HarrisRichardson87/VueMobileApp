import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import How from '../components/How'
import Table from '../components/Table'
import Search from '../components/Search'
import Chat from '../components/Chat'
import Welcome from '../components/Welcome'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,Search,
    props:true
  },
  {
    path: '/Graphs',
    name: 'Graphs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Graphs.vue')
  },{
    path: '/login',
    name: 'login',
    component: Login
},
{
    path: '/register',
    name: 'Register',
    component: Register
},
{
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
},
{
  path: '/how',
  name: 'how',
  component: How
},{
  path: '/table',
  name: 'table',
  component: Table
},
{
  path: '/chat',
  name: 'chat',
  component: Chat,
  props:true,
  beforeEnter: (to,from,next) =>{
    if(to.params.name){
      alert(to.params.name)
      next()

    }else{
      next({
        name:'welcome',
        userName:"DUmmy"
      })
    } 
    
  },
  
},
{
  path:'/welcome',
  name:'welcome',
  component: Welcome
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
