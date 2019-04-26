<template>
  <div class="hello">
    <input type="text"/>
    <span> 파라미터 전달 => {{$route.params.page}}   </span><br>
    <router-link to="page1">1페이지로</router-link>
    <router-link to="page2">2페이지로</router-link>
  </div>
</template>

<script>
export default {
  
  created(){
      
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
