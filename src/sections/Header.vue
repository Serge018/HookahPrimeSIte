<template>
  <div id="header">
  	<p class="title">Header</p>
		<!-- <img class="header-logo" src="../assets/img/main.svg" alt="main_img">	 -->
		<!-- <BtnShowCalc :text='text.calculatePrice' /> -->
  </div>
</template>

<script>
import { head_line } from '../assets/text/text.json';
// import BtnShowCalc from '../buttons/BtnShowCalc';

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
  // components: { BtnShowCalc }
}
</script>

<style scoped>
	#header {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-image: url("../assets/img/bg_template/2019-03-13-12-55-06@2x.jpg");
		background-size: cover;
	}

	.header-logo {
		/*background: transparent;*/
		width: 450px;
		height: 400px;
		position: relative;
		bottom: 70px;
	}

</style>
