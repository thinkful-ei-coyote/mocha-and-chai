function addNumbers(x = 0, y = 0) {
  if (typeof x === "string") {
    let xArr = x.replace('.','').split('');
    let isAllXNum = xArr.every((char) => !isNaN(Number(char)));
    if(!isAllXNum) return 'First param contains non numbers';  
  }
  if (typeof y === "string") {
    let yArr = y.replace('.','').split('');
    let isAllYNum = yArr.every((char) => !isNaN(Number(char)));
    if(!isAllYNum) return 'Second param contains non numbers';
    
  }

  x = parseFloat(x);
  y = parseFloat(y);

  if (isNaN(x)) {
    return "First param is not a number";
  }
  if (isNaN(y)) {
    return "Second param is not a number";
  }
  return x + y;
}

module.exports = addNumbers;