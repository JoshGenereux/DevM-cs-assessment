let string = "Monday"

const unique =(string)=>{
    let map = new Map;
    for(let i = 0; i < string.length; i++){
        if(map.has(string[i])){
            return false
        } else {
            map.set(string[i], i)
        }
    }
    return true;
}

console.log(unique(string))

/*
This function I wrote runs in O(n) time, its only a single for loop.

The space complexity however is also O(n), because I am adding n amount of elements to a new Map I created
 */