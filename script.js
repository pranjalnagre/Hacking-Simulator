function delay (ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function hack1(params) {
    let html = "Initializing Hacking<span class='dots'></span>"
    await delay(2000);
    document.querySelector("#first").innerHTML =html + "<br>";
}

async function hack2(params) {
    let html = "Reading your Files<span class='dots'></span>"
    await delay(4000);
    document.querySelector("#second").innerHTML =html + "<br>";
}

async function hack3(params) {
    let html = "Password files Detected<span class='dots'></span>"
    await delay(6000);
    document.querySelector("#third").innerHTML =html + "<br>";
}

async function hack4(params) {
    let html = "Sending all passwords and personal files to server<span class='dots'></span>"
    await delay(8000);
    document.querySelector("#fourth").innerHTML =html + "<br>";
}

async function hack5(params) {
    let html = "Cleaning up<span class='dots'></span>"
    await delay(10000);
    document.querySelector("#fifth").innerHTML =html + "<br>";
}
    


async function main(){
    await hack1();
    await hack2();
    await hack3();
    await hack4();
    await hack5();
}

main();