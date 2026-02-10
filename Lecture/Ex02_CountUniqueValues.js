function countUniqueValues(A) {
    if (A.length === 0) return 0;

    let i = 0;

    for (let j = 1 ; j < A.length ; j++) {
        if (A[i] !== A[j]) {
            i++;
            A[i] = A[j];
        }
    }
    
    return i + 1;
}

countUniqueValues([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5]);

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

function averagePair(A, average){
    const N = A.length;

    if (N < 2) return false;

    let i = 0;
    let j = N - 1;

    while (i < j) {
        const avg = (A[i] + A[j]) / 2;
        if (avg === average) {
            return true;
        } else if (avg < average) {
            i++;
        } else {
            j--;
        }
    }
    
    return false;
}

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false

function isSubsequence(A, B) {
    if (A.length === 0) return false;
    if (B.length === 0) return false;

    let i = 0;
    let j = 0;

    while (j < B.length) {
        if (A[i] === B[j]) i++;
        if (i === A.length) return true;
        j++;
    }

    return false;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)