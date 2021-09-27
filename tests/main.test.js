const expect = require('chai').expect;
const addNumbers = require('../src/main');

/*let expected = 10;
let result = addNumbers(4, 6);
console.log(result === expected);

let expectedNoParams = 0;
let resultNoParams = addNumbers();
console.log(resultNoParams === expectedNoParams);

let expectedStringNum = 5.5 + 9.6;
let stringNum = addNumbers("5.5", "9.6");
console.log(stringNum === expectedStringNum);

let expectedFirstParamNotNumber = "First param is not a number";
let resultFirstParamNotNum = addNumbers([], 9);
console.log(resultFirstParamNotNum === expectedFirstParamNotNumber);

let expectedSecondParamNotNumber = "Second param is not a number";
let resultSecondParamNotNum = addNumbers(10, []);
console.log(resultSecondParamNotNum === expectedSecondParamNotNumber);

let expectedStrNonNumX = 'First param contains non numbers'
let strNonNumX = addNumbers("14ba1", "1d34f");
console.log(strNonNumX===expectedStrNonNumX);

let expectedStrNonNumY = 'Second param contains non numbers'
let strNonNumY = addNumbers("14", "1d34f");
console.log(strNonNumY===expectedStrNonNumY);*/


describe('addNumbers()', ()=>{
    it('should get the sum of two numbers',()=>{
        let expected = 15;
        let actual = addNumbers(5, 10);
        expect(actual).to.equal(expected);
    });
    it('should return 0 if no params are entered',()=>{
        let expected=0;
        let actual = addNumbers();
        expect(actual).to.equal(expected);
    });
    it('should return sum of strigified numbers',()=>{
        let expected = 5.5+9.6;
        let actual = addNumbers('5.5', '9.6');
        expect(actual).to.equal(expected);
    })
    it('should let user know if first param is not a number',()=>{
        let expected = 'First param is not a number';
        let actual = addNumbers([],9);
        expect(actual).to.equal(expected);
    })

    it('should let user know if second param is not a number',()=>{
        let expected = 'Second param is not a number';
        let actual = addNumbers(100,{});
        expect(actual).to.equal(expected);
    })

    it('should let user know if first param contains non numbers',()=>{
        let expected = 'First param contains non numbers';
        let actual = addNumbers("14ba1", "1d34f");
        expect(actual).to.equal(expected);
    })
    it('should let user know if second param contains non numbers',()=>{
        let expected = 'Second param contains non numbers';
        let actual = addNumbers("14", "1d34f");
        expect(actual).to.equal(expected);
    })
});