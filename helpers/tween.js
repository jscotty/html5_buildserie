export default class Tween {
    constructor(target, end, duration, animateX, animateY, ease){
        this.target = target;
        this.start = {x: target.x, y: target.y};
        this.end = end;
        this.change = {x: end.x - target.x, y: end.y - target.y};
        this.duration = duration;
        this.ease = ease;
        
        this.animateX = animateX;
        this.animateY = animateY;
        
        this.time = 0;
        this.destroyed = false;
    }
    
    update(delta){
        this.time += delta;
        if(this.animateX){
            this.target.x = this.ease(this.time / 60, this.start.x, this.change.x, this.duration);
        }
        if(this.animateY){
            this.target.y = this.ease(this.time / 60, this.start.y, this.change.y, this.duration);
        }
        if((this.time / 60) >= this.duration){
            if(this.animateX){
                this.target.x = this.end.x;
            }
            if(this.animateY){
                this.target.y = this.end.y;
            }
            if(this.onCompleteCallback != null){
                this.onCompleteCallback.call();
            }
            this.destroy();
        }
    }
    
    onComplete(onCompleteCallback){
        this.onCompleteCallback = onCompleteCallback;
    }
    
    destroy(){
        this.destroyed = true;
    }
}