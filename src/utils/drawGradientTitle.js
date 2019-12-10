import * as PIXI from 'pixi.js';

export default function(opt) {
  let fontSize, lineHeight, letterSpacing, fill, textDropped = false;
	const { 
		parent, 
		text, 
		type = "title", 
		width, 
		height, 
		wordWrap = false, 
		fillGradientStops = [ 0.3, 1 ] 
	} = opt;

  if (type === "title") {
    fontSize = 70, 
    lineHeight = 75, 
    letterSpacing = -4, 
    fill = ["rgba(255,255,255,0.9)", "rgba(255,255,255,0.1)"];
  } else {
    fontSize = 50, 
    lineHeight = 50, 
    letterSpacing = -1.67,
    fill = ["rgba(255,187,51,0.9)", "rgba(255,187,51,0.1)"];
  }

  if (text.indexOf('&') !== -1) {
  	textDropped = text.split('&').map((el,i) => {
  		if (i%2 === 1) {
  			return ("&"+el);
  		} else {
  			return el;
  		}
  	});
  }

	const loader = PIXI.Loader.shared;
  loader.reset();
  const app = new PIXI.Application({ 
    transparent: true,
    width: width, 
    height: height
  });
  parent.appendChild(app.view);
  loader.add("../assets/fonts/CoachellaMedium.ttf");
    
  loader.load((loader, resources) => {
  	if (textDropped) {
  		textDropped.forEach((el,i) => {
  			const style = new PIXI.TextStyle({
		      fontFamily: 'CoachellaMedium',
		      fontSize,
		      lineHeight,
		      fontWeight: '400',
		      fill,
		      fillGradientType: 1,
		      fillGradientStops,
		      letterSpacing,
		      wordWrap: false
		    });
		    const richText = new PIXI.Text(textDropped[i], style);
		    richText.y = i*lineHeight; 
		    app.stage.addChild(richText);
  		});
  	} else {
	  	const style = new PIXI.TextStyle({
	      fontFamily: 'CoachellaMedium',
	      fontSize,
	      lineHeight,
	      fontWeight: '400',
	      fill,
	      fillGradientType: 1,
	      fillGradientStops,
	      letterSpacing,
	      wordWrap
	    });
	    const richText = new PIXI.Text(text, style);
	    app.stage.addChild(richText);
  	}
  });
}