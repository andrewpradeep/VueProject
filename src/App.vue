<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex';
// import Gitar from '@/components/Gitar.vue';
export default {
  name : 'App',
  data(){
    return{
      //count: 10
    }
  },
  computed : {
    ...mapState(['count']),
    ...mapGetters(['getCountValue'])
    // count(){
    //   return this.$store.state.count;
    // },
    // getCountValue(){
    //   return this.$store.getters.getCountValue;
    // }
  },
  methods:{
    ...mapMutations(['decrementBy2']),
    ...mapActions(['setAfter5Sec']),

    incrementBy2(){
      // this.$store.commit('incrementBy2');
      this.setAfter5Sec();
      //this.$store.dispatch('setAfter5Sec');
    },
    // decrementBy2(){
    //   this.decrementBy2();
    //   // this.$store.commit('decrementBy2');
    // }
  },
}
</script>
<style lang="less">
  body{
    //background-color: #F3AC3C;
    display: grid;
    place-items: center;
    font-family: sans-serif;
    font-size: 18px;
  }
  #app{
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }
</style>
