function train(input){
    let wagons=input.shift().split(' ').map(Number);
    let capacity=Number(input.shift());
    
    for (let i = 0; i < input.length; i++) {
       let current=input[i].split(' ');
       if (current[0]==='Add') {
           wagons.push(current[1]);
       }else{
           let passengers=Number(current[0]);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j]+passengers<=capacity) {
                    wagons.splice(j,1,(wagons[j]+passengers));
                    break;
                }
                
            }
            
       }
    
        
    }
    console.log(wagons.join(' '));
    }
    
    
    
    
    
    train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
    