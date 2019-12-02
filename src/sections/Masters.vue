<template>
  <div id="masters">
  	<div class="cont-title"></div>
  	<div class="cont-tap-masters">
  		<TapMasters :text="text" />
  	</div>
  </div>
</template>

<script>
import drawTitle from '../utils/drawTitle.js';
import TapMasters from '../components/tapMasters.vue';

export default {
  name: 'Masters',
  components: { TapMasters },
  data () {
    return {
      lang: ''
    }
  },
  computed: {
    text: function() {
      return this.$store.getters.text.primeMasters
    },
  	title: function() {
  		return this.text.title;
  	}
  },
  mounted() {
  	const parentTitle = this.$el.children[0];
  	drawTitle({ 
      parent: parentTitle,
      text: this.title, 
      width: 400, 
      height: 160,
      wordWrap: true,
      fillGradientStops: [0.07,1]
    });
  }
}
</script>

<style lang="scss" scoped>
#masters {
	height: 50vh;

	.cont-title {
		margin-top: 15.47rem;
		margin-left: 11.764rem;
	}

	.cont-tap-masters {
		margin-left: 17.647rem;
	}
}

</style>
