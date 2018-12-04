```javascript

let Students = [
  {name: 'Kesete'},
  {name: 'Eyasu'},
  {name: 'Solomon'}
]

let heroes = ['Thor', 'Hulk', 'Deadpool']

//returns a new array the same length as original array
Students.map((val, indx) => {
  return val.name.toUpperCase()
})

//does not return anything but allows you to  modify in place
Students.forEach(val => {
  Students.push({name: 'Zach'})
})

```