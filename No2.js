
const segitiga = (ukuran)=>{

    var angka = 1
    for (let i = 1 ; i <= ukuran ; i++){
        let z=''
        for ( let x = i ; x < ukuran ; x ++){
            z += ' '
        }
        for(let j = 0 ; j < i + (i - 1) ; j++){
            
             if ( i == 1 ){
                 z += angka
                 angka += 2
             }else {
                 if (j%2 == 0){
                     z += angka
                     angka+=2
                 }else {
                     z += ' '
                 }
             }
        }
        console.log(z)
    }
}

console.log(segitiga(3))




