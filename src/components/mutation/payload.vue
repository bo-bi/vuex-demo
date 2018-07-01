<template>
    <div class="summary-father">
      payload
      <br>
      <input type="text" v-model="n" />
      <br>
      <br>
      <button @click="deleteN">减n(传递一个简单的参数)</button>
      <br>
      <br>
      <button @click="deleteAmount">减amount(传递一个对象)</button>
      <br>
      <button @click="deleteAmountByObj">以对象的方式提交</button>
      <div class="summary">
        payload的形式
        <br>
        1.可以传递一个简单的参数
        <br>
        this.$store.commit("increment",5);
        <br>
        2.可以传递一个对象(推荐)
        <br>
        this.$store.commit("increment",{
        <br>
        <span class="seat-50"></span>amount: 10
        <br>
        });
        <br>
        3.整体以对象的方式提交，包括type
        this.$store.commit({
        <br>
        <span class="seat-50"></span>type: 'increment'
        <br>
        <span class="seat-50"></span>amount: 10
        <br>
        });
      </div>
    </div>
</template>

<script>
    export default {
      data() {
          return {
            n: 0
          }
      },
      methods: {
        //向mutation传递一个简单的参数
        deleteN() {
          this.$store.commit('incrementN',this.n);
          console.log(this.$store.state.count,"减去n的count")
        },
        //向mutation传递一个对象
        deleteAmount() {
          this.$store.commit('incrementObj',{
            amount: this.n
          })
        },
        //以对象的方式进行提交
        deleteAmountByObj() {
          this.$store.commit({
            type: 'incrementObj',
            amount: this.n
          });
        }
      }
    }
</script>

<style scoped>

</style>
