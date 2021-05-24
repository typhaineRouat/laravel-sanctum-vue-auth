import App from './components/App.vue';


import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';



export default{
    mode:'history',

    routes:[
      
        {
            path: '/' , 
            component: App,
            name:'App'
        },
        {
            path: '/register' , 
            component: Register,
            name: 'Register'
        },
        {
            path: '/login' , 
            component: Login,
            name: 'Login'
        },
        {
            path: '/dashboard' , 
            component: Dashboard,
            name: 'Dashboard',
            beforeEnter: (to, from, next) =>{
                axios.get('/api/authenticated').then(()=>{
                    next()
                }).catch(()=>{
                    return next({ name: 'Login'})
                })
            }
        },
    ]
    
}