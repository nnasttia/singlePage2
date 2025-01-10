'use strict';

const arr = [" Developer.", " Freelancer."];
const arrua = [" Розробник.", " Фрілансер."];
printTextSequentially(arr);
printTextSequentiallyUa(arrua);

async function printTextSequentially(arr) {
    let index = 0;
    while (true) {
        const text = arr[index];
        for (let j = 0; j < text.length; j++) {
            await new Promise(resolve => setTimeout(resolve, 100));
            document.getElementById("typing-txt").innerHTML += text[j];
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        document.getElementById("typing-txt").innerHTML = "";
        index = (index + 1) % arr.length;
    }
}

async function printTextSequentiallyUa(arrua) {
    let index = 0;
    while (true) {
        const text = arrua[index];
        for (let j = 0; j < text.length; j++) {
            await new Promise(resolve => setTimeout(resolve, 100));
            document.getElementById("typing-txt-ua").innerHTML += text[j];
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        document.getElementById("typing-txt-ua").innerHTML = "";
        index = (index + 1) % arrua.length;
    }
}
