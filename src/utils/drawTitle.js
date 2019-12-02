import * as PIXI from 'pixi.js';

export default function({parent, text, type = "title", width, height, wordWrap = false, fillGradientStops = [ 0.3, 1 ]}) {
    let fontSize, lineHeight, letterSpacing, fill;
    if (type === "title") {
      fontSize = 70, 
      lineHeight = 75, 
      letterSpacing = -4, 
      fill = ["rgba(255,255,255,0.9)", "rgba(255,255,255,0.1)"];
    } else {
      fontSize = 50, 
      lineHeight = 55, 
      letterSpacing = -1.67,
      fill = ["rgba(255,187,51,0.9)", "rgba(255,187,51,0.1)"];
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
    });
	}