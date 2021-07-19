<template>
    <div>
        <!-- 엔터쳐도 자동으로 실행되게 -->
        조회할 이력서 코드 : <input type="text" placeholder="이력서 고유값" v-model="query"/> 
        <button @click="onSearch">검색</button>
        <button @click="showParam">검색2</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    path: '/search',
    data(){
        return {
            query : "",
        }
    },
    methods:{
        async onSearch(){
            // res = await axios.get('https://httpbin.org/get')
            await axios.get("http://localhost:8081/search?r="+this.query);
            alert(this.query);
        },
        showParam(){
            console.log(this.$route.query.r);
        }
    }
    
}
</script>

<style>

</style>