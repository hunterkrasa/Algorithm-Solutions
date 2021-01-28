var reverse = function(x) {
    if (Math.abs(x) > Math.pow(2, 31)) {
        return 0;
    } else {
        let value = Number(Math.abs(x).toString().split('').reverse().join(''));
        return value * Math.sign(x);
    }

};