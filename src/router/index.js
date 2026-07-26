import { createRouter, createWebHistory } from 'vue-router'

import Landing from '../pages/Landing.vue'
 import Nickname from '../pages/Nickname.vue'
 import Submit from '../pages/Submit.vue'
 import Login from '../pages/Login.vue'
 import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'
 import Inbox from '../pages/Inbox.vue'
 import Play from "../pages/Play.vue";
// import MessageDetail from '../pages/MessageDetail.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/u/:username', component: Landing },
  {
  path: "/play",
  component: Play,
},
//   { path: '/nickname', component: Nickname },
   { path: '/u/:username/submit', component: Submit },
   { path: '/login', component: Login },
  { path: '/register', component: Register },
   { path: '/dashboard', component: Dashboard },
   { path: '/inbox', component: Inbox },
    { path: '/u/:username/nickname', component: Nickname }, // 👈 dynamic route
//   { path: '/inbox/:id', component: MessageDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router


//   <p class="text-sm text-gray-600 text-center mt-4">
    //     Don't have an account?
    //     <RouterLink to="/register" class="text-blue-500 hover:underline">Register</RouterLink>
    //   </p>