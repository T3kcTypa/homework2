function oddNumbers(array) {
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if(item % 2) 
        console.log(item);
    }
    for (let e = 0; e < array.length; e++)
  {
    if ((array[e] % 2) === 0)
    {
       console.log(array[e]);
    }
  }
  }
   
  let numbers = [1, 2, 3, 4, "stop", 5, 6, 7, 8, 9, 10, "kyky"];
  oddNumbers(numbers);
 