<template>
  <div id="about-us">
    <div class="rich-text title"></div>

    <div class="mark-discript-wrap">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="mark-discript">
        {{ markDiscript }}
      </div>
    </div>

    <div class="discript">{{ discript }}</div>
  </div>
</template>

<script>
  import { abut_us } from '../assets/text/text.json';
  import utils from '../utils/utils.js'

export default {
  name: 'AboutUs',
  data () {
    return {
      lang: "en",
      text: abut_us
    }
  },
  computed: {
    title: function() {
      return this.text.title[this.lang];
    },
    discript: function() {
      return this.text.discript[this.lang];
    },
    markDiscript: function() {
      return this.text.mark_discript[this.lang];
    }
  },
  mounted() {
    const parent = this.$el.children[0];
    utils.createTitle({ 
      parent, 
      text: this.title, 
      width: 400, 
      height: 70
    });
  }
}
</script>

<style lang="scss" scoped>
	#about-us {
		height: 100vh;
		width: 100%;
	}

  .rich-text {
    margin-top: 14.882rem;
    margin-left: 17.647rem;
  }

  .mark-discript-wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 30.588rem;
    height: 7.647rem;
    padding-left: 5.882rem;
    margin-left: 11.764rem;
    margin-top: 2.764rem;
    border-radius: 4.411rem;
    box-sizing: border-box;
    // box-sizing: padding-box;
    background: linear-gradient(90deg, rgba(255,187,51,0.1) 0%, rgba(255,187,51,0.0) 40%);
      
    .top,
    .bottom {
      display: block;
      position: absolute;
      height: 1px;
      left: 5.87rem;
      width: 24.705rem;
      background: linear-gradient(90deg, rgba(255,187,51, 1) 0%, rgba(255,187,51,0.0) 60%);
    }

    .top {
      top: -1px;
    }

    .bottom {
      bottom: -1px;
    }

    &:after {
      position: absolute;
      left: 0px;
      top: -1px;
      content: "";
      height: 100%;
      width: 5.882rem;
      border-radius: 4.411rem 0 0 4.411rem;
      border: 1px solid var(--gold-color);
      border-right: none;
    }
  }

  .discript {
    width: 32.823rem;
    display: flex;
    align-items: center;
    height: 10.705rem;
    margin-left: 17.647rem;
    padding-left: 3.411rem;
    border-left: 2px solid var(--gold-color);
  }

</style>
