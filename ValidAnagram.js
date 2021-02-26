var isAnagram = function(s, t) {
    var newStringS = s.split("").sort();
    var newStringT = t.split("").sort();
    
    if (newStringS.length == newStringT.length) {
        for (i = 0; i < newStringS.length; i++) {
            if (newStringS[i] != newStringT[i]) {
                return false;
            }
        } return true;
    } else {
        return false;
    }
};