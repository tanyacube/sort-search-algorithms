let numbers = [5, 9, 2, 3, 1, 7, 8, 4, 6]

// function selectSort (arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var cutOffArr = arr.slice();
//         cutOffArr.splice(0, i);
//         var min = Math.min.apply(Math, cutOffArr);
//         var indexMin = arr.indexOf(min);

//         var first = arr[i];
//         arr[i] = arr[indexMin];
//         arr[indexMin] = first;
//     }

//     return arr;
// }

function selectSort (arr) {
    for (var i = 0; i < arr.length; i++) {
        var indexMin = i;
        var min = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                indexMin = j;
            }
        }

        var first = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = first;
    }

    return arr;
}

console.log(selectSort(numbers));


