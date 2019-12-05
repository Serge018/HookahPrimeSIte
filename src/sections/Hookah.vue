<template>
  <div id="hookahs">
		<div class="hookahs-img">
			<div class="hokah-img hokah-img-back hokah-img-left"></div>
			<div class="hokah-img hokah-img-back hokah-img-right"></div>
			<div class="hokah-img hokah-img-front"></div>
		</div>
		<div class="content">
			<div class="wrap-title"></div>
			<div class="mark-discript-wrap">
	      <div class="top"></div>
	      <div class="bottom"></div>
	      <div class="mark-discript">{{ markDiscript }}</div>
	    </div>
			<div class="discript">{{ discript }}</div>
		</div>
  </div>
</template>

<script>
import drawTitle from '../utils/drawTitle.js';
import helpers from '../utils/helpers.js';

export default {
  name: 'Hookah',
  data () {
    return {
      displacement: {
      	frontHokah: 150,
      	backHookahs: 70
      }
    }
  },
  computed: {
  	text: function() {
  		return this.$store.getters.text.primeHookah;
  	},
  	title: function() {
  		return this.text.title;
  	},
  	markDiscript: function() {
  		return this.text.markDiscript;
  	},
  	discript: function() {
  		return this.text.discript;
  	}
  },
  mounted() {
  	const 
  		parentTitle = this.$el.querySelector('.wrap-title'),
  		frontHokah = this.$el.querySelector('.hokah-img-front'),
  		setOfBackHokah = this.$el.querySelectorAll('.hokah-img-back');

  	drawTitle({ 
      parent: parentTitle,
      text: this.title, 
      width: 400, 
      height: 160,
      wordWrap: true,
      fillGradientStops: [0.07,1]
    });

  	const runParallax = () => {
  		const 
  			indent = this.$el.getBoundingClientRect().y,
  			windowHeight = window.innerHeight,
  			heightElem = helpers.getPropStyle(this.$el, 'height');

  		if (indent<windowHeight && indent>-heightElem ) {
	  		const 
	  			amplitude = windowHeight+heightElem,
	  			delta = 0.5-(amplitude-indent-heightElem)/amplitude,
	  			shiftFront = delta*this.displacement.frontHokah,
	  			shiftBack = delta*this.displacement.backHookahs;

	  		frontHokah.style.transform = `translateY(${shiftFront}px)`;
	  		setOfBackHokah.forEach(elem => elem.style.transform = `translateY(${-shiftBack}px)`)
  		}
  		requestAnimationFrame(runParallax)
  	}
  	runParallax()

  }
}
</script>

<style lang="scss" scoped>
	#hookahs {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 41.176rem;
		margin-top: 17.82rem;

		margin-bottom: 300px;

		.hookahs-img,
		.content {
			position: relative;
			height: 100%;
			width: 49.9%;
		}

		.content:after {
			position: absolute;
			bottom: 0px;
			left: 0px;
			content: "";
			height: 2px;
			width: 5.882rem;
			background-color: var(--gold-color);	
		}

		.hookahs-img {
			will-change: transform;
			display: flex;
			align-items: center;
			justify-content: space-around;
		}

		.hokah-img {
			background-size: auto 100%;
			background-position-x: 50%;
			background-repeat: no-repeat;

			&-left,
			&-right {
				// position: relative;
				height: 23.529rem;
				width: 12rem;
			}

			&-left {
				left: 8.411rem;
				background-image: url('../assets/img/hookah_back_left.svg');
			}

			&-right {
				left: 27rem;
				background-image: url('../assets/img/hookah_back_right.svg');
			}

			&-front {
				position: absolute;
				height: 100%;
				width: 20.647rem;
				left: 50%;
				margin-left: -10.323rem;
				background-image: url('../assets/img/hookah_front.svg');
			}
		}

		.wrap-title {
			margin-top: 2.941rem;
			margin-bottom: 2.823rem;
		}

		.mark-discript-wrap {
			display: flex;
			align-items: center;
			height: 10rem;
			position: relative;
			padding-left: 3.235rem;
			border-left: 5px solid var(--gold-color);
			background: linear-gradient(90deg, rgba(255,187,51,0.2) 0%, rgba(255,187,51,0.0) 57%);

			.top,
	    .bottom {
	      display: block;
	      position: absolute;
	      height: 2px;
	      left: 0;
	      width: 100%;
	      background: linear-gradient(90deg, rgba(255,187,51, 1) 0%, rgba(255,187,51,0.0) 60%);
	    }

			.top {
	      top: 0px;
	    }

	    .bottom {
	      bottom: 0px;
	    }

			.mark-discript {}
		}

		.discript {
			padding-top: 3.235rem;
		}
	}
</style>
