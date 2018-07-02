<template>
  <div>
    <router-link :to="{name: 'stateItem'}">一.state</router-link>
    <br>
    <br>
    <router-link :to="{name: 'mutationItem'}">二.mutation</router-link>
    <br>
    <br>
    <router-link :to="{name: 'actionItem'}">三.action</router-link>
    <hr>
    内容
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
