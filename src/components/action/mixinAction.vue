<template>
  <div class="summary-father">
    <button @click="actionA">改变国家</button>
    <br>
    <button @click="change">改变国家在改变名字(调用自己写的方法)</button>
    <br>
    <button @click="actionB">改变国家在改变名字(触发action)</button>
    <div class="summary">
      promise
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    data() {
      return {

      }
    },
    methods: {
      change() {
        this.$store.dispatch('actionA')
          .then( () => {
            this.$store.dispatch('changeNameAction',{
              name: '矢野浩二'
            })
          })
      },
      ...mapActions([
        'actionA',
        'actionB'
      ])
    },
  }
</script>

<style scoped>

</style>
