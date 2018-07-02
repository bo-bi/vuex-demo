<template>
  <div class="summary-father">
    <button @click="startAction1">触发一个简单的action</button>
    <br>
    <button @click="startAction2">触发一个简单的action(简写)</button>

    <div class="summary">
      1.action函数接收一个与store实例有相同方法和属性的context对象
      <br>
      ①context.commit -> 提交mutation
      <br>
      ②context.state -> 获取state
      <br>
      ③context.getters -> 获取getters
      <br>
      2.简写: {commit} -> commit('increment')
      <br>
      3.触发: store.dispatch('incrementAction')
      <br>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      startAction1() {
        this.$store.dispatch('incrementAction');
      },
      startAction2() {
        this.$store.dispatch('incrementNAction');
      },
    }
  }
</script>

<style scoped>

</style>
