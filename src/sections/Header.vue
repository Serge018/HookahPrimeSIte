<template>
  <div id="header">
		<img class="logo" src="../assets/img/main.svg" alt="main_img">
		<transition name="fade">
			<BtnShowCalc 
				v-show="!calcVisible"
				:text='text.calculate_price[lang]'
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
import { head_line } from '../assets/text/text.json';
import BtnShowCalc from '../components/BtnShowCalc';
import AdapterCalc from '../components/AdapterCalc';

export default {
  name: 'Header',
  data () {
    return {
    	lang: "en",
    	calcVisible: false,
      text: head_line,
      typesOfCalc: ["amount_of_hookahs", "amount_of_hours"]
    }
  },
  components: { 
  	BtnShowCalc,
  	AdapterCalc
  }
}
</script>

<style scoped>
	#header {
		position: relative;
		height: 52.941rem;
		width: 100%;
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
