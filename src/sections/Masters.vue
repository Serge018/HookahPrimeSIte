<template>
  <div id="masters">
  	<div class="cont-title"></div>
  	<div class="cont-tap-masters">
  		<tapMasters />
  	</div>
  </div>
</template>

<script>
import { prime_masters } from '../assets/text/text.json';
import drawTitle from '../utils/drawTitle.js';
import tapMasters from '../components/tapMasters.vue';

export default {
  name: 'Masters',
  components: { tapMasters },
  data () {
    return {
      lang: 'en',
      text: prime_masters,
    }
  },
  computed: {
  	title: function() {
  		return this.text.title[this.lang];
  	},
  	nameMisha: function() {
  		return this.text.name_Misha[this.lang]
  	},
  	nameVova: function() {
  		return this.text.name_Vova[this.lang]
  	},
  	discriptMisha: function() {
  		return this.text.discript_Misha[this.lang]
  	},
  	discriptVova: function() {
  		return this.text.discript_Vova[this.lang]
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
