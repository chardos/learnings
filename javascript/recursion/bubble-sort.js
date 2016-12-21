const swap = (list, position) => {
    // if swapped, return array, if not, return nothing.
    if(list[position] > list[position + 1]){
        return [
            ...list.slice(0, position),
            list[position + 1],
            list[position],
            ...list.slice(position + 2)
        ]
    }
}

const bubbleSort = (list, position = 0, swapCounter = 0) => {
    if(position + 1 == list.length){ // End of sort round
        if(swapCounter == 0) return list; // If got through round without any swaps
        position = 0;
        swapCounter = 0;
    }
    const newList = swap(list, position);
    if (newList){
        return bubbleSort(newList, position + 1, swapCounter + 1);
    }
    else{
        return bubbleSort(list, position + 1, swapCounter);
    }

}

bubbleSort([8,6,3,7,9,4]);
