<template>
  <div>
    <div class="item-abstract">
      action(类似mutation) -> 提交的是mutation -> 可以异步操作
      <br>
      ①action用来提交mutation，而不是直接变更状态
      <br>
      ②action可以包含任意异步操作
      <br>
      ③要看mutation中的代码
    </div>
    <router-link :to="{name: 'actionItem.simple'}">1.注册一个简单的 action</router-link>
    <router-link :to="{name: 'actionItem.send'}">2.action以payload和对象方式进行分发</router-link>
    <!--<router-link :to="{name: 'mutationItem.constReplaceType'}">3.使用常量替代mutation的事件类型</router-link>-->
    <!--<a href="javascript: void(0)">4.Mutation必须是同步函数！</a>-->
    <!--<router-link :to="{name: 'mutation.commit'}">5.在组件中提交mutation</router-link>-->
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
