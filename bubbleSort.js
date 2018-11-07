// //  repeatedly swapping the adjacent elements if they are in the wrong order.
let Arr = [1, 6, 4, 7, 3, 2];

function bubbleSort(Arr) {
    let length = Arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length; j++) {
            if (Arr[j] > Arr[j + 1]) {
                let temp = Arr[j];
                Arr[j] = Arr[j + 1];
                Arr[j + 1] = temp;
            }
        }
    }
    console.log(Arr);
};

bubbleSort(Arr)
