export default class Ease {
    static linear (t, b, c, d){
        return c * t / d + b;
    }
    
    
    static sineIn (t, b, c, d){
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    }
    static sineOut (t, b, c, d){
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    }
    static sineInOut (t, b, c, d){
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
    
    
    static cubicIn (t, b, c, d){
        t /= d;
        return c * t * t * t + b;
    }
    static cubicOut (t, b, c, d){
        t /= d;
        t--;
        return c * (t * t * t + 1) + b;
    }
    static cubicInOut (t, b, c, d){
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
    
    
    static quintIn (t, b, c, d){
        t /= d;
        return c * t * t * t * t * t + b;
    }
    static quintOut (t, b, c, d){
        t /= d;
        t--;
        return c * (t * t * t * t * t + 1) + b;
    }
    static quintInOut (t, b, c, d){
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t * t * t + 2) + b; 
    }
    
    
    static circIn (t, b, c, d){
        t /= d;
        return -c * (Math.sqrt(1 - t * t) - 1) + b;
    }
    static circOut (t, b, c, d){
        t /= d;
        t--;
        return c * Math.sqrt(1 - t * t) + b;
    }
    static circInOut (t, b, c, d){
        t /= d / 2;
        if (t < 1) return -c/2 * (Math.sqrt(1 - t * t) - 1) + b;
        t -= 2;
        return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
    }
    
    
    static elasticIn (t, b, c, d){
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (33 * tc * ts + -59 * ts * ts + 32 * tc + -5 * ts);
    }
    static elasticOut (t, b, c, d){
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (33 * tc * ts + -106 * ts * ts + 126 * tc + -67 * ts + 15 * t);
    }
    static elasticInOut (t, b, c, d){
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (45.345 * tc * ts + -111.24 * ts * ts + 88.495 * tc + -23.2 * ts + 1.6 * t);
    }
    
    
    static quadIn (t, b, c, d){
        t /= d;
        return c * t * t + b;
    }
    static quadOut (t, b, c, d){
        t /= d;
        return -c * t * (t - 2) + b;
    }
    static quadInOut (t, b, c, d){
        t /= d / 2;
        if (t < 1) return c / 2 *t * t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    }
    
    
    static quartIn (t, b, c, d){
        t /= d;
        return c * t * t * t * t + b;
    }
    static quartOut (t, b, c, d){
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
    }
    static quartInOut (t, b, c, d){
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    }
    
    
    static expoIn (t, b, c, d){
        return c * Math.pow( 2, 10 * (t/d - 1) ) + b;
    }
    static expoOut (t, b, c, d){
        return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
    }
    static expoInOut (t, b, c, d){
        t /= d/2;
        if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
        t--;
        return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
    }
    
    
    static backIn (t, b, c, d){
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (4 * tc + -3 * ts);
    }
    static backOut (t, b, c, d){
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (4 * tc + -9 * ts + 6 * t);
    }
    static backInOut (t, b, c, d){
        var ts = (t /= d) * t;
        var tc = ts * t;
        return b + c * (20.9475 * tc * ts + -54.7425 * ts * ts + 43.895 * tc + -9.1 * ts);
    }
    
    
    static bounceIn (t, b, c, d){
        return c - Ease.bounceOut (d - t, 0, c, d) + b;
    }
    static bounceOut (t, b, c, d){
		if ((t /= d) < (1 / 2.75)) {
			return c * (7.5625 * t * t) + b;
		} else if (t < (2 / 2.75)) {
			return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
		} else if (t < (2.5 / 2.75)) {
			return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
		} else {
			return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
		}
    }
    static bounceInOut (t, b, c, d){
        if (t < d / 2) {
            return Ease.bounceOut (t * 2, 0, c, d) * 0.5 + b;
        }
		return Ease.bounceOut (t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
}