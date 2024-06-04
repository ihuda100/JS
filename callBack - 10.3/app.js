let arr = [1,2,3,4,5];

arr.myForEach = function(cb){
    for(let i=0; i<this.length; i++){
        let elem = this[i];
        cb(elem ,i)
    } 
}
arr.myForEach((elem)=>{
    console.log(elem) 
});

arr.myMap = function(cb){
    let arr = [];
    for(let i=0; i<this.length; i++){
        let elem=(this[i]) ;
        arr[i] = cb(elem,i)
    }
    return arr;
}
let arr1=arr.myMap((ele)=> ele*2);

// arr.myFilter = function(cb){
//     let arr = [];
//     for(let i=0; i<this.length; i+=){

//     }
// }