<template>
  <div class="btn-wrapper">
    <div class="btn-container">
      <div class="btn-intry">{{ text }}
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
  props: [ "text" ],
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
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
  }
  .btn-intry:hover {
    background-color: rgba(255, 170, 0, 0.2);

    .border {
      background-color: rgba(255,187,51,0.9);
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

  .btn-intry {
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
  }

</style>
