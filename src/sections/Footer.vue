<template>
  <div id="footer">
    <div class="content">
      <div class="subtitle-logo"></div>
      <div class="discript subtitle-discr">{{ subtitleDiscr }}</div>
      <div class="wrap-discript">
        <div class="discript">{{ discription }}</div>
        <div class="separator"></div>
      </div>
      <div class="contacts">
        <div class="block block-mail">
          <div class="logo logo-mail"></div>
          <div class="text discript">{{ contacts.email }}</div>
        </div>
        <div class="block block-tel">
          <div class="logo logo-tel"></div>
          <div class="text discript">{{ contacts.phone }}</div>
        </div>
        <div class="block block-insta">
          <div class="logo logo-insta"></div>
          <div class="text discript">{{ contacts.insta }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawTitle from '../utils/drawGradientTitle.js';

export default {
  name: 'Footer',
  data () {
    return {
      contacts: this.$store.state.contacts
    }
  },
  computed: {
    text: function() {
      return this.$store.getters.text.footer;
    },
    subtitleLogo: function() {
      return this.text.subtitleLogo
    },
    subtitleDiscr: function() {
      return this.text.subtitleDiscr
    },
    discription: function() {
      return this.text.discription
    },
  },
  mounted() {
    const subtitleParent = this.$el.querySelector('.subtitle-logo');
    drawTitle({ 
      parent: subtitleParent,
      type: 'subtitle',
      text: this.subtitleLogo, 
      width: 376, 
      height: 50,
      fillGradientStops: [0.07,1]
    });
  }
}
</script>

<style lang="scss" scoped>
	#footer {
    padding-bottom: 13.176rem;

    .content {
      margin-top: 21rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .subtitle-discr {
        letter-spacing: 0.352rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      .wrap-discript {
        position: relative;
        padding-top: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &:before {
          display: block;
          content: "";
          position: absolute;
          top: 0px;
          left: 50%;
          width: 1px;
          height: 6.3rem;
          background: linear-gradient(0deg, rgba(255,187,51, 0.1) 0%, rgba(255,187,51,0.8) 100%);
        }

        .discript {
          text-align: center;
          letter-spacing: 0.5px;
        }

        .separator {
          position: relative;
          margin-top: 2rem;
          margin-bottom: 3.647rem;
          width: 0.352rem;
          height: 0.352rem;
          border-radius: 50%;
          border: 1px solid rgba(255,187,51, 0.8);

          &:before,
          &:after {
            position: absolute;
            display: block;
            content: "";
            width: 6.470rem;
            height: 1px;
            top: 50%;
            transform: translateY(-50%);
          }

          &:before {
            left: -7.058rem;
            background: linear-gradient(90deg, rgba(255,187,51, 0.9) 0%, rgba(255,187,51,0.1) 100%);;
          }

          &:after {
            right: -7.058rem;
            background: linear-gradient(90deg, rgba(255,187,51, 0.1) 0%, rgba(255,187,51,0.9) 100%);;
          }
        }
      }
    }

    .contacts {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 54.235rem;
      height: 5.294rem;

      .block {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 100%;

        .logo {
          width: 2.359rem;
          height: 3rem;
          background-size: 100% auto;
          background-repeat: no-repeat;
          background-position: 50% 50%;

          &-mail {
            background-image: url('../assets/img/mail_icon.svg'); 
          }

          &-tel {
            background-image: url('../assets/img/tel_icon.svg'); 
          }

          &-insta {
            background-image: url('../assets/img/insta_icon.svg'); 
          }
        }
      }
    }
	}
</style>
