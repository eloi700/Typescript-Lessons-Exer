//import calculateTax function into index-6.ts module
//Adding @ts-nocheck will tell the TS Compiler NOT to check below. Note: /** */ is a JSDoc Comment.

//Describing Type using JSDoc
// /**
//  * Calculate income tax
//  * @param {number} income - Net Salary after expenses.
//  * @returns {number}
//  */

//// @ts-nocheck

// export function calculateTax(income){
//     return income * 0.3;
// }

// by default there's is not type Checking

// Another way of providing type info. by Using Declaration or Type Definition File. It is useful if you dont want to modify JS Code and add these comments. See notes typed in tax.d.ts