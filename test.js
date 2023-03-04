function checkNull(value) {
  return value == null ? "Value is null" : "Value is not null";
}
const inte = null;
const integ = [1, 2, 3];
console.log(checkNull(integ)); // "Value is null"
// console.log(checkNull("hello")); // "Value is not null"
