class display{
    id:number;
    name:string;
    roll:number;
    constructor(c:number,a:string,b:number){
        this.id=c
        this.name=a;
        this.roll=b

    }
    create(){
        var x = this.id
        return x
    }
}
const r = new display(1," aman ",24);
const r1 = new display(1," aman ",24);
var x = [r,r1]
console.log(x)