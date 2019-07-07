export default class SpriteAnimation{
    constructor(scene, sheetInformation){
        console.log(sheetInformation);
        this.textures = PIXI.Loader.shared.resources[sheetInformation.sheet].textures;
        this.frames = sheetInformation.frames;
        this.frameRate = sheetInformation.frameRate;
        
        this.frameIndex = 0;
        this.seconds = 0;
        
        this.sprite = new PIXI.Sprite(this.textures[this.frames[this.frameIndex]]);
        this.sprite.anchor.set(0.5);
        
        scene.addChild(this.sprite);
        this.sprite.texture = this.textures[this.frames[this.frameIndex]];
    }
    
    get x(){
        return this.sprite.x;
    }
    
    get y(){
        return this.sprite.y;
    }

    set x(value){
        this.sprite.x = value;
    }

    set y(value){
        this.sprite.y = value;
    }
    
    update(delta){
        this.seconds += delta;
        
        if(this.seconds >= this.frameRate){
            this.sprite.texture = this.textures[this.frames[this.frameIndex]];
            this.seconds = 0;
            this.frameIndex++;
            if(this.frameIndex >= this.frames.length){
                this.frameIndex = 0;
            }
        }
    }
    
    destroy(){
        this.sprite.destroy();
    }
}