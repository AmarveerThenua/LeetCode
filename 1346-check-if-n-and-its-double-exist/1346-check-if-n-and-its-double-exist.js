/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let set = new Set()

    for(let num of arr){
        if(set.has(2*num) || set.has(num/2) &&(num%2 ==0)){
            return true
        }
        set.add(num)
    }

    return false
};