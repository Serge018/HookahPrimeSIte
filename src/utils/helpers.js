export default {
	getPropStyle: function(el, nameProp) {
    return parseInt(getComputedStyle(el)[nameProp]);
  }
  
}