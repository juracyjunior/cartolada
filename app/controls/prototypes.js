String.prototype.lpad = function(length, padString){
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
};