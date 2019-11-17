import Tween from './tween.js';

export default class Tweener {
    static init(){
        this.tween = [];
    }
    
    static startTweenX(target, end, duration, ease){
        var e = {x: end, y: 0};
        var tween = new Tween(target, e, duration, true, false, ease);
        this.tween.push(tween);
        return tween;
    }
    
    static startTweenY(target, end, duration, ease){
        var e = {x: 0, y: end};
        var tween = new Tween(target, e, duration, true, false, ease);
        this.tween.push(tween);
        return tween;
    }
    
    static startTween(target, end, duration, ease){
        var tween = new Tween(target, end, duration, true, false, ease);
        this.tween.push(tween);
        return tween;
    }
    
    static update(delta){
        var self = this;
        this.tween.forEach(function (item){
            if(item.destroyed){
                var index = self.tween.indexOf(item);
                if(index > -1){
                    self.tween.splice(index, 1);
                }
                return;
            }
            item.update(delta);
        });
    }
}