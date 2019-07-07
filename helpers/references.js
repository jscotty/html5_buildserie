//----- states
export { sceneStates, uiAssets, menuAssets, gameAssets, artifactsAssets };
var sceneStates = {
    game: 'game',
    menu: 'menu',
};

var uiAssets = {
    mediumPinkButtons: {
        sheet: '_assets/buttons.json',
        normal: 'medium_btn_normal.png',
        hover: 'medium_btn_hover.png',
        pressed: 'medium_btn_pressed.png',
    },
    
    smallPinkButtons: {
        sheet: '_assets/buttons.json',
        normal: 'small_btn_norm.png',
        hover: 'small_btn_hover.png',
        pressed: 'small_btn_pressed.png',
    },
};

var menuAssets = {
    background: '_assets/menu.png',
};

var gameAssets = {
    background: '_assets/background.png',
    character: '_assets/test_character.png',
    characterAnimation: {
        sheet: '_assets/character.json',
        frames: [
            'character_1.png',
            'character_2.png',
            'character_3.png',
            'character_4.png',
            'character_5.png',
            'character_6.png',
            'character_7.png',
            'character_8.png',
            'character_9.png',
        ],
        frameRate: 10,
    }
};

var artifactsAssets = {
    cloud: '_assets/cloud.png',
    clouds: {
        sheet: '_assets/clouds.json',
        frames: [
            'cloud_1.png',
            'cloud_2.png',
            'cloud_3.png',
            'cloud_4.png',
            'cloud_5.png',
        ],
    },
};