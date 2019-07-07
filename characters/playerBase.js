import SpriteAnimation from '../helpers/spriteAnimation.js';
export default class PlayerBase{
    constructor(scene, playerAnimation, xPos, yPos){
        this.player = new SpriteAnimation(scene, playerAnimation, xPos, yPos);
        this.player.x = xPos;
        this.player.y = yPos;
        
        this.power = 30;
        this.desiredPosition = xPos;
    }
    
    MoveLeft(){
        this.desiredPosition -= this.power;
    }
    
    MoveRight(){
        this.desiredPosition += this.power;
    }
    
    update(delta){
        var velocity = this.desiredPosition - this.player.x;
        this.player.x += velocity / 10;
        
        this.player.update(delta);
    }
    
    destroy(){
        this.player.destroy();
    }
}