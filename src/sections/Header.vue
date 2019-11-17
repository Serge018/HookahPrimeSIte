<template>
  <div id="header">
		<img class="logo" src="../assets/img/main.svg" alt="main_img">	
		<BtnShowCalc :text='text.calculatePrice' />
  </div>
</template>

<script>
import { head_line } from '../assets/text/text.json';
import BtnShowCalc from '../components/BtnShowCalc';

const {
	calculate_price, 
	amount_of_hookahs, 
	amount_of_hours
} = head_line;


export default {
  name: 'Header',
  data () {
    return {
      text: {
      	calculatePrice: calculate_price.en,
      	amountOfHookahs: amount_of_hookahs.en,
      	amountOfHours: amount_of_hours.en
      }
    }
  },
  components: { BtnShowCalc }
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
