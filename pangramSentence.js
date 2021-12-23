let string = "The quick brown fox jumps over the lazy dog!"
let string2 = "I like cats, but not mice"
let string3 = "two driven jocks help fax my big quiz"
let string4 = "two drive jocks help fax my big quiz"

const pangram =(str)=>{
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        let letter = str[i]
        if(abc.includes(letter)){
            abc.splice(abc.indexOf(letter), 1)
            console.log(abc)
        }
    }
    if(abc.length === 0){
        return true;
    }
    return false;
}

console.log(pangram(string4))

/*
Time complexity - is a little complicated. O(4n) because I have 4 different functions that all need to comb over different arrays.
but in total it is O(n) because constants dont matter in the long run

Space complexity - space complexity is O(3n) because I have to create essentially 3 different arrays inside the function,
making it O(n) total.
 */