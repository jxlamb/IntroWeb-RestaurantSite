/*
 * primative types:
 * represents a single, immutable value
 * (once set it cannot be changed - memory space will never be modified)
 * 
 * boolean (true and false)
 * 
 * undefined - signifies that no value has ever been set (defined but no value was set)
 * you can (but should not) set a variable = to undefined
 * 
 * null - signifies a lack of value
 * its okay to set values to null
 * 
 * Number - only numeric type in java
 * its a 64 bit floating point
 * int is a subset of number
 * 
 * string - sequence of characters
 * 
 * symbol - new to es6
 * not widely supported as of course and not covered here
 * 
 * 
 * 
 * object types: 
 * mutable - collection of key value pairs, values can contain functions
 * 
 * 
 * common conctructs: 
 * += combine left with right
 * math +, -, *, / 
 * / will return decimal
 * 
 * var x = 4 and y = '4' are equal values through (x == y)
 * this happens through type coersion (the int is converted to a string)
 * using strict quality e.g. x===y the values are not equal (no coersion occurs)
 * 
 * 
 * things that are coersed to false: false, null, undefined, "", 0, NaN
 * (NaN is not a number)
 * 
 * things that are coersed to true: true,  1, -1, "false", "any non empty string"
 * any non zero number evaluates to true
 * 
 * 
 * Opening brace is not just a style choice: 
 * it is required for a return statement to have something on the same line or nothing will be returned
 * e.g. return
 * {
 *  intValue = 5
 * }; will not work but this will
 * return {
 *  intValue = 5
 * };
 * 
 * 
 * Loops:
 * for loop same as c#, 
 * 
 * Wrapper objects: 
 * Boolean, String, Number
 * 
 * 
 * Default Values: 
 * in a function: 
 * if(paramName === undefined){
 *  paramName ="defaultValue";
 * }
 * easier way: 
 * paramName = paramName || "defaultValue";
 * var x = 0 || "other value"; -- ends up as "other value"
 * 
 * create objects: 
 * better to define as object literal 
 * 
 * var car = {
        name: "Toyota",
        color: "Slate Grey",
        Model: {
            name: "Corolla",
            trim: "SX"
        },
        $costs: {
            mspr: 26000,
            purchasePrice: 23000
        },
        "Some other property name": "blablabla"
    };
 * 
 * all below are valid
 * var car = new Object();
 * car.color = "Red"; --now a color exists
 * car.model = new Object();
 * car.model.year = 2017;
 * car.model.trimLevel = "LX";
 * console.log(car); will log in json format
 * console.log(car["color"]);
 * car.model.trimLevel = "LX";
 * var somepropertyName = "blablabla";
 * car[somepropertyName] = "some coded property name";
 * console.log(car);
 * console.log(car["color"]);
 * console.log(car["$cost"]);
 * console.log(car.$cost);
 * console.log(car["msrp cost"]);
 * console.log(car[somepropertyName]);
 * 
 * 
 * 
 * Function factory examples: 
 * 
        function makeMultiplier(multiplier) {
            var myFunction = function (x) {
                return multiplier * x;
            };

            return myFunction;
        }
        var asdf = makeMultiplier(7);
        var value = asdf(5);
        console.log(value);
        //pass Function as Argument
        function doOperationOn(x, operation) {
            return operation(x);
        }
        var result = doOperationOn(10, asdf);
        console.log(result);
 * 
 * 
 * 
 * difference between passing by value VS by reference: 
 * primitives are passed by value and objects are passed by reference
 * 
        var a = 7; //a at 0x001
        var b = a; //b at 0x002
        var c = { x: 7 }; //c at 0x002 AND x: 7 at 0x005
        var d = c;//d at 0x003 AND x: 7 at 0x005
 * 
 * by convention a capital in a functino name means its a function constructor
 * 
 * 
 * 
 * How to add a prototype (should be defined outside function):
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea =
        function () {
            return Math.PI * Math.pow(this.radius, 2);
        }

    var myCircle = new Circle(10);
    console.log(myCircle);
    console.log(myCircle.getArea())
 * 
 * 
 */

var literalCircle = {
    radius: 10,
    getArea: function () {
        var self = this;
        console.log(this);

        var increaseRadius = function () {
            self.radius = 20;// set on global object
            console.log(self.radius);
        }
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());

