function rounding(n,p){
    if (p>15) {
        p=15;
    }
    n=parseFloat(n.toFixed(p));
    console.log(n);
}

rounding(3.1415926535897932384626433832795,2)