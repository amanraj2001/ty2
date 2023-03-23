interface employee{
    id:number,
    name:string,
    address:string,
    number:number,
}
const x : employee={
    id:10,
    name:"aman",
    address:"ttt",
    number:131313,
}
const x1 : employee={
    id:12,
    name:"raj",
    address:"t",
    number:131313,
}
const x3 : employee={
    id:12,
    name:"trtr",
    address:"t",
    number:131313,
}
var z = [x,x1]
// console.log(z)
const y = z.filter(abc)
function abc(t:any){
    return t.name=="raj";
}
for(let x of y){
    console.log(x.name)
}
console.log(y)