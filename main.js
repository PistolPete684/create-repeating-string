// function repeatStr (n, s) {
//   //steup empty string
//   let newString = "";
      // iterate through instances of n using a for loop
//   for (let i = 0; i < n; i++) {
        // Add the string s to the empty string for each instance
//     newString += s;
//   }
    // return the new string with all of the repeating strings
//   return newString;
// }

// converted to arrow format
const repeatStr = (n, s) => {
  let newString = "";
  for (let i = 0; i < n; i++) {
    newString += s;
  }
  return newString
  };