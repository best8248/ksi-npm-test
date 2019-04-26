<template>
  <div>
    <button v-on:click="buttonclick">원래 화면으로</button>
  </div>
</template>
<script>
export default {
  methods: {
    created () {
      console.dir(this)
    },
    buttonclick () {
      this.$router.replace({name: 'helloworld', params: {page: 1}})
    }
  },
    
}
</script>