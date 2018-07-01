<template>
  <div class="summary-father">
    mapState
    <br>
    <router-link :to="{name: 'mapState.object'}">1.mapState传递对象</router-link>
    <br>
    <router-link :to="{name: 'mapState.array'}">2.mapState传递数组</router-link>
    <br>
    <router-link :to="{name: 'mapState.mixin'}">3.mapState与局部计算属性混合使用</router-link>
    <br>
    <router-view></router-view>
    <div class="summary">
      mapState
      <br>
      作用：为了简化computed获取state写多个函数
      <br>
      <br>
      1.mapState传递对象
      <br>
      ①key(data命名): value(函数)
      <br>
       - 函数操作
      <br>
       - 传递参数state
      <br>
       - 直接获取state子节点
      <br>
      ②注: 若获取局部状态须使用常规函数
      <hr>
      2.mapState传递数组
      <br>
      场景：当映射的计算属性的名称与state的子节点名称相同时，可以给mapState传一个字符串数组
      <hr>
      3.mapState与局部属性混合使用
      <br>
      mapState() 返回的是一个对象
      <br>
      ↓
      ↓
      ↓
      <br>
      用对象展开运算符    ...mapState(传递对象或者数组)
    </div>
  </div>
</template>

<script>

  export default {
      data() {
          return {

          }
      },
  }
</script>

<style scoped>

</style>
