<template>
  <div id="tap-masters">
  	<div class="icons">
  		<div 
  			v-for="name in names" 
  			:class="'icon icon-'+name"
  		></div>
  	</div>
  	<div class="container-content">
  		<div 
  			v-for="name in names" 
  			:class="'wrap-content-'+name"
  		>
  		</div>
  	</div>
  	
  </div>
</template>

<script>
	
export default {
	name: 'tapMasters',
	data() {
		return {
			msg: '',
			names: ["Misha", "Vova"]
		}
	}
}

</script>



<style lang="scss" scoped>
	#tap-masters {
		.icons {
			margin-top: 3.588rem;
			margin-bottom: 4.176rem;
		}

	}
</style>