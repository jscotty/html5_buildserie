import PlayerBase from './playerBase.js';
import Button from '../helpers/button.js';
import { uiAssets } from '../helpers/references.js';

export default class Player extends PlayerBase{
    constructor(scene, playerAnimation, xPos, yPos){
        super(scene, playerAnimation, xPos, yPos);
        this.buttonLeft = new Button(scene, uiAssets.smallPinkButtons);
        this.buttonRight = new Button(scene, uiAssets.smallPinkButtons);
        this.buttonLeft.setPosition(xPos - 75, yPos - 75);
        this.buttonLeft.setText("<");
        var player = this;
        this.buttonLeft.setOnPointerClick(function(){
            player.MoveLeft();
        });
        this.buttonRight.setPosition(xPos + 75, yPos - 75);
        this.buttonRight.setText(">");
        this.buttonRight.setOnPointerClick(function(){
            player.MoveRight();
        });
        
        
        this.power = 60;
        this.desiredPosition = xPos;
    }
    
    update(delta){
        super.update(delta);
        this.buttonLeft.setPosition(this.player.x - 75, this.player.y - 50);
        this.buttonRight.setPosition(this.player.x + 75, this.player.y - 50);
    }
    
    destroy(){
        super.destroy();
        this.buttonLeft.destroy();
        this.buttonRight.destroy();
    }
}