<template>
    <div>
        <nav-header></nav-header>
       
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
// import jsonP from 'jsonp';
// import storage from './../storage/index'
export default {
    name: 'home',
    components:{
        NavHeader,
        NavFooter
    },
    created(){    
        // storage.setItem('test',{'user':1});
        // storage.setItem('age',12,'test');
        // console.log(storage.getAll());
        this.axios.get("/user/login").then(res=>{
            console.log(res);
        });
    }
}
</script>