

//  var btnLen = document.getElementById("btn-len");
//     btnLen.addEventListener = ('click', function () {})









let result = document.getElementById('output');
let string = "";
let str = document.getElementById('input-string').value;


function incert() {
    let result = document.getElementById('output');
    let string = "";
    let str = document.getElementById('input-string').value;
    string=str
    result.value = `${str}`;
}


function len() {
    let result = document.getElementById('output');
    let string = "";
    let str = document.getElementById('input-string').value;
    string = str.length;
    result.value = `${string}`
}
function replaceString() {
    let str = document.getElementById('input-string').value;
    let result = document.getElementById('output');
    let getValue = prompt('Enter the string to replace:')
    let replaceValue = prompt('Enter the string to replace:')
    result.value = str.replace(getValue, replaceValue);
}
function indexOfString() {
    let index = prompt('Enter the letter to find index')
    let str = document.getElementById('input-string').value;
    let result = document.getElementById('output');

    result.value = str.indexOf(index);
}
function repeatString() {
    let get = prompt('How many times to repeat:')
    let str = document.getElementById('input-string').value;
    let result = document.getElementById('output');
    str.split(' ,')
    result.value = `${str.repeat(get)}`
}
function conCatString() {

    let add = prompt('Enter Letters to Add:')
    let str = document.getElementById('input-string').value;
    let result = document.getElementById('output');
    result.value = `"${str.concat(add)}"`
}
function splitString(){
    // let sp = prompt('How many times to split:')
    let str = document.getElementById('input-string').value;
    let result = document.getElementById('output');
    let string = " , ";
    
    result.value = `"${str.split(string)},${str}"`
}
function trimString(){
    let str = document.getElementById('input-string').value;
    let result = document.getElementById('output');
    result.value=`${str.trim()}`
}
function sliceString(){
    let range = prompt('Enter the range to slice:')
    let str = document.getElementById('input-string').value;
    let result = document.getElementById('output');
    result.value=`${str.slice(range)}`
}
function upperString(){
    let str = document.getElementById('input-string').value;
    let result = document.getElementById('output');
    result.value=`${str.toUpperCase()}`
}
function lowerString(){
    let str = document.getElementById('input-string').value;
    let result = document.getElementById('output');
    result.value=`${str.toLowerCase()}`

}

