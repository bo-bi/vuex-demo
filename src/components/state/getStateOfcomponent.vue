<template>
   <div class="summary-father">
     {{count}}







     <!--总结-->
     <div class="summary">
         1.向根组件#app注册store选项，该store实例会注册到跟组件下的所有子组件
         <br>
         2.获取state -> this.$store.state.count
     </div>
   </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        data() {
            return {

            }
        },
         computed: {
           count() {
             return this.$store.state.count;
           }
         }
    }
</script>

<style scoped>

</style>
