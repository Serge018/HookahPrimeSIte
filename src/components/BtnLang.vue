<template>
  <div 
    @mouseenter="enter"
    @mouseleave="leave" 
    class="choice-lang">
  	<div class="wrap-label">

			<div 
        @click="chooseLang" 
        :class="{active : isActive}"
        class="label label-en"
        data-lang="en"
      >En</div>


			<div 
        @click="chooseLang" 
        :class="{active : !isActive}"
        class="label label-ru"
        data-lang="ru"
      >Py</div>
    

  	</div>
  </div>	
</template>

<script>

export default {
  name: 'BtnLang',
  data () {
    return {
    	lang: ""
    }
  },
  computed: {
    langComp: function() {
      return this.$store.getters.lang;
    },
    isActive: function() {
      return (this.langComp === "en") ? true : false;
    }
  },
  methods: {
    chooseLang: function(e) {
      this.$store.dispatch('changeLang', e.target.dataset.lang);
    },
    enter: function() {
      this.$el.style.overflow = "visible";
    },
    leave: function() {
      this.$el.style.overflow = "hidden";
    }
  }
}
</script>

<style lang="scss" scoped>

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
    
    &:after {
			display: block;
			content: "";
			width: 2px;
			height: 1.235rem;
			background-color: var(--gold-color);
    }

    .wrap-label {
    	position: relative;
    	height: 200%;

    	.label {
      	display: flex;
      	align-items: center;
        justify-content: flex-start;
        position: absolute;
        left: 0px;
        top: 50%;
    		height: 50%;
	    	font-family: 'CoachellaMedium';
        transition: opacity 250ms;
        opacity: 0.5;

        &.active {
          top: 0;
          opacity: 1;
        }

    		&:hover {
					opacity: 1;
    		}
    	}
    }
  }
</style>
