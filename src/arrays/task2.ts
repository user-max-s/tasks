// write func that convert array like this => ['first', 'second', 'third] to string like this => 'first, second, third'

const convertArrToString = (arr: any[]): string => arr.join(', ');

export default convertArrToString;