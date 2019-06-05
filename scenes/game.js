class Game extends Scene {
    constructor(){
        super(GAMESTATE);
        this.player = PIXI.Sprite.from(CHARACTER_TEST);
    }

    initialize(){
        console.log('activated game');
        
        this.player.anchor.set(0.5);
        this.player.x = 400;
        this.player.y = 100;
        this.addChild(this.player);
        
        this.button = new Button(this, BUTTON_PINK_NORMAL, BUTTON_PINK_PRESSED, BUTTON_PINK_HOVER);
        this.button.setPosition(60, 30);
        this.button.setText("back to menu");
        this.button.setOnPointerClick(function(){
            sceneManager.renderScene(MENUSTATE);
        });
        super.initialize();
    }

    update(delta){
        super.update(delta);
    }
}