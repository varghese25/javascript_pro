var dob = new Date("1987-08-24");
var today = new Date();

var age = today.getFullYear() - dob.getFullYear();

if (
  today.getMonth() < dob.getMonth() ||
  (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
) {
  age--;
}

console.log(age);
