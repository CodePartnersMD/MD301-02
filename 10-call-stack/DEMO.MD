```javascript

function funcOne (param) => {
  // do stuff
  superagent(url)
    .then(result => {
      funcThree(result)
    })
    .then(moreResults => {
      funcTwo(moreResults)
    })

}

function funcThree (param) => {
  //do stuff with data
}
function funcTwo (param) => {
  // do more stuff
}

funcOne()


```