

```javascript

let heroes = ['Thanos', 'Thor', 'Blackpanther', 'Black Panther', 'Hulk']

heroes.sort()

let numbers = [1, 5, 2, 10, 6]

numbers.sort()

numbers.sort((a, b) => {
  return b - a
})

heroes.sort((a, b) => {
  console.log(a, b)
  if(a.toUpperCase()  > b.toUpperCase()){
    return -1
  } else {
    return 1
  }
 })

 heroes.sort((a, b) => {
   console.log(`a = ${a}`, `b = ${b}`)
   console.log(heroes)
   if(a.length > b.length) {
     return -1
   } else if(a.length < b.length) {
     return 1
   } else {
     return 0
   }
 })

```