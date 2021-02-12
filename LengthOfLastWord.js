var lengthOfLastWord = function(s) {
    // split string into different words
    var lengthOfString = 0
    var trimString = s.trim();
    var string = trimString.split(" ");
    if (string.length > 1) {
        var lastWord = string[string.length - 1];
        var lastChars = lastWord.split("");
        for (i = 0; i < lastChars.length; i++) {
            lengthOfString ++;
        }
    } else {
        var lastChars = s.split("");
        for (i = 0; i < lastChars.length; i++) {
            lengthOfString ++;
        }
        
    }
    return lengthOfString;
    //find last word of the string 
    //find length of string
};