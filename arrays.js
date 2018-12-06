var chocolateBars = ["snickers", "grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars) {
  return chocolateBars.push("foo")
}

function destructivelyAddElementToBeginningOfArray (chocolateBars) {
  var newchocolateBars = ["pocky",...chocolateBars]
  return newchocolateBars
}