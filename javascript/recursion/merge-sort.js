// Takes two already sorted arrays, and merge them together
const merge = (left, right, sorted = []) => {

    if(!left[0] && !right[0]) return sorted;

    const takeLeft = !right[0] ||
                     left[0] < right[0] ||
                     left[0] === right[0]

    const takeRight = right[0] < left[0] ||
                      !left[0]

    if(takeLeft){
        return merge( left.slice(1), right, [...sorted, left[0]] )
    }
    else if (takeRight){
        return merge( left, right.slice(1), [...sorted, right[0]] )
    }
}
// merge([2,3,5,12,27], [2,9,11,23,42]);


// Merge sort from the web
function mergeSort(items){
    debugger;
    // Terminal case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    //Still NFI how the below statement works
    return merge(mergeSort(left), mergeSort(right));
}

mergeSort([7,3,43,87,43,13,75,3,74,9,99])
// mergeSort([7,3,4,1])
