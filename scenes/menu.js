class Menu extends Scene {
    constructor(){
        super(MENUSTATE);
        this.button = null;
    }

    initialize(){
        console.log('activated menu');
        
        this.button = new Button(this, BUTTON_PINK_NORMAL, BUTTON_PINK_PRESSED, BUTTON_PINK_HOVER);
        this.button.setPosition(400, 100);
        this.button.setText("to game");
        this.button.setOnPointerClick(function(){
            sceneManager.renderScene(GAMESTATE);
        });
        super.initialize();
    }

    update(delta){
        super.update(delta);
    }
}