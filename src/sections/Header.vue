<template>
  <div id="header">
    <BtnLang />
		<img class="logo" src="../assets/img/main.svg" alt="main_img">
		<transition name="fade">
			<BtnShowCalc 
				v-show="!calcVisible"
				:text='text.calculatePrice'
				@showCalc="calcVisible = $event" 
			/>
		</transition>
		<transition name="fade-in">
			<AdapterCalc
				v-show="calcVisible"
				:text="text"
				:typesOfCalc="typesOfCalc"
			/>
		</transition>
		
  </div>
</template>

<script>
import BtnLang from '../components/BtnLang';
import BtnShowCalc from '../components/BtnShowCalc';
import AdapterCalc from '../components/AdapterCalc';

export default {
  name: 'Header',
  data () {
    return {
    	calcVisible: false,
      typesOfCalc: ["amountOfHookahs", "amountOfHours"]
    }
  },
  computed: {
    text: function () {
      return this.$store.getters.text.headLine;
    }
  },
  components: {
    BtnLang, 
  	BtnShowCalc,
  	AdapterCalc
  }
}
</script>

<style lang="scss" scoped>
	#header {
		position: relative;
		height: 52.941rem;
		width: 100%;
	}

	.choice-lang {
    position: absolute;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    top: 2.411rem;
    right: 3.641rem;
    height: 1.588rem;
    width: 2.3rem;
    color: var(--white-color);
    letter-spacing: 1px;
    font-size: 1.176rem;
    cursor: pointer;
    overflow: hidden;

    &:hover {
    	overflow: visible;

      .label {  
        transition: none;
        opacity: 0.5;
      }
    }
    
    &:after {
			display: block;
			content: "";
			width: 2px;
			height: 1.235rem;
			background-color: var(--gold-color);
    }

    .wrap-label {
    	display: flex;
    	flex-direction: column;
    	justify-content: flex-start;
    	align-items: center;
    	height: 200%;

      &:hover {
        .label {
	    	  transition: opacity 250ms;
        }
      }

    	.label {
    		height: 50%;
	    	font-family: 'CoachellaMedium';

    		&:hover {
					opacity: 1;
    		}
    	}
    }
  }

	.logo {
		background: transparent;
		position: absolute;
		top: 10.588rem;
		left: 50%;
		transform: translateX(-50%);
		width: 26.47rem;
		height: 23.529rem;
	}
</style>
