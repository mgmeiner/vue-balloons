<template>
  <div class="vue-balloons" @mouseover="onMouseover" @mouseleave="onMouseleave" :class="{ fly: fly }">
    <span class="balloon" :class="getBallonClasses(letter)" v-for="letter in text.split('')">{{letter}}</span>
  </div>
</template>

<script>
  export default {
    name: 'vue-balloons',
    props: ['text'],
    data () {
      return {
        fly: false
      };
    },
    methods: {
      getBallonClasses (letter) {
        let ballonClass = letter === ' ' ? 'empty' : '';
        ballonClass += " balloon-state--" + (Math.floor(Math.random() * 9) + 1).toString();
        return ballonClass;
      },
      onMouseover () {
        this.fly = true;
      },
      onMouseleave () {
        this.fly = false;
      }
    }
  };
</script>

<style lang="less">
  .vue-balloons {
    display: inline;

    .balloon {
      transition: 0.2s ease-in-out;
      display: inline-block;
      text-align: center;

      &.empty {
        width: 0.3em;

        &:before {
          content:"";
        }
      }
      
      &:before {
        content:"▴";
        font-size: 0.2em;
        display: none;
        position: absolute;
        bottom: 0;
        margin-bottom: -0.6em;
        left: 50%;
        z-index: -1;
      }
    }

    &.fly {
      .balloon {    
        transition: 1s ease-in-out;
        border-radius: 1em 1em;
        width: 1em;
        margin-right: 3px;
        position: relative;
        color: #FFF;

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
  }

  .ballonState(@color, @delay) {
    background-color: @color;
    animation: balloon (@delay * 10) ease-in-out infinite;

    &:before {
      color: @color;
    }
  }

  @keyframes balloon {
    0%,100%{ transform:translateY(0) rotate(-4deg); }
    50%{ transform:translateY(-0.2em) rotate(4deg); }
  }
</style>
