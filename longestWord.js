let array = ["hi", 'hello']
let array2 = ['hola','holaa']
let array3 = ['helakjdfoiaadfadfadsfasdfsdfeafadfafajfadfftsegste', 'alj']

const long = (arr) =>{
    let word = 0;
    let longest;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > word) {
            word = arr[i].length

        }
    }
    return word
}

console.log(long(array))

/*
time - This one runs in O(n) time, it is just a single for loop

space - this is constant O(1) because the function only adds 2 variables and that is it.
the array it takes in can change, but it does not add or remove anything from the array,
making it constant
 */