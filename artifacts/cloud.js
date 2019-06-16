export default class cloud{
    constructor(scene, sprite, xPos, yPos){
        var textureNormal = PIXI.Texture.from(sprite);
        this.cloud = new PIXI.Sprite(textureNormal);
        this.cloud.x = xPos;
        this.cloud.y = yPos;
        scene.addChild(this.cloud);
        
        this.speed = 0;
        this.randomize();
    }
    
    randomize(){
        // random speed from 0.5 to 1
        this.speed = (Math.random() * 0.5) + 0.5;
        this.cloud.scale.set((Math.random() * 1) + 0.5);
    }
    
    update(){
        this.cloud.x += this.speed;
        if(this.cloud.x > 1000){
            this.cloud.x = -1000;
            this.randomize();
        }
    }
    
    destroy(){
        this.cloud.destroy();
    }
}