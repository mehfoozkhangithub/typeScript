/* let gender: 'Male' | 'Female' | 'Trans' | 'Prefer-not-to-say' = 'Male';
 */

// enum -> is a group of named constant values;

enum gender {
  'Male',
  'Female',
  'Prefer-Not-To-Say',
}

/* enum gender {
  Male = 'Male',
  Female = 'Female',
  Prefer_Not_To_Say = 'Prefer-Not-To-Say',
} */

const gender_1: gender = gender.Female;
console.log(' gender_1:', gender);

// when we use enum while useing redux value in action-type where those value change it's remain constent

// enum is array-index-pair give the index-value.
