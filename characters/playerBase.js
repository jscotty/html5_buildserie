import SpriteAnimation from '../helpers/spriteAnimation.js';
import Tweener from '../helpers/tweener.js';

export default class PlayerBase{
    constructor(scene, playerAnimation, xPos, yPos){
        this.player = new SpriteAnimation(scene, playerAnimation, xPos, yPos);
        this.player.x = xPos;
        this.player.y = yPos;
        
        this.power = 30;
        this.desiredPosition = xPos;
    }
    
    MoveLeft(ease){
        this.desiredPosition = this.player.x - this.power;
        Tweener.startTweenX(this.player, this.desiredPosition, 0.5, ease);
    }
    
    MoveRight(ease){
        this.desiredPosition = this.player.x + this.power;
        Tweener.startTweenX(this.player, this.desiredPosition, 0.5, ease);
    }
    
    update(delta){
        this.player.update(delta);
    }
    
    destroy(){
        this.player.destroy();
    }
}