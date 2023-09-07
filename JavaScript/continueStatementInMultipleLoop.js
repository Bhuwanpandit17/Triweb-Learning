let n=5;

for (let i=1; i<=n; i++){// outer loop
    for(let j=1; j<=n; j++){// inner loop
        
        if(j==3){
            continue;
        }
      console.log(i,j);
      

    }
    
}

console.log("---------------------------------------------------------");

let n1=5;

for (let i=1; i<=n1; i++){// outer loop
    for(let j=1; j<=n1; j++){// inner loop
         console.log(i,j);
  }
    if(i==3){
            continue;
    }
   
}
