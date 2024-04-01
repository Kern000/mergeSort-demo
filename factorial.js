let count = 0;

function factorial(n){
    if (n == 0) {

        count++;
        console.log("This is terminal recursive iteration");

        return 1;

    } else {

        count++;
        console.log(`n is ${n}. This is recursive iteration ${count}`);

        return n * factorial(n-1);
    }
}


factorial(25);