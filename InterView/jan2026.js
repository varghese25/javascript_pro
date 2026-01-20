const user1 = "Alex";
const user2 = user1;
user2.name = "Sam";
console.log(user2);
console.log(user2.name);
// Output: undefined
// Explanation:
// user1 is a string primitive.
// user2 is assigned the value of user1, which is also a string primitive.
// Attempting to set a property 'name' on a string primitive does not work, as primitives cannot have properties.
// Therefore, user2.name is undefined.
