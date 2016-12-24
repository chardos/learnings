function swap(list, firstIndex, secondIndex){
    const newList = [...list];
    newList[firstIndex] = list[secondIndex];
    newList[secondIndex] = list[firstIndex];
    return newList;
}

function partition(){
    
}

function quickSort(list){
    const midIndex = Math.floor(list.length/2);
    const pivot = list[midIndex];

    // const firstArray = list.slice(0, midIndex);
    // const secondArray = list.slice(midIndex + 1);
    // console.log(firstArray);
    // console.log(secondArray);
}

quickSort([5,3,7,14,6,4,9,12]);
