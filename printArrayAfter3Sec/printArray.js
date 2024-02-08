const array = [1, 2, 3, 4, 5];
let index = 0;

const checkInterval = setInterval(() => {
  if (index < array.length) {
    console.log(array[index]);
    index++;
  } else {
    clearInterval(checkInterval); 
  }
}, 3000);