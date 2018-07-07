<template>
  <div class="summary-father">
    <button @click="incrementAction">触发一个不带参数的action</button>
    <br>
    <br>
    <button @click="incrementObjAction">触发一个传递payload的action</button>
    <br>
    <br>
    <button @click="sendActionByObj">以对象的方式进行分发</button>
    <br>
    <button @click="sendActionObjToArray">发送一个对象到数组</button>

    <div class="summary">
      1.传递payload
      <br>
      store.dispatch('incrementObj',{
      <br>
      <span class="seat-10"></span>amount: 10
      <br>
      })
      <br>
      2.以对象的方式进行分发
      <br>
      store.dispatch({
      <br>
      <span class="seat-10"></span>type: 'incrementObj'
      <br>
      <span class="seat-10"></span>amount: 10
      <br>
      })
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
      //触发一个不带参数的action
      incrementAction() {
        this.$store.dispatch('incrementAction');
      },
      //触发一个传递payload的action
      incrementObjAction() {
        this.$store.dispatch('incrementObjAction',{
          amount: 5
        })
      },
      //以对象的方式进行分发
      sendActionByObj() {
        this.$store.dispatch({
          type: 'incrementObjAction',
          amount: 10
        })
      },
      sendActionObjToArray() {
        this.$store.dispatch('sendActionObjToArray',{
          name: 'jack'
        })
      }
    }
  }
</script>

<style scoped>

</style>
