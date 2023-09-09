 
 let arr = [1,2,3,4,5,6,7,8];

 let arr1 = arr.filter((element)=>{
   element =  element%2!==0;
   return element;
 })

 console.log(arr1);