<template>
  <div class="btn btn-show btn-container ff_gotham">
    <div class="btn-intry">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'BtnShowCalc',
  props: [ "text" ]
}
</script>

<style scoped>
	.btn-container {
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 30px;
    letter-spacing: 5px;
    color: white;
    width: 290px;
    height: 180px;
	}

  .btn-intry {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 33.33%;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    /* border-image-source: linear-gradient(282deg, rgba(255, 187, 51, 0.2), var(--mango) 50%, rgba(255, 187, 51, 0.2));
    border-image-slice: 1; */
  }

  .btn-intry:before,
  .btn-intry:after {
    display: block;
    content: "";
    position: absolute;
    left: 50%;
    width: 1px;
    height: 100%;
    transform: translateX(-50%);
    background-color: white;
  }

  .btn-intry:before {
    top: 100%;
    
  }

  .btn-intry:after {
    bottom: 100%;
  }
</style>
