<template>
  <div>
    <div class="item-abstract">
      mutation(类似事件) -> 更改state的唯一方法 -> commit mutation/mapMutations
      <br>
      <br>
      <span class="seat-100"></span>每个mutation
      <br>
      <span class="seat-100"></span>↙
      <span class="seat-50"></span>↘
      <br>
      <span class="seat-50"></span>事件类型(type) :
      <span class="seat-10"></span>回调函数(handler) -> 状态更改的地方(接受state作为第一个参数)
      <br>
      <br>
      <br>
      <span class="seat-100"></span>目的：调用mutation的handler
      <br>
      <span class="seat-100"></span><span class="seat-100"></span>↓
      <br>
      <span class="seat-100"></span>store.commit('increment')
      <br>
      <span class="seat-100"></span><span class="seat-100"></span>↓
      <br>
      <span class="seat-100"></span>以相应的type调用 store.commit方法
      <br>
      <span class="seat-100"></span><span class="seat-100"></span>↓
      <br>
      <span class="seat-100"></span>触发一个类型为increment的mutation时，调用handler
      <br>
      <br>
      <span class="seat-100"></span>事件<span class="seat-50"></span>-><span class="seat-50"></span>事件注册
      <br>
      <span class="seat-100"></span>mutation<span class="seat-50"></span>store.commit
    </div>
    <button @click="changeCount">更改state中的count</button>
    <router-link :to="{name: 'mutationItem.payload'}">1.payload->向mutation传入额外的参数</router-link>
    <router-link :to="{name: 'mutationItem.rules'}">2.mutation注意事项</router-link>
    <router-link :to="{name: 'mutationItem.constReplaceType'}">3.使用常量替代mutation的事件类型</router-link>
    <a href="javascript: void(0)">4.Mutation必须是同步函数！</a>
    <router-link :to="{name: 'mutation.commit'}">5.在组件中提交mutation</router-link>
    <router-view class="children-content"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      changeCount() {
        this.$store.commit('increment');
      }
    }
  }
</script>

<style scoped>
  a {
    display: block;
  }
  .children-content {
    width: 1000px;
    height: 600px;
    border: 1px solid #ccc;
  }
</style>
