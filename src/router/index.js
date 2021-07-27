import Vue from 'vue'
import Router from 'vue-router'
import AddPaymentForm from '../components/AddPaymentForm.vue'
import About from '../components/About.vue'
import Calc from '../components/Calc.vue'
import Dashboard from '../components/Dashboard.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'dashboard2',
            component: Dashboard
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/about*',
            name: 'about',
            component: About
        },
        {
            path: '/calc',
            name: 'calc',
            component: Calc
        },
        {
            path: '/notFound',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/addpayment/:type',
            name: 'Dashboard3',
            component: AddPaymentForm
        },
        {
            path: '*',
            redirect: '/notFound' // { name: 'NotFound' }
        },
    ]    
});

const userAuth = true;

router.beforeEach((to, from, next) => {
    if(to.name !== 'notFound' && !userAuth) {
        next({ name: 'notFound' })
    }else {
        next()
    }
});

export default router