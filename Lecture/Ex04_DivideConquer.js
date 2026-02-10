function search(A, value) {
    let min = 0;
    let max = A.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = A[middle];

        if (currentElement < value) {
            min = middle + 1;
        } else if (currentElement > value) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    
    return -1;
}

search([1, 5, 9, 15, 25, 50, 79, 99, 102, 144, 190, 205, 350, 400, 699, 890, 1000], 400);