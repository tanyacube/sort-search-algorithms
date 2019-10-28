let numArray = [3, 5, 4, 9, 6, 10, 2, 7, 1, 8]

function sortNum (a) {
    while (true) {
        let countOfSwaps = 0;
        for (let i = 0; i < a.length-1; i++) {
            if(a[i] > a[i+1]){
                let left = a[i];
                a[i] = a[i+1];
                a[i+1] = left;
                
                countOfSwaps++
            }
        }

        if (countOfSwaps === 0 ) {
            return a;
        }
    }
}

console.log(sortNum (numArray))