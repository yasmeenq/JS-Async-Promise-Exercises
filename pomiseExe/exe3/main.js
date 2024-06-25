function isPrime(num) {

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}


function generatePrimeNumberAfterDelayAsync(min, max) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = parseInt(min) + Math.floor(Math.random() * (max - min + 1));
            if (isPrime(num)) {
                resolve(num);
            }
            else {
                reject(new Error(num + " :Crash...and fail😢"))
            }
        }, 3000);
    })
}

async function test() {
    let min = +document.getElementById("min").value;
    let max = +document.getElementById("max").value;
    try {
        const num = await generatePrimeNumberAfterDelayAsync(min, max);
        document.getElementById("solution").innerText = num + "😊";
    }
    catch (err) {
        document.getElementById("solution").innerText = err.message;
    }
}
test()