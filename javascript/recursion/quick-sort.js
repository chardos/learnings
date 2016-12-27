function swap(items, firstIndex, secondIndex){
    let newItems = [...items];
    newItems[firstIndex] = items[secondIndex];
    newItems[secondIndex] = items[firstIndex];
    return newItems;
}

function partition(items, leftIndex, rightIndex) {

    var pivot = items[Math.floor((rightIndex + leftIndex) / 2)];

    while (leftIndex <= rightIndex) {

        while (items[leftIndex] < pivot) {
            leftIndex++;
        }

        while (items[rightIndex] > pivot) {
            rightIndex--;
        }

        if (leftIndex <= rightIndex) {
            items = swap(items, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }

    return {leftIndex, items};
}

function quickSort(items, leftIndex = 0, rightIndex = items.length - 1) {
    // debugger;
    var index;

    if (items.length > 1) {

        var partitionResult = partition(items, leftIndex, rightIndex);
        index = partitionResult.leftIndex;
        items = partitionResult.items;

        if (leftIndex < index - 1) {
            items = quickSort(items, leftIndex, index - 1);
        }

        if (index < rightIndex) {
            items = quickSort(items, index, rightIndex);
        }

    }

    return items;
}

// first call
// quickSort([5,3,7,14,6,4,9,12]);
quickSort([14,5,3,7]);
