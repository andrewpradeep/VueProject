<template>
  <div class="container">
      <div class="circle circle1 center">
        <div class="string-end center"></div>
      </div>
      <div class="circle circle2 center">
        <div class="hole center circle"></div>
      </div>
      <div class="center bar"></div>
      <div class="head">
        <span class="string-head"></span>
        <span class="string-head"></span>
      </div>
  </div>
</template>
<script>
export default {
    name : 'Gitar'
}
</script>
<style lang="less" scoped>
  .container{
   	position: relative;
    width: 500px;
    height: 500px;
    transform: rotate(-45deg);
  }
  .center{
    position : absolute;
    left : 50%;
    top: 50%;
    transform : translate(-50%, -50%);
  }
  .circle{
    border-radius : 50%;
  }
  .circle1{
    width: 120px;
    height: 120px;
    left : 25%;
    background-color: #998235;
  }
  .string-end{
    height: 30px;
    width : 0;
    border-radius: 15px;
    border: 5px solid #1A4341;
    left : 34%;
    transform : translate(0%, -50%);
  }
  
  .circle2{
    width: 100px;
    height: 100px;
    left : 38%;
    background-color: #998235;
  }
  .hole{
    width : 40px;
    height: 40px;
    background-color: #1A4341;
    border: 5px solid #F3AC3C;
  }
  .bar{
    width : 120px;
    height: 20px;
    background-color: #1A4341;
    transform : translate(-10%, -50%);
  }
  .head{
    width : 40px;
    height: 30px;
    border-radius: 10px;
    position : absolute;
    top: 50%;
	left : 75%;
    transform : translate(-70%, -50%);
    background-color: #998235;
    display: flex;
    flex-wrap: wrap;
    flex-direction : column;
    justify-content: space-around;
    align-items: center;
  }
  .head::before,
  .head::after{
    content: '';
  }
  .string-head{
    width : 20px;
    height: 4px;
    border-radius: 4px;
    background-color: #1A4341;
  }
</style>