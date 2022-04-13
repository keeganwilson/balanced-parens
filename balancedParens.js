// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
const balParens = str => {
    let strArr = str.split('')
    let parenArr = []
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i] === '(') {
            if (parenArr.includes(')')) {
                parenArr.splice(parenArr.indexOf(')'), 1)
            } else parenArr.push('(')
        } else if (strArr[i] === ')') {
            if (parenArr.includes('(')) {
                parenArr.splice(parenArr.indexOf('('), 1)
            } else parenArr.push(')')
        }
    }
    if (parenArr.length === 0) {
        return true;
    }   else return false;
}

console.log(balParens(sample1));
console.log(balParens(sample2));
console.log(balParens(sample3));
console.log(balParens(sample4));