export default class PlayerBase{
    constructor(scene, playerImage, xPos, yPos){
        var texturePlayer = PIXI.Texture.from(playerImage);
        
        this.player = new PIXI.Sprite(texturePlayer);
        this.player.anchor.set(0.5);
        this.player.x = xPos;
        this.player.y = yPos;
        scene.addChild(this.player);
        
        this.power = 30;
        this.desiredPosition = xPos;
    }
    
    MoveLeft(){
        this.desiredPosition -= this.power;
    }
    
    MoveRight(){
        this.desiredPosition += this.power;
    }
    
    update(){
        var velocity = this.desiredPosition - this.player.x;
        this.player.x += velocity / 10;
    }
    
    destroy(){
        this.player.destroy();
    }
}