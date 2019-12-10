<template>
  <div class="content-block"  :class="'content-block-'+className">
  	<div class="side side-pict">
  		<div class="img"></div>
  	</div>
  	<div class="side side-front">
  		<div class="wrap-subtitle"></div>
  		<div class="discript">{{ discript }}</div>
  	</div>
  	<div class="side side-default"></div>

  </div>
</template>

<script>
	import drawTitle from '../utils/drawGradientTitle.js';
	import helpers from '../utils/helpers.js';

export default {
  name: 'blockContent',
  props: [ "opt" ],
  data () {
    return {
      className: this.$props.opt.className,
      subtitle: this.$props.opt.subtitle,
      discript: this.$props.opt.discript,
      displacement: 70
    }
  },
  mounted() {
  	const 
  		wrapSubtitle = this.$el.querySelector('.wrap-subtitle'),
  		picture = this.$el.querySelector('.img');

  	drawTitle({ 
      parent: wrapSubtitle,
      text: this.subtitle, 
      width: 360, 
      height: 110,
      wordWrap: true,
      fillGradientStops: [0, 0.9],
      type: "subtitle"
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
	  			shiftFront = delta*this.displacement;
	  		picture.style.transform = `translateY(${shiftFront}px)`;
  		}
  		requestAnimationFrame(runParallax)
  	}
  	runParallax()
  }
}
</script>

<style lang="scss" scoped>
	.content-block {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 30px;
		color: white;

		.side {

			&-pict {
				width: 37.5%;
				display: flex;
				align-items: flex-start;
				justify-content: flex-end;
				padding-right: 6.187%;
				padding-left: 0;
				box-sizing: border-box;
			}

			&-front {
				width: 21.764rem;
			}

			&-default {
				width: auto;
			}

			.discript {
				position: relative;
				margin-top: 1.647rem;
				padding-top: 1.647rem;
				margin-bottom: 6.9rem;

				&:before {
					display: block;
					position: absolute;
					content: "";
					left: 0px;
					top: 0px;
					width: 1.647rem;
					height: 2px;
					background: linear-gradient(90deg, rgba(255,187,51,0.2) 0%, rgba(255,187,51,0.9) 50%, rgba(255,187,51,0.2) 100%);
				}
			}
		}

		.img {
			position: relative;
			top: -2rem;
			will-change: transform;
			width: 17.647rem;
			height: 17.647rem;
			background-size: 100% auto;
			background-repeat: no-repeat;
		}

		&-Degustetion,
		&-Discipline {
			flex-direction: row-reverse;
			justify-content: flex-end;

			.side-default {
				width: 37.5%;
			}

			.side-pict {
				display: flex;
				align-items: flex-start;
				justify-content: flex-start;
				padding-left: 2.687%;
				padding-right: 0;
				width: auto;
			}
		}

		&-Prepare {
			.img {
				background-image: url('../assets/img/prepare.svg');
			}
		}

		&-Degustetion {
			.img {
				background-image: url('../assets/img/degustetion.svg');
			}
		}

		&-Support {
			.img {
				background-image: url('../assets/img/support.svg');
			}
		}
			
		&-Discipline {
			.img {
				background-image: url('../assets/img/discipne.svg');
			}
		}

	}

</style>