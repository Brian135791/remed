
array= []
const allEqual= (array)=> {
    var equal
    var satu
    
    for (let i = 0; i < array[i] ; i++){
    
        if (equal === undefined){
            equal = array[i]
           
            if(array[i] == equal){
                return true
            }
        }
    }
}
console.log(allEqual(array[1,1,1]))