let count = 0;

function getName(name){
    count++;
    return name;
}

let name1 = getName('somesh')
let name2 = getName('tushar')
let name3 = getName('ajay')
let name4 = getName('amrit')

console.log(name1,name2,name3,name4)

console.log(count);

