class square{
    constructor(side){
        this.side=side;

    }
    great(){
        return Math.power(this.side,2);
    }


}
class rectangle extends square{
    constructor(side,height){
        super(side);

        this.height=height;
    }
    childgreat(){
        return this.height*this.side;
    }


}
let obj1 =new square(10);
console.log(obj1.childgreat());

var arr=[3,45,6,7,23,5,7,8]
let obj=(num)=>{
    let ob=arr.sort(function(a, b){return a - b});
    return ob[arr.length-num];
}
console.log(obj(3));
