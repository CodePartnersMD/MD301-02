```javascript

let heroes = ['Thanos', 'Thor', 'Hulk', 'Deadpool']

let slicedHeroes = heroes.slice(0, 2)

//replace Hulk and Deadpool with Black Panther
let splicedHeroes = heroes.splice(2, 2, 'Black Panther')

//inject Black Panther without removing elements
let injectBlackPanther = heroes.splice(2, 0, 'Black Panther', 'Wonderwoman')

let str = 'I love Marvel, DC is awful'

//return an array that contains every word in the string as a separate element
let splitStr = str.split(' ')

//turn an array into a string
let joinedStr = splitStr.join(' ')

```

