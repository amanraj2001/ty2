// function display<T>(x:T):T{
//     return x;
// }
// let out =  display<string>("sos")
// let out2 = display<boolean>(true)
// console.log(out2)

// class display<T,U>{
//     id:T;
//     name:U;
//     constructor(a:T,b:U){
//         this.id = a;
//         this.name = b;
        
//     }
//     call():void{
//         console.log(`hello ${this.id} there ${this.name}`)
//     }
// }
// const tim = new display<number,string>(12,"anan");
// tim.call()

interface disc<T,U>{
    (id:T, id2:U):void
}

function abc(id:number,id2:number):number{  
    return id*id2;
}

let x : disc<number,number> =abc;
console.log(x(10,5))
