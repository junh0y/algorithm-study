function validAnagram(A, B){
    if (A.length !== B.length) {
        return false;
    }
    
    const count = {};

    for (let value of A) {
        count[value] = (count[value] || 0) + 1;
    }
    
    for (let value of B) {
        if (!count[value]) return false;
        count[value]--;
    }
    
    return true;
}

validAnagram('anagrams', 'smargana');

function sameFrequency(A, B){
    A = A.toString();
    B = B.toString();

    if (A.length !== B.length) return false;

    const unique = {};

    for (let value of A) {
        unique[value] = (unique[value] || 0) + 1;
    }

    for (let value of B) {
        if (!unique[value]) return false;
        unique[value]--;
    }
    
    return true;
}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

function areThereDuplicates(...A) {
    if (A.length === 0) return false;

    const unique = {};
    for (let value of A) {
        if (unique[value]) {
            console.log(true);
            return true;
        } else {
            unique[value] = 1;
        }
    }
    
    console.log(false);
    return false;
}

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 