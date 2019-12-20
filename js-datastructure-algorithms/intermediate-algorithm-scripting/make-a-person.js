var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    //this.fullName = firstAndLast;
    this.getFullName = function () {
        return firstAndLast;
    };
    this.getFirstName = function () {
        return firstAndLast.split(' ')[0];
    };
    this.getLastName = function () {
        return firstAndLast.split(' ')[1];
    };
    
    this.setFullName = function (fl) {
        firstAndLast = fl;
    };
    this.setFirstName = function (first) {
        let arr = firstAndLast.split(' ');
        arr[0] = first;
        firstAndLast = arr.join(" ");
    };
    this.setLastName = function (last) {
        let arr = firstAndLast.split(' ');
        arr[1] = last;
        firstAndLast = arr.join(" ");
    };

    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();

