var person = /** @class */ (function () {
    function person(a, b, c, d) {
        this.id = a;
        this.name = b;
        this.standard = c;
        this.result = d;
    }
    person.prototype.displayid = function () {
        return this.id;
    };
    person.prototype.displayname = function () {
        return this.name + this.standard;
    };
    person.prototype.displaystd = function () {
        return this.standard;
    };
    person.prototype.displayres = function () {
        return this.result;
    };
    return person;
}());
var x1 = new person(1, "aman", 12, true);
var x2 = new person(2, "rajput", 20, true);
var arr = [x1, x2];
// console.log(x1.displayname()) 
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var x = arr_1[_i];
    console.log(x.displayname());
}
