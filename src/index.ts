/// <reference path="../typings/index.d.ts" />
try { require("source-map-support").install(); } catch (e) { /* empty */ }

console.log('hello');

window.onload = () => {
    var _worldContainer = new createjs.Stage("canvasElement");
    var stage = new createjs.Stage("canvasElement");
    let udon = new createjs.Bitmap('./img/udon.png');
    udon.scaleX = 2;
    udon.scaleY = 2;
    stage.addChild(udon);

    stage.enableMouseOver();
    stage.addEventListener("click", (event:any) => {
        alert('(x, y) = (${stage.mouseX}, ${stage.mouseY})');
    });
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", () => {
        stage.update();
    });
};
