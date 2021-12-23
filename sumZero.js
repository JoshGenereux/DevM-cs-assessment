let array = [0]

const addToZero = (array)=>{
    for (let i = 0; i < array.length; i++){
        for(let j = 1; j < array.length; j++){
            if(array[i] + array[j] === 0){
                return true;
            }
        }
    }
    return false;
}

console.log(addToZero(array))

/*
As I have it written here, this function runs in O(n^2) time, because it is a nested for loop.

However the space complexity is O(i), because I am not adding anything to memory, the only memory that is used
is that of the existing array, but not adding anything to the array.
 */