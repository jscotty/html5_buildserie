export default class cloud{
    constructor(scene, sheetInformation, xPos, yPos){
        this.textures = PIXI.Loader.shared.resources[sheetInformation.sheet].textures;
        this.frames = sheetInformation.frames;
        
        this.cloud = new PIXI.Sprite(this.randomSprite);
        this.cloud.x = xPos;
        this.cloud.y = yPos;
        scene.addChild(this.cloud);
        
        this.speed = 0;
        this.randomize();
    }
    
    get randomSprite(){
        return this.textures[this.frames[Math.floor(Math.random() * this.frames.length)]];
    }
    
    randomize(){
        // random speed from 0.5 to 1
        this.speed = (Math.random() * 0.5) + 0.5;
        this.cloud.scale.set((Math.random() * 1) + 0.5);
        this.cloud.texture = this.randomSprite;
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