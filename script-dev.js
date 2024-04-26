function processData(data) {
    //do something with the data
    console.log('data', data);
}

async function getSomeData() {
    const response = await fetch(`https://randomuser.me/api/?1`);
    const data = await response.json();
    console.log(data);
    return data;
}

function runProgram() {
    let data = null;
    try {
        data = getSomeData();
    }
    catch(error) {
        console.log('error', error);
    }
    //do something with the data
    processData(data);

}

document.addEventListener('DOMContentLoaded', runProgram);