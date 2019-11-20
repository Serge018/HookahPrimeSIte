<template>
	<div class="calc-container">

	<!-- <BtnCount v-for="opt in optBtns" :prop="opt" @changeCount="changeCount"/> -->
	<BtnCount :prop="optBtns[0]" @changeCount="changeCount" />
	<BtnCount :prop="optBtns[1]" @changeCount="changeCount" />

	<div class="total price">{{ totalPrice }}$</div>
	<div class="btn-order">ORDER</div>
	</div>
</template>

<script>
	import BtnCount from "./BtnCount";
	
	export default {
		name: "AdapterCalc",
		components: { BtnCount },
		data() {
			return {
				countHookah: 0,
				countHour: 0,
				price: 48,
				optBtns: [
					{
						textLabel: "Hookah",
						type: "countHookah",
					},
					{
						textLabel: "Hours",
						type: "countHour"
					}
				]
			}
		},
		computed: {
			totalPrice: function(){
				return (this.countHookah*this.countHour*this.price).toString();
			} 
		},
		methods: {
			changeCount: function(data) {
				return this[data.type] = data.count;
			}
		}
	}
</script>

<style lang="scss" scoped>

	.fade-in-enter {
    opacity: 0;
	}
	
	.fade-in-enter-active {
    transition-property: opacity;
    transition-duration: 300ms;
    transition-delay: 700ms;
    transition-timing-function: cubic-bezier(.63,.22,.85,.36);
  }

  .fade-in-enter-to {
  	opacity: 1;
  }

	.calc-container {
		position: absolute;
		top: 41.764rem;
		left: 50%;
		transform: translateX(-50%);
		width: 70.598rem;
		height: 4.705rem;
		display: flex;
		justify-content: center;
		align-items: center;

		.total,
		.btn-order {
			display: flex;
			align-items: center;
			width: 17.643rem;
			height: 100%;
			justify-content: center;
		}

		.btn-order {
			align-items: center;
			font-size: 0.882rem;
			letter-spacing: 0.294rem;
			background: linear-gradient(90deg, rgba(255,187,51,0.9) 60%, rgba(255,187,51,0) 100%);
			border: 1px solid var(--gold-color);
			border-radius: 2.352rem;
			color: var(--white-color);
			cursor: pointer;
			background-size: 200% auto;
			background-position-x: 100%;
			transition: background-position 300ms;
	
			&:hover {
				background-position-x: 0%;
			}
		}
	}
</style>