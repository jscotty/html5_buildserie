import Scene from './scene.js';
import Button from '../helpers/button.js';
import Cloud from '../artifacts/cloud.js';
import { sceneStates, artifactsAssets, menuAssets, uiAssets } from '../helpers/references.js';

export default class Menu extends Scene {
    constructor(){
        super(sceneStates.menu);
    }

    initialize(sceneManager){
        this.clouds = [];
        for(let i = 0; i < 30; i++){
            var xPos = (Math.random() * 2000) - 1000;
            var yPos = (Math.random() * 400) - 100;
            this.clouds.push(new Cloud(this, artifactsAssets.clouds, xPos, yPos));
        }
        
        var textureBg = PIXI.Texture.from(menuAssets.background);
        this.background = new PIXI.Sprite(textureBg);
        this.background.anchor.set(0.5);
        this.background.x = 400;
        this.background.y = 300;
        
        this.addChild(this.background);
        this.button = new Button(this, uiAssets.mediumPinkButtons);
        this.button.setPosition(400, 350);
        this.button.setText("to game");
        this.button.setOnPointerClick(function(){
            sceneManager.renderScene(sceneStates.game);
        });
        
        super.initialize();
    }

    update(delta){
        super.update(delta);
        for(let i = 0; i < this.clouds.length; i++){
            this.clouds[i].update();
        }
    }
    
    destroy(){
        super.destroy();
        this.button.destroy();
        for(let i = 0; i < this.clouds.length; i++){
            this.clouds[i].destroy();
        }
    }
}