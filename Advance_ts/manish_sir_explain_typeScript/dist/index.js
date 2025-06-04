/* let gender: 'Male' | 'Female' | 'Trans' | 'Prefer-not-to-say' = 'Male';
 */
// enum -> is a group of named constant values;
var gender;
(function (gender) {
    gender[gender["Male"] = 0] = "Male";
    gender[gender["Female"] = 1] = "Female";
    gender[gender["Prefer-Not-To-Say"] = 2] = "Prefer-Not-To-Say";
})(gender || (gender = {}));
/* enum gender {
  Male = 'Male',
  Female = 'Female',
  Prefer_Not_To_Say = 'Prefer-Not-To-Say',
} */
const gender_1 = gender.Female;
console.log(' gender_1:', gender);
// when we use enum while useing redux value in action-type where those value change it's remain constent
// enum is array-index-pair give the index-value.
