<template>
  <div id="clients">
  	<div class="sub-title"></div>
  	<div class="wrap-clients-bar" 
  		@mousemove="moveBar"
  		@mouseenter="checkEnter"
  		@mouseleave="checkLeave"
  		>
			<div class="clients-bar" >
				<div v-for="imgName in setImgName" :class="imgName" class="img" ></div>
			</div>
  	</div>
  </div>
</template>

<script>
import helpers from '../utils/helpers.js';
import drawTitle from '../utils/drawGradientTitle.js';
import Inertia from '../utils/inertia.js';

export default {
  name: 'Clients',
  data () {

    return {
    	setImgName: this.$store.state.setImgName,
    	clientsBar: null,
    	wrapperClientsBar: null,
    	inertia: null,
    	offset: 0,
    	widthWrapClientsBar: 0
    }
  },
  computed: {
  	title: function() {
  		return this.$store.getters.text.ourClients.title;
  	}
  },
  methods: {
  	moveBar: function(event) {
  		if (this.offset > 0) {
  			this.delta = event.clientX/this.widthWrapClientsBar*this.offset;
  		}
  	},
  	checkEnter(event) {
  		if (this.offset > 0) {
	  		this.delta = event.clientX/this.widthWrapClientsBar*this.offset;
	  		this.inertia = new Inertia({
	  			max: this.offset,
	  		});
	  		const update = () => {
	  			const value = this.inertia.update(this.delta);
	  			this.clientsBar.style.transform = `translateX(-${value}px)`;
	  			if (value < 1) {
	  				this.inertia.setValue(0);
	  			} else {
	  				requestAnimationFrame(update);
	  			}
	  		}
	  		update();
  		}
  	},
  	checkLeave() {
  		this.delta = 0;
  	}
  },
  mounted() {
  	const parent = this.$el.children[0];
  	drawTitle({ 
      parent,
      type: "sub-title",
      text: this.title, 
      width: 400, 
      height: 50
    });

  	this.wrapperClientsBar = this.$el.children[1];
  	this.widthWrapClientsBar = helpers.getPropStyle(this.wrapperClientsBar, "width");
  	this.clientsBar = this.wrapperClientsBar.children[0];
  	const widthClientBar = helpers.getPropStyle(this.clientsBar, "width");
  	const difference = widthClientBar-this.widthWrapClientsBar;
  	this.offset = (difference < 0) ? 0 : difference; 
  }
}
</script>

<style lang="scss" scoped>
	#clients {
		overflow-x: hidden;
		.sub-title {
			margin-top: 13.647rem;
			margin-left: 17.647rem;
			margin-bottom: 5.882rem;
		}

		.wrap-clients-bar {
			will-change: transform;
			position: relative;
			margin-left: 11.764rem;
			margin-top: 4.882rem;
			margin-bottom: 4.117rem;
			height: 7.294rem;

			.clients-bar {
				position: absolute;
				top: 0px;
				left: 0px;
				height: 100%;
				white-space: nowrap;
				width: auto;
			}
		} 
	}

	.img {
		position: relative;
		display: inline-block;
		height: 100%;
		width: 11.764rem;
		border-left: 0.5rem solid transparent;
		border-right: 0.5rem solid transparent;
		transition-property: opacity, transform;

		&:before,
		&:after {
			display: block;
			content: "";
			position: absolute;
			background-position-y: 50%;
			background-position-x: 50%;
			background-repeat: no-repeat;
			background-size: 85% auto;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			transition: filter 150ms;
		}

		&:before {
			z-index: -1;
			opacity: 0;
			filter: blur(2px);
			transition: opacity 150ms;
		}

		&:after {
			opacity: 0.7;
			transition: opacity 150ms;
		}

		&:hover:after{
			opacity: 1;	
		}

		&:hover:before {
			opacity: 0.9;	
		}

		&.affa_icon {
			width: 8.235rem;
			&:before,
			&:after {
				background-image: url("../assets/img/affa_icon/affa_icon@2x.png");
			}
		}

		  &.bip_icon {
		 			width: 8.235rem;
		 			&:before,
		 			&:after {
		 				background-size: auto 100%;
		 				background-image: url("../assets/img/bip_icon/bip_icon@2x.png");
		 			}
		 		} 
			
		 &.eagle_icon {
			width: 8.235rem;
			&:before,
			&:after {
				background-size: auto 80%;
				background-image: url("../assets/img/eagle_icon/eagle_icon@2x.png");
			}
		} 
		
		 &.munshtuk_icon {
			width: 8.235rem;
			&:before {
				filter: blur(4px);
			}
			&:before,
			&:after {
				background-image: url("../assets/img/munshtuk_icon/munshtuk_icon@2x.png");
			}
			&:hover:before {
				opacity: 1;	
			}
		} 
		
		 &.papatut_icon {
			width: 8.235rem;
			&:before,
			&:after {
				background-size: 100% auto;
				background-image: url("../assets/img/papatut_icon/papatut_icon@2x.png");
			}
		}  
	}

</style>
