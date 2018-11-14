class Recursion{
    constructor(){

    }
    handshake(n){
        if (n == 2){
            return 1;
        }
        else{
           return (n - 1) + this.handshake(n - 1);
        }
    }

    pizza(n){
        if (n == 1){
            return 2
        }
        else{
            return 2 + this.pizza(n - 1);
        }
    }
}

module.exports = Recursion;
//easy
//but pizza(n) could just return n * 2, just saying