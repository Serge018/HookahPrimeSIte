export default {

	getPropStyle: function(el, nameProp) {
    return parseInt(getComputedStyle(el)[nameProp]);
  },


  removeClass: function(nodes, className) {
  	if (Array.isArray(nodes)) {
  		nodes.forEach(node => {
        if (node.classList.contains(className)) {
          node.classList.remove(className);
        }
      });
  	} else {
  		nodes.classList.remove(className);
  	}
  },
  toggleClass: function(nodes, className) {
  	if (Array.isArray(nodes)) {
  		nodes.forEach(node => node.classList.toggle(className))
  	} else {
  		nodes.classList.toggle(className);
  	}
  }


}