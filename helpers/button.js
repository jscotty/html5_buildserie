class Button{
    constructor(scene, normal, pressed, hover){
        var textureNormal = PIXI.Texture.from(normal);
        var texturePressed = PIXI.Texture.from(pressed);
        var textureHover = PIXI.Texture.from(hover);
        
        this.isPressed = false;
        this.isOver = false;
        
        this.button = new PIXI.Sprite(textureNormal);
        this.button.interactive = true;
        this.button.buttonMode = true;
        
        this.text = new PIXI.Text(' ', {fontFamily : 'Arial', fontSize: 16, fill : 0xffffff, align : 'center'});
        
        this.text.anchor.set(0.5);
        this.button.anchor.set(0.5);
        
        this.setOnPointerDown(function(){
            this.isPressed = true;
            this.texture = texturePressed;
        });
        
        this.setOnPointerUp(function(){
            this.isPressed = false;
            if(this.isOver){
                this.texture = textureHover;
            } else {
                this.texture = textureNormal;
            }
        });
        
        this.setOnPointerOver(function (){
            this.isOver = true;
            if(this.isPressed){
                this.texture = texturePressed;
            } else {
                this.texture = textureHover;
            }
        });
        
        this.setOnPointerOut(function (){
            this.isOver = false;
            this.texture = textureNormal;
        });
        
        
        scene.addChild(this.button);
        scene.addChild(this.text);
    }
    
    setPosition(x, y){
        this.text.x = x;
        this.text.y = y-2;
        this.button.x = x;
        this.button.y = y;
    }
    
    setText(message){
        this.text.text = message;
    }
    
    setOnPointerDown(func){
        this.button.on('pointerdown', func);
    }
    
    setOnPointerUp(func){
        this.button.on('pointerup', func);
        this.button.on('pointerupoutside', func);
    }
    
    setOnPointerOver(func){
        this.button.on('pointerover', func);
    }
    
    setOnPointerOut(func){
        this.button.on('pointerout', func);
    }
    
    setOnPointerClick(func){
        this.button.on('pointertap', func);
    }
}