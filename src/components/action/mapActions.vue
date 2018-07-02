<template>
  <div class="summary-father">
    <button @click="incrementAction">count++</button>
    <br>
    <button @click="incrementObjAction({amount: 5})">减去5</button>
    <br>
    <button @click="wait3s">3s后count减去6</button>
    <div class="summary">
      mapActions
      <br>
      1.传递数组
      <br>
      'incrementAction' 将this.incrementAction() 映射为 this.$store.dispatch('incrementAction')
      <br>
      2.传递对象，使用别名调用
      <br>
      wait3s: 'incrementNAction' 将this.wait3s() 映射为 this.$store.dispatch('incrementNAction')
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {

      }
    },
    methods: {
      ...mapActions([
        //将 this.incrementAction() 映射为 this.$store.dispatch('incrementAction')
        'incrementAction',
        //将 this.incrementObjAction({amount: 5}) 映射为 this.$store.dispatch('incrementObjAction',{amount: 5})
        'incrementObjAction'
      ]),
      ...mapActions({
        //将 this.wait3s() 映射为 this.$store.dispatch('incrementNAction')
        wait3s: 'incrementNAction'
      })
    }
  }
</script>

<style scoped>

</style>
