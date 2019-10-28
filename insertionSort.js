let numbers = [5, 9, 2, 3, 1, 7, 8, 4, 6]

function insertionSort(arr) {
    var hand = [];

    for (var i = 0; i < arr.length; i++) {
        hand.push(arr[i]);

        for (var j = hand.length - 1; j >= 0; j--) {
            if (arr[i] < hand[j]) {
                hand[j + 1] = hand[j];
                hand[j] = arr[i];
            }
        }
    }

    return hand
}

console.log(insertionSort(numbers));