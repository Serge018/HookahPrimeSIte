<template>
  <div id="ceremonies">
  	<div class="wrap-title"></div>
		

  </div>
</template>

<script>
import drawTitle from '../utils/drawTitle.js';

export default {
  name: 'Ceremonies',
  components: {},
  data () {
    return {
      msg: ''
    }
  },
  computed: {
  	text: function() {
  		return this.$store.getters.text.ceremonies
  	}
  },
  mounted() {
  	const 
  		wrapTitleMain = this.$el.querySelector('.wrap-title');

  	drawTitle({ 
      parent: wrapTitleMain,
      text: this.text.title, 
      width: 540, 
      height: 250,
      wordWrap: true,
      fillGradientStops: [0, 0.9]
    });

  }
}
</script>

<style lang="scss" scoped>
	#ceremonies {

		.wrap-title {
			margin-left: 11.764rem;
		}
	}
</style>
