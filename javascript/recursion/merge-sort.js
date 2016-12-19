// Takes two already sorted arrays, and merge them together
const merge = (left, right, sorted = []) => {

    if(!left[0] && !right[0]) return sorted;

    const takeLeft = left[0] < right[0] ||
                     !right[0] ||
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

merge([2,3,5,12,27], [2,9,11,23,42,]);


const mergeSort = (array) => {
    // break array into singles list

    const mid = Math.floor()
}
