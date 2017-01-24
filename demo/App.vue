<template>
  <div class="demo-container">
    <div class="small"><vueBalloons text="Small Balloons" /></div>
    <div class="medium"><vueBalloons text="Medium Balloons" /></div>
    <div class="large"><vueBalloons text="Large Balloons" /></div>
    <div class="ultra"><vueBalloons text="Ultra Large Balloons" /></div>
    <div class="extreme"><vueBalloons text="Extreme Large Balloons" /></div>
  </div>
</template>

<script>
  import vueBalloons from '../lib/VueBalloons';

  export default {
    name: 'app',
    components: {
      vueBalloons
    }
  };
</script>

<style lang="less" scoped> 
  .demo-container {   
    margin-top: 10vh;
    margin-left: 10vw;

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
  }
</style>