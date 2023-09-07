let n=5;

for (let i=1; i<=n; i++){// outer loop
    for(let j=1; j<=n; j++){// inner loop
        
        console.log(i,j);
        if(j==3){
            break;
        }
    }
    
}

console.log("---------------------------------------------------------");

let n1=5;

for (let i=1; i<=n; i++){// outer loop
    for(let j=1; j<=n; j++){// inner loop
        
        console.log(i,j);
        
    }
    if(i==3){
            break;
        }
    
}
