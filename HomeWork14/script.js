function randomNumber(arr) {
    if(arr.length == 0) {
        return {
            min:null,
            max:null
        }
    }
    let max = arr[0]
    let min = arr[0]
    for(let i =0; i<arr.length; i++ ){
        if(max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]){
            min = arr[i];
        }
    }
    return {
        min:min,
        max:max
    }
}
console.log(randomNumber([1,10]));