function handshake(n){
    if (n == 2){
        return 1;
    }
    else{
       return (n - 1) + handshake(n - 1);
    }
}

console.log(handshake(10));

function pizza(n){
    if (n == 1){
        return 2
    }
    else{
        return 2 + pizza(n - 1);
    }
}

console.log(pizza(5));

//easy