```javascript

const students = ['Kesete', 'Hannah', 'Simon']

for(let i = 0; i < students.length; i++) {
  console.log(students[i])
}

//same thing as below
students.forEach((student) => {
  console.log(student)
})

students.forEach(student => console.log(student))

let newStudents = []
const pushFunc = (student, indx) => {
  if(student === 'Kesete') {
    students.pop()
  } else {
    newStudents.push(student.toUpperCase())
  }
}

students.forEach(pushFunc)

console.log(newStudents)

```