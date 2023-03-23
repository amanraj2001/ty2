var x = {
    id: 10,
    name: "aman",
    address: "ttt",
    number: 131313,
};
var x1 = {
    id: 12,
    name: "raj",
    address: "t",
    number: 131313,
};
var x3 = {
    id: 12,
    name: "trtr",
    address: "t",
    number: 131313,
};
var z = [x, x1];
// console.log(z)
var y = z.filter(abc);
function abc(t) {
    return t.name == "raj";
}
for (var _i = 0, y_1 = y; _i < y_1.length; _i++) {
    var x_1 = y_1[_i];
    console.log(x_1.name);
}
console.log(y);
