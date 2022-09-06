const pi=3.14;
class cylinder{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getvolume(){
        return  pi*(this.radius*this.radius)*this.height;

    }

}

class sphere{
    constructor(radius){
        this.radius=radius;

    }
    getvolume(){
        return (pie*Math.pow(this.radius,3)*4/3);
    }

}
class cone{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }
    getvolumea(){
        return (pie*Math.power(this.radius,2)*this.height)/3
    }


}
let obj= new cylinder(10,20);
console.log(obj.getvolume());