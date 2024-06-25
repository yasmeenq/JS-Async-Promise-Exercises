function generate7BoomAfterDelayAsync (min,max){
    return new Promise((resolve, reject)=>{

        const num = parseInt(min) + Math.floor(Math.random()*(max-min+1));
        if(num%7===0|| num%10===7){
            resolve(num);//success 
        }
        else {
            reject(new Error("Crash...and fail😢"))
        }
    })
}

async function test1(){
    let min = 100 
    let max = 200; 
    try{
        const num = await generate7BoomAfterDelayAsync(min, max);
        document.getElementById("solution").innerText= num + "😊";
    }
    catch(err){
        document.getElementById("solution").innerText= err.message;
    }
}
test1()