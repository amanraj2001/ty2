var display = /** @class */ (function () {
    function display(c, a, b) {
        this.id = c;
        this.name = a;
        this.roll = b;
    }
    display.prototype.create = function () {
        var x = this.id;
        return x;
    };
    return display;
}());
var r = new display(1, " aman ", 24);
var r1 = new display(1, " aman ", 24);
var x = [r, r1];
console.log(x);
