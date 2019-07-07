import SceneManager from './scenes/sceneManager.js';
import Menu from './scenes/menu.js';
import Game from './scenes/game.js';
import { sceneStates, uiAssets, gameAssets, artifactsAssets } from './helpers/references.js';

const renderer= new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x6cd6e0, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(renderer.view);


PIXI.Loader.shared
.add(uiAssets.mediumPinkButtons.sheet)
.add(gameAssets.characterAnimation.sheet)
.add(artifactsAssets.clouds.sheet)
.load(function(){
    var sceneManager = new SceneManager(renderer);
    sceneManager.addScene(new Menu());
    sceneManager.addScene(new Game());

    sceneManager.renderScene(sceneStates.menu);
 
    renderer.ticker.add(function update(delta){
        sceneManager.update(delta);
    });
});

