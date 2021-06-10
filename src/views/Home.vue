<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <h1>Home page</h1>
      <button @click="routeToAboutPage">About Page</button>
  </div>
</template>

<script>


import Banner from "../components/Banner";
export default {
  name: 'home',
    components: {Banner},
    methods : {
      routeToAboutPage()
      {
          this.$router.push({name : "aboutowner",params : {owner : "andrew",id : "77989348"}}).catch(()=>{
              this.$router.push({name : "profileview"})
          });
      }
    }
}
</script>
