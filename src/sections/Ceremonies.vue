<template>
  <div id="ceremonies">
  	<div class="wrap-title"></div>
      <blockContent 
        v-for="(opt, i) in optSet" 
        v-bind:key="i"
        :opt="opt" 
      />
  </div>
</template>

<script>
import drawTitle from '../utils/drawGradientTitle.js';
import blockContent from '../components/blockContentCeremonies';

export default {
  name: 'Ceremonies',
  components: { blockContent },
  data () {
    return {
      setBlockName: this.$store.state.setBlockName
    }
  },
  computed: {
  	title: function() {
  		return this.$store.getters.text.ceremonies.title;
  	},
    optSet: function() {
      return this.$store.getters.optDiscript;
    }
  },
  mounted() {
  	const 
  		wrapTitleMain = this.$el.querySelector('.wrap-title');

  	drawTitle({ 
      parent: wrapTitleMain,
      text: this.title, 
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
      margin-bottom: 8.529rem;
		}
	}
</style>
