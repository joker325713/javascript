function createPhoneNumber(numbers){
  let phone = numbers;
  let result = (`${(phone.slice(0, -7))} ${phone.slice(3, -4)}-${phone.slice(6, )}`);
  console.log(result.join(''));
  
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);