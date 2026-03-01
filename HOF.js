
 const result = [1,2,3,4].map(num => num * 2).filter(num => num > 4).reduce((acc, curr) => acc + curr, 0);
 console.log(result)
