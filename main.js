const renderer= new PIXI.Application({
    width: 800, height: 600, backgroundColor: 0x86e8af, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(renderer.view);

var sceneManager = new SceneManager(renderer);
sceneManager.addScene(new Menu());
sceneManager.addScene(new Game());

sceneManager.renderScene(MENUSTATE);
 
renderer.ticker.add(function update(delta){
    sceneManager.update(delta);
});