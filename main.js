import SceneManager from './scenes/sceneManager.js';
import Menu from './scenes/menu.js';
import Game from './scenes/game.js';
import MathHelper from './helpers/mathhelper.js';
import Tweener from './helpers/tweener.js';
import { sceneStates, uiAssets, gameAssets, artifactsAssets } from './helpers/references.js';

const width = 800;
const height = 600;

const renderer= new PIXI.Application({
    width: width, height: height, backgroundColor: 0x6cd6e0, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(renderer.view);

Tweener.init();

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
        Tweener.update(delta);
    });
});

var resize = () => {
    const scaleFactor = MathHelper.clamp(Math.min(window.innerWidth / width, window.innerHeight / height), 0, 1);
    var newWidth = width * scaleFactor;
    var newHeight = height * scaleFactor;
      
    renderer.view.style.width = newWidth + 'px';
    renderer.view.style.height = newHeight + 'px';
};
    
window.addEventListener('resize', resize, false);
resize();
