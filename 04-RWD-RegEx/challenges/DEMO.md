```javascript

let str = 'We are learning Regex and it is awesome, or not'

let strNum = 'This is the4 number10'

let findNum = /[r]\d/g

findNum.test(strNum)

strNum.match(findNum)

let regex = /[aeiou]/g

let newRegex = /^(we)/i

let findWe = /(we)\s/ig

let findLearning = /(learning)/ig

str.match(findLearning)

findLearning.test(str)

str.match(findWe)

newRegex.test(str)


regex.test(str)

str.match(regex)  



```
