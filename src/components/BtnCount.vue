<template>
  <div class="btn-count">
    <div class="line line-top"></div>
    <div class="line line-bottom"></div>    
    <div class="line line-right"></div>
    <div class="label">
      <div class="img" :class="prop.type"></div>
      <div class="text discript">{{ prop.textLabel }}</div>
    </div>
    <div class="counter">
      <div class="face price">{{ count }}</div>
      <div class="btn-wrapper">
        <div class="btn btn-up" @click="increment()">
          <svg width="12" height="6" viewPort="0 0 12 6">
            <polygon points="0,6 6,0 12,6" fill="#000" stroke="#ffbb33" stroke-width="1" />
          </svg>
        </div>
        <div class="line line-br"></div>
        <div class="btn btn-down" @click="decrement()">
          <svg width="12" height="6" viewPort="0 0 12 6">
             <polygon points="0,0 6,6 12,0" fill="#000" stroke="#ffbb33" stroke-width="1" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtnCount',
  props: ["prop"],
  data () {
    return {
      count: 0,
      type: this.$props.prop.type
    }
  },
  methods: {
    increment() {
      if (this.count === 99) {
        this.count = 0;
      } else {
        this.count += 1;
      }
      this.$emit("changeCount", { type: this.type, count: this.count });
    },
    decrement() {
      if (this.count === 0) {
        this.count = 99;
      } else {
        this.count -= 1;
      }
      this.$emit("changeCount", { type: this.type, count: this.count });
    }
  }
}
</script>

<style lang="scss" scoped>

	.btn-count {
		width: 17.643rem;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
	}

  .line {
    position: absolute;

    &-top,
    &-bottom {
      height: 1px;
      left: 0px;
      right: 1px;
      background: linear-gradient(90deg, rgba(255,187,51,0) 0%, rgba(255,187,51,0.9) 100%);
    }

    &-top {
      top: 0px;
    }

    &-bottom {
      bottom: 0px;
    }

    &-right {
      height: 100%;
      width: 1px;
      right: 0px;
      top: 0px;
      background-color: rgba(255,187,51,0.9);
    }
  }

  .label {
    display: flex;
    height: 100%;
    align-items: center;

    .img {
      height: 100%;
      width: 4.411rem;
      transform: scaleY(1.1);
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position-x: 0.888rem;

      &.countHookah {
        background-image: url("../assets/img/hookah_icon.svg");
      }

      &.countHour {
        background-image: url("../assets/img/send_clock_icon.svg");
      }
    }
  }

  .counter {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .face {
      display: inline-block;
    }

    .btn-wrapper {
      position: relative;
      height: 100%;
      width: 2.941rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-left: 0.788rem;

      &:after {
        display: block;
        position: absolute;
        top: 50%;
        left: 0px;
        height: 1px;
        width: 100%;
        transform: translateY(-50%);
        content: "";
        background: linear-gradient(90deg, rgba(255,187,51,0.0) 0%, rgba(255,187,51,1) 100%);
      }

      .btn {
        will-change: background-position;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50%;
        cursor: pointer;
        background: linear-gradient(90deg, rgba(255,187,51,0.0) 50%, rgba(255,187,51,0.4) 100%);
        background-size: 200% 100%;
        background-position: 1%;
        transition: background-position 300ms; 

        &:hover {
          background-position: 100%;

          polygon {
            fill: #ffbb33;
          }
        }
      }
    }
  }
  polygon {
    transition: fill 300ms;
  }

</style>
