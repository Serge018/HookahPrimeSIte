<template>
  <div id="tap-masters">
  	<div class="icons">
  		<div 
  			v-for="name in names" 
  			:class="'icon icon-'+name"
        :data-persone="name"
        @click="choosePerson"
  		>
        <svg width="118" height="118" viewBox="0 0 118 118" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle class="bp bp-1" cx="59" cy="59" r="58" stroke="#ffbb33" fill="transparent" stroke-width="2"/>
          <circle class="bp bp-2" cx="50" cy="50" r="49" stroke="#ffbb33" fill="transparent" stroke-width="2"/>
          <circle class="bp bp-3" cx="44" cy="44" r="43" stroke="#ffbb33" fill="transparent" stroke-width="2"/>
          <circle class="bp bp-4" cx="41" cy="41" r="40" stroke="#ffbb33" fill="transparent" stroke-width="2"/>
        </svg>
      </div>
  	</div>
  	<div class="container-content">
  		<div 
        class="wrap-content"
  			v-for="name in names" 
  			:class="'wrap-content-'+name"
  		>
      <div 
        class="cont-name" 
        :class="['cont-name-'+name, { active: (name === 'Misha') ? isActive : !isActive}]"
      ></div>
      <div class="discript-master">
        <span 
          class="discript discript-text"
          :class="{ active: (name === 'Misha') ? isActive : !isActive}"
        >{{ discript[name] }}</span>
      </div>
  		</div>
  	</div>
  </div>
</template>

<script>
import drawTitle from '../utils/drawTitle.js';
import helpers from '../utils/helpers.js';
	
export default {
	name: 'TapMasters',
  props: [ "text" ],
	data() {
		return {
			names: ["Misha", "Vova"],
      titles: {
        Misha: this.$props.text.nameMisha,
        Vova: this.$props.text.nameVova
      },
      discript: {
        Misha: this.$props.text.discriptMisha,
        Vova: this.$props.text.discriptVova
      },
      nodeIconMisha: null,
      nodeIconVova: null,
      setNodeIcons: [],
      currentName: "",
      flagAutoPlay: true,
      isActive: true,
      interval: null
		}
	},
  computed: {},
  methods: {
    choosePerson: function(e) {
      const 
        currentTarget = e.target.closest(".icon"),
        selectedPersone = currentTarget.dataset.persone;

      if (this.flagAutoPlay) {
        this.flagAutoPlay = false;
        clearInterval(this.interval);
        this.currentName = selectedPersone;
        this.isActive = (selectedPersone === 'Misha') ? true : false;
        helpers.removeClass(this.setNodeIcons, 'animateIcon');
        currentTarget.parentElement.classList.add('clicked');
      } else {
        helpers.removeClass(this.setNodeIcons, 'selected');
      }

      currentTarget.classList.add('selected');
      if (selectedPersone !== this.currentName) {
        this.currentName = selectedPersone;
        this.isActive = !this.isActive;
      }
    },
    runIntreval: function() {
      /*this.flagAutoPlay = true;
      this.nodeIconMisha.classList.add('animateIcon');
      this.interval = setInterval(() => {
        if (this.flagAutoPlay) {
          helpers.toggleClass(this.setNodeIcons, 'animateIcon');
          this.isActive = !this.isActive;
        }
      }, 7100);*/
    }
  },
  mounted() {
    this.names.forEach((name) => {
      const 
        titleText = this.titles[name],
        parent = this.$el.querySelector(`.cont-name-${name}`);
      drawTitle({ 
        parent,
        type: "sub-title",
        text: titleText, 
        width: 300, 
        height: 110,
        wordWrap: true,
        fillGradientStops: [0.2, 1]
      });
    });

    this.names.forEach((name) => {
      this[`nodeIcon${name}`] = this.$el.querySelector(`.icon-${name}`);
      this.setNodeIcons.push(this[`nodeIcon${name}`]);
    });

    // the temporare plug
    this.flagAutoPlay = true;
    this.nodeIconMisha.classList.add('animateIcon');
    this.interval = setInterval(() => {
      if (this.flagAutoPlay) {
        helpers.toggleClass(this.setNodeIcons, 'animateIcon');
        this.isActive = !this.isActive;
      }
    }, 7250);
  }
}
</script>

<style lang="scss" scoped>
	#tap-masters {
    padding-bottom: 300px;

		.icons {
			margin-top: 3.588rem;
			margin-bottom: 4rem;

      .icon {
        width: 5.882rem;
        height: 5.882rem;
        border-radius: 50%;
        display: inline-block;
        cursor: pointer;
        background-size: contain;
        position: relative;
        overflow: hidden;
        transform-origin: 50% 50%;
        transform: rotate(-90deg);

        &-Misha {
          background-image: url('../assets/img/Michail_icon/oval@2x.png');
        }

        &-Vova {
          background-image: url('../assets/img/Vovan_icon/oval@2x.png');
          margin-left: 1.235rem;
        }

        &.animateIcon {
          svg {
            transition: opacity 250ms linear 250ms;
            opacity: 1;

            .bp {
              transition: stroke-dashoffset 7000ms linear 250ms;
              stroke-dashoffset: 0px;
            }
          }
        }

        &.selected {
          svg {
            transition: opacity 250ms linear 250ms;
            opacity: 1;
            
            .bp {
              transition: none;
              stroke-dashoffset: 0px;
            }
          }
        }

        svg {
          position: absolute;
          left: 0px;
          top: 0px;
          transition: opacity 250ms linear;
          opacity: 0;

          .bp {

            &-1 {
              stroke-dashoffset: 364px;
              stroke-dasharray: 364px;
            }

            &-2 {
              stroke-dashoffset: 307px;
              stroke-dasharray: 307px;
            }

            &-3 {
              stroke-dashoffset: 270px;
              stroke-dasharray: 270px;
            }

            &-4 {
              stroke-dashoffset: 251px;
              stroke-dasharray: 251px;
            }
          }
        }
      }
		}

    .container-content {
      position: relative;
      height: 14.117rem;


      .wrap-content {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }

      .discript-master {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 5.882rem;
        margin-top: 2.058rem;
        padding-left: 3.529rem;
        border-left: 3px solid var(--gold-color);
      }
      
      .cont-name,
      .discript-text {
        transition: opacity 250ms linear;
        opacity: 0;

        &.active {
          opacity: 1;
          transition: opacity 250ms linear 200ms;
        }
      }
    }
	}
</style>