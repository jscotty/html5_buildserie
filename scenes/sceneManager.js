class SceneManager extends PIXI.Container {
    constructor(renderer){
        super();
        this.renderer = renderer;
        this.scenes = [];
        this.currentScene = null;
    }

    get scene(){
        return this.currentScene;
    }

    set scene(value){
        if(this.currentScene === value) {
            return;
        }
        this.currentScene = value;
        this.currentScene.manager = this;
        this.currentScene.position.set(this.renderer.width / 2, this.renderer.height / 2);
        this.addScene(this.currentScene);
        this.scene.initialize();

        this.children.length = 0;
        this.addChildAt(this.currentScene, 0);
    }

    update(delta){
        if(this.currentScene != null){
            this.currentScene.update(delta);
        }
    }

    renderScene(name){
        if(this.currentScene != null && this.currentScene.name === name){
            return;
        }
        if(this.currentScene != null){
            this.renderer.stage.removeChild(this.currentScene);
        }
        this.scene = this.getSceneByName(name);
        this.renderer.stage.addChild(this.scene);
    }

    addScene(scene){
        if(this.scenes.indexOf(scene) !== -1) {
            return this;
        }
        scene.manager = this;
        this.scenes.push(scene);
        return scene;
    }

    getSceneByName(name){
        let scene;
        for(let i = 0; i < this.scenes.length; i++){
            if(this.scenes[i].name === name){
                scene = this.scenes[i];
                break;
            }
        }
        return scene;
    }
}