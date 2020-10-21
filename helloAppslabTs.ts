function multiplyByLenght(a: number, b: number, c: number): number[] {
    var num = new Array(a, b, c);
    
    for (var i = 0;i< num.length; i++){
        num[i]=num[i] * num.length
    }

    

    return(num)
}

function oldarr(a: number, b: number, c: number): number[]{
    var old = new Array(a,b,c);
    return(old)
}




console.log(oldarr(3 ,4 ,5)) 
console.log(multiplyByLenght(3, 4, 5))   
   
