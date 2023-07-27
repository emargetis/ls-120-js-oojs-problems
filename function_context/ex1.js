let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

/*
`Rick Sanchez` is logged to the console because the `fullName` property of the
`person` object is
accessed when the argument `person.fullName` is passed in as an argument to the
`log` method when it is called on the `console` object. The execuction context
for the access of `fullName` is `person`
*/

/*
WRONG - the answer is `NaN` because it is adding `undefined` with `undefined`.

Anywhere outside a function, the keyword `this` is bound to the global object.
If the keyword is used inside a function then its value depends on how the
function was invoked.
*/