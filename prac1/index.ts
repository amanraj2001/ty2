class person {
    id: number;
    name: string;
    standard: number;
    result: boolean
    constructor(a: number, b: string, c: number, d: boolean) {
        this.id = a;
        this.name = b;
        this.standard = c;
        this.result = d;
    }
    displayid(): number {
        return this.id ;
    }
    displayname(): string {
        return this.name + this.standard;
    }
    displaystd(): number {
        return this.standard;
    }
    displayres():boolean{
        return this.result;
    }


}
const x1 = new person(1,"aman",12,true)
const x2 = new person(2,"rajput",20,true)
var arr = [x1,x2]
// console.log(x1.displayname()) 
for (let x of arr){
    console.log(x.displayname())
}