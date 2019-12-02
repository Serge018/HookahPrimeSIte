<template>
  <div id="tap-masters">
  	<div class="icons">
  		<div 
  			v-for="name in names" 
  			:class="'icon icon-'+name"
        :data-persone="name"
        @click="choosePerson"
  		></div>
  	</div>
  	<div class="container-content">
  		<div 
  			v-for="name in names" 
        class="wrap-content"
  			:class="['wrap-content-'+name, { active: (name === 'Misha') ? isActive : !isActive}]"
  		>
      <div class="cont-name" :class="'cont-name-'+name"></div>
      <div class="discript discript-master">{{ discript[name] }}</div>
  		</div>
  	</div>
  	
  </div>
</template>

<script>
import drawTitle from '../utils/drawTitle.js';
	
export default {
	name: 'TapMasters',
  props: [ "text" ],
	data() {
		return {
			names: ["Misha", "Vova"],
      titles: {
        Misha: this.$props.text.nameMisha,
        Vova: this.$props.text.nameVova
      },
      discript: {
        Misha: this.$props.text.discriptMisha,
        Vova: this.$props.text.discriptVova
      },
      currentName: "Misha",
      flagAutoPlay: true,
      isActive: true
		}
	},
  computed: {},
  methods: {
    choosePerson: function(e) {
      const persone = e.target.dataset.persone;
      if (persone !== this.currentName) {
        this.currentName = persone;
        this.isActive = !this.isActive;
      }
    }
  },
  mounted() {
    this.names.forEach((name) => {
      const 
        titleText = this.titles[name],
        parent = this.$el.querySelector(`.cont-name-${name}`);
      drawTitle({ 
        parent,
        type: "sub-title",
        text: titleText, 
        width: 300, 
        height: 100,
        wordWrap: true,
        fillGradientStops: [0.2, 1]
      });
    });
  }
}
</script>

<style lang="scss" scoped>
	#tap-masters {
    padding-bottom: 300px;

		.icons {
			margin-top: 3.588rem;
			margin-bottom: 4rem;

      .icon {
        width: 5.882rem;
        height: 5.882rem;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer;
        background-size: contain;

        &-Misha {
          background-image: url('../assets/img/Michail_icon/oval@2x.png');
        }

        &-Vova {
          background-image: url('../assets/img/Vovan_icon/oval@2x.png');
          margin-left: 1.235rem;
        }
      }
		}

    .container-content {
      position: relative;
      height: 14.117rem;
      
      .wrap-content {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: opacity 250ms linear;
        opacity: 0;

        &.active {
          opacity: 1;
          transition: opacity 250ms linear 200ms;
        }
      }

      .discript-master {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 5.882rem;
        margin-top: 2.058rem;
        padding-left: 3.529rem;
        border-left: 3px solid var(--gold-color);
      }
    }

	}
</style>