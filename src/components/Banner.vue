<template>
    <div class="container">
        <p class="content">localCount: {{localCount}}</p>
        <button @click="multiplyBy2">multiplyBy2</button>
        <button @click="divideBy2">divideBy2</button>
    </div>
</template>
<script>
export default {
    name: 'Banner',
    // data(){
    //     return{
    //         localCount : this.count
    //     }
    // },
    computed : {
        localCount(){
            return this.$store.state.count;
        }
    },
    methods:{
        multiplyBy2(){
            this.$store.commit('multiplyBy2');
        },
        divideBy2(){
            this.$store.commit('divideBy2');
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    min-width: 500px;
    height: 30px;
    border: 1px solid red;
    background: rgb(250, 146, 146);
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
.content{
    display: inline-block;
    flex-grow: 1;
}
.close-icon{
    margin-left: 10px;
}
</style>