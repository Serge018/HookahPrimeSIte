import * as PIXI from 'pixi.js';

export default {
	createTitle: function({parent, text, width, height}) {
		const loader = PIXI.Loader.shared;
    const app = new PIXI.Application({ 
        transparent: true,
        width: width, 
        height: height
      });
    parent.appendChild(app.view);
    loader.reset();
    
    loader.add("../assets/fonts/CoachellaMedium.ttf");
    loader.load((loader, resources) => {
      const style = new PIXI.TextStyle({
        fontFamily: 'CoachellaMedium',
        fontSize: 70,
        lineHeight: 75,
        fontWeight: '400',
        fill: ["rgba(255,255,255,0.9)", "rgba(255,255,255,0.2)"],
        fillGradientType: 1,
        fillGradientStops: [ 0.3, 1 ],
        letterSpacing: -4,
      });
      const richText = new PIXI.Text(text, style);
      app.stage.addChild(richText);
    });
	}
}