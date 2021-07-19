import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import About from '../components/About.vue'
import NotFound from '../components/NotFound.vue'
// import AddPaymentForm from '../components/AddPaymentForm.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'about1',
            component: About
        },
        {
            path: '/about',
            name: 'about2',
            component: About
        },
        {
            path: '/about*',
            name: 'about3',
            component: About
        },
        {
            path: '/notFound',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/addpayment/:type',
            name: 'addpayment',
            component: Dashboard
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