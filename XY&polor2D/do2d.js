class Xy2d {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distanceToOrigin() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    toPolar2D() {
        let xyr = Math.sqrt(this.x * this.x + this.y * this.y);
        let xytheta = Math.atan2(this.y, this.x);
        let x2d = new Polar2D(xyr, xytheta);
        return x2d;
    }
    static distance(p1, p2) {
        if (p1 instanceof Polar2D) {
            p1 = p1.toXy2d();
        } else if (!(p1 instanceof Xy2d)) {
            console.log('//exprition 1');
            return;
        }

        if (p2 instanceof Polar2D) {
            p2 = p2.toXy2d();
        } else if (!(p2 instanceof Xy2d)) {
            console.log('//exprition 2');
            return;
        }


        let ss = (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y);
        return Math.sqrt(ss);
    }
}

class Polar2D {
    constructor(r, theta) {
        this.r = r;
        this.theta = theta;
    }
    distanceToOrigin() {
        return this.r;
    }
    toXy2d() {
        let p2d = new Xy2d(this.r * Math.cos(this.theta), this.r * Math.sin(this.theta));
        return p2d;
    }
    static angle(p1, p2) {
        if (p1 instanceof Xy2d) {
            p1 = p1.toPolar2D();
        } else if (!(p1 instanceof Polar2D)) {
            console.log('//exprition 1');
            return;
        }

        if (p2 instanceof Xy2d) {
            p2 = p2.toPolar2D();
        } else if (!(p2 instanceof Polar2D)) {
            console.log('//exprition 2');
            return;
        }

        return Math.abs(p1.theta - p2.theta);
    }
}



var p1 = new Xy2d(3, 3);
console.log(p1);
document.write('p1 distance To Origin =' + ` ${p1.distanceToOrigin()}` + '<br>');
console.log(p1.toPolar2D());


var p2 = new Polar2D(3 * Math.sqrt(2), Math.PI / 4);
document.write('p2 distance To Origin = ' + `${p2.distanceToOrigin()}` + '<br>');
console.log(p2.toXy2d());
document.write(p2.toXy2d().distanceToOrigin() + '<br>');

var p3 = new Xy2d(6, 7);
document.write('p1 distance To p3 = ' + `${Xy2d.distance(p1, p3)}` + '<br>');
document.write('p2 distance To p1 = ' + `${Xy2d.distance(p2, p1)}` + '<br>');
document.write('p1 distance To p2 = ' + `${Xy2d.distance(p1, p2)}` + '<br>');
document.write('p2 distance To p3 = ' + `${Xy2d.distance(p2, p3)}` + '<br>');
document.write('p2 distance To p3 = ' + `${Xy2d.distance(p2, p3)}` + '<br>');



var p4 = 6;
document.write('p2 distance To p4 = ' + `${Xy2d.distance(p2, p4)}` + '<br>');

var p5 = new Polar2D(3 * Math.sqrt(2), Math.PI / 4);
document.write('p1 distance To p3 = ' + `${Polar2D.angle(p2, p5)}` + '<br>');
document.write('p2 distance To p1 = ' + `${Polar2D.angle(p2, p1)}` + '<br>');
document.write('p1 distance To p2 = ' + `${Polar2D.angle(p1, p2)}` + '<br>');
document.write('p2 distance To p3 = ' + `${Polar2D.angle(p2, p5)}` + '<br>');
document.write('p2 distance To p4 = ' + `${Polar2D.angle(p2, p4)}` + '<br>');