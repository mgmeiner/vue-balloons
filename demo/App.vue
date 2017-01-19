<template>
  <div class="demo-container">
    <span class="small"><surpriseTextGenerator text="SmallBalloons" /></span>
    <span class="medium"><surpriseTextGenerator text="MediumBalloons" /></span>
    <span class="large"><surpriseTextGenerator text="LargeBalloons" /></span>
    <span class="ultra"><surpriseTextGenerator text="UltraLargeBalloons" /></span>
    <span class="extreme"><surpriseTextGenerator text="ExtremeLargeBalloons" /></span>
  </div>
</template>

<script>
  import surpriseTextGenerator from '../lib/SurpriseTextGenerator';

  export default {
    name: 'app',
    components: {
      surpriseTextGenerator
    }
  };
</script>

<style lang="less"> 
  .demo-container {   
    margin-top: 10vh;
    margin-left: 10vw;
  }

  .small {
    font-size: 1rem;
  }

  .medium {
    font-size: 2rem;
  }

  .large {
    font-size: 3rem;
  }

  .ultra {
    font-size: 4rem;
  }

  .extreme {
    font-size: 10rem;
  }
</style>