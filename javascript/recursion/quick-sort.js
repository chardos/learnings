function swap(list, firstIndex, secondIndex){
    const newList = [...list];
    newList[firstIndex] = list[secondIndex];
    newList[secondIndex] = list[firstIndex];
    return newList;
}

function partition(list, leftPointer, rightPointer){
    const pivot = list[Math.floor((leftPointer + rightPointer)/2)];

    while(leftPointer <= rightPointer){
        while(list[leftPointer] < pivot){
            leftPointer++;
        }
        while(list[rightPointer] > pivot){
            rightPointer++;
        }
        if(leftPointer <= rightPointer){
            list = swap(list, leftPointer, rightPointer);
            leftPointer++;
            rightPointer++;
        }
    }
    return leftPointer;
}
partition([4,5,6,7], 0, 3)

function quickSort(list, left = 0, right = list.length - 1) {

    var index;

    if (list.length > 1) {

        index = partition(list, left, right);

        if (left < index - 1) {
            quickSort(list, left, index - 1);
        }

        if (index < right) {
            quickSort(list, index, right);
        }

    }

    return list;
}


// first call
var result = quickSort([5,3,7,14,6,4,9,12]);
