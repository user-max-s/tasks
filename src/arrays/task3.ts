// write func that paste ':' between two even numbers. As param it should take a number and return string;

const isOdd = (num: number) => num % 2;

const colonOdd = (num: number): string => num.toString().split('').map((item, index, arr) => {
  const isLastItem = arr.length - 1 === index;

  const isCurrentOdd = isOdd(+item);
  const isNextOdd = isLastItem ? false : isOdd(+arr[index + 1]);
  
  const updatedItem = isCurrentOdd && isNextOdd ? `${item}:` : item;

  return updatedItem;
}).join('');


export default colonOdd;