<template>
  <div class="btn btn-wrapper">
    <div class="btn-container">
      <div class="btn-intry" 
        v-on:click="flare" 
        :class="{ blink : isBlink }"
         > {{ text }}
        <div class="border border-top"></div>
        <div class="border border-bottom"></div>
        <div class="border border-left"></div>
        <div class="border border-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnShowCalc',
  data () {
    return {
      isBlink: false
    }
  },
  props: [ "text" ],
  methods: {
    flare: function () {
      this.isBlink = true;
      this.$emit("showCalc", true);
    }
  }
}
</script>

<style lang="scss" scoped>

  .fade-leave-active {
    transition-property: opacity;
    transition-duration: 300ms;
    transition-delay: 300ms;
    transition-timing-function: cubic-bezier(.63,.22,.85,.36);
  }

  .fade-leave-to {
    opacity: 0;
  }

  .btn-wrapper {
    position: absolute;
    top: 38.823rem;
    left: 50%;
    transform: translateX(-50%);
  }
	.btn-container {
    display: flex;
    align-items: center;
    font-size: 0.882rem;
    line-height: 2em;
    letter-spacing: 5px;
    color: white;
    width: 17.098rem;
    height: 10.558rem;
	}
  .btn-intry {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 33.33%;
    cursor: pointer;
    transition: background-color 150ms linear;

    &.blink,
    &.blink:hover {
      transition-property: background-color;
      transition-duration: 300ms;
      transition-timing-function: cubic-bezier(.04,.98,.01,1.44);
      background-color: rgba(255, 170, 51, 0.9);

      &:before,
      &:after{
        transition: opacity 200ms linear;
        opacity: 0;
      }
      .border {
        background-color: rgba(255,187,51,1);
      }
    }

    &:before,
    &:after {
      display: block;
      content: "";
      position: absolute;
      left: 50%;
      width: 1px;
      height: 100%;
      transform: translateX(-50%);
    }
    &:before {
      background: linear-gradient(180deg, rgba(255,187,51,0.9) 0%, rgba(255,187,51,0.2) 98%);
      top: 100%;
    }
    &:after {
      background: linear-gradient(0deg, rgba(255,187,51,0.9) 0%, rgba(255,187,51,0.2) 98%);
      bottom: 100%;
    }

    &:hover {
      background-color: rgba(255, 170, 51, 0.2);

      .border {
        background-color: rgba(255,187,51,0.9);
      }
    }
  }

  .border {
    position: absolute;
    transition: background-color 150ms linear;

    &-top,
    &-bottom {
      height: 1px;
      background: linear-gradient(90deg, rgba(255,187,51,0.2) 0%, rgba(255,187,51,0.9) 50%, rgba(255,187,51,0.2) 100%);
    }
    &-left,
    &-right {
      width: 1px;
      height: 100%;
      background-color: rgba(255,187,51,0.2);
    }
    &-top,
    &-bottom {
      right: 1px;
      left: 1px;
    }
    &-top {
      top: 0px;
    }
    &-bottom {
      bottom: 0px;

    }
    &-left {
      top: 0px;
      left: 0px; 
    }
    &-right {
      right: 0px;
      bottom: 0px; 
    }
  }

</style>
