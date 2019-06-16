import Scene from './scene.js';
import Player from '../characters/player.js';
import Button from '../helpers/button.js';
import Cloud from '../artifacts/cloud.js';
import { sceneStates, artifactsAssets, gameAssets, uiAssets } from '../helpers/references.js';

export default class Game extends Scene {
    constructor(){
        super(sceneStates.game);
    }

    initialize(sceneManager){
        this.clouds = [];
        for(let i = 0; i < 30; i++){
            var xPos = (Math.random() * 2000) - 1000;
            var yPos = (Math.random() * 300) - 100;
            this.clouds.push(new Cloud(this, artifactsAssets.cloud, xPos, yPos));
        }
        
        var textureBg = PIXI.Texture.from(gameAssets.background);
        this.background = new PIXI.Sprite(textureBg);
        this.background.anchor.set(0.5);
        this.background.x = 400;
        this.background.y = 300;
        
        this.addChild(this.background);
        
        this.player = new Player(this, gameAssets.character, 400, 450);
        
        this.button = new Button(this, uiAssets.buttonPinkNormal, uiAssets.buttonPinkPressed, uiAssets.buttonPinkHovered);
        this.button.setPosition(60, 30);
        this.button.setText("back to menu");
        this.button.setOnPointerClick(function(){
            sceneManager.renderScene(sceneStates.menu);
        });
        super.initialize();
    }

    update(delta){
        super.update(delta);
        this.player.update();
        for(let i = 0; i < this.clouds.length; i++){
            this.clouds[i].update();
        }
    }
    
    destroy(){
        this.background.destroy();
        this.player.destroy();
        this.button.destroy();
        for(let i = 0; i < this.clouds.length; i++){
            this.clouds[i].destroy();
        }
    }
}