<template>
  <div class="vue-balloons">
    <div class="balloon" :class="getRandomBallonStateClass()" v-for="letter in text.split('')">{{letter}}</div>
  </div>
</template>

<script>
  export default {
    name: 'vue-balloons',
    props: ['text'],
    methods: {
      getRandomBallonStateClass () {
        return "balloon-state--" + (Math.floor(Math.random() * 9) + 1).toString();
      }
    }
  };
</script>

<style lang="less">
  .vue-balloons {
    
    &:hover {
      .balloon {            
        border-radius: 1em 1em;
        width: 1em;
        margin-right: 3px;
        position: relative;
        color: #FFF;
        
        .ballonState(@color, @delay) {
            background-color: @color;
            animation-delay: @delay;
            animation: balloon (@delay * 10) ease-in-out infinite;

            &:before {
              color: @color;
            }
        }

        &.balloon-state {
          &--1 {
            .ballonState(#ff0043, 0.2s);
          }

          &--2 {
            .ballonState(#FFDE00, 0.4s);
          }

          &--3 {
            .ballonState(#6599FF, 0.1s);
          }

          &--4 {
            .ballonState(#FF9900, 0.7s);
          }

          &--5 {
            .ballonState(#990033, 0.12s);
          }

          &--6 {
            .ballonState(#6600CC, 0.25s);
          }

          &--7 {
            .ballonState(#3366CC, 0.18s);
          }

          &--8 {
            .ballonState(#333399, 0.26s);
          }

          &--9 {
            .ballonState(tomato, 0.5s);
          }
        }

        &:before {
          display: block;
        } 
      }
    }

    .balloon {
      transition: 1s ease-in-out;
      display: inline-block;
      text-align: center;
      
      &:before {
        @triangleSize: 20px;

        content:"▴";
        font-size: @triangleSize;
        display: none;
        position: absolute;
        bottom: 0;
        margin-bottom: -@triangleSize / 2;
        left: calc(50% - @triangleSize / 2);
      }
    }
  }

  @keyframes balloon {
    0%,100%{ transform:translateY(0) rotate(-4deg); }
    50%{ transform:translateY(-0.4em) rotate(4deg); }
  }
</style>
