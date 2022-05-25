// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  */
// const isMatch = (s, p) => {
//   if (!p.split("*").join("")) return true;
//   if (!p.includes("*") && !p.includes("?")) return s === p;
//   const strLen = p.length;
//   let index = 0;
//   let tempStr;
//   let stillNotMatch = true;
//   const allValidIndex = getAllIndexes(p.split(""));
//   while (s.slice(index).length >= strLen) {
//     tempStr = genTempStr(s, strLen, allValidIndex, index);
//     console.log(tempStr);
//     while (p.includes("*")) {
//       const strCut = p.slice(0, p.indexOf("*"));
//       if (stillNotMatch && tempStr.includes(strCut)) stillNotMatch = false;

//       p = p.slice(p.indexOf("*") + 1);
//       tempStr;
//     }
//     if (stillNotMatch) return false;
//     if (tempStr.includes(p)) return true;
//     index += 1;
//   }
//   return false;
// };

// const getAllIndexes = (p) => {
//   const valid = [];
//   p.forEach((char, index) => (char === "?" ? valid.push(index) : ""));
//   return valid;
// };

// const genTempStr = (s, strLen, allValidIndex, index) => {
//   const str = s.slice(index, index + strLen + 1).split("");
//   allValidIndex.forEach((i) => {
//     str[i] = "?";
//   });
//   return str.join("");
// };

// console.log(isMatch("abcabczzzde", "*abc???de*"));

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = (s1, s2) => {
  let allValidOptions = "";
  s1.split("").forEach((_, i) => {
    if (i > 0) allValidOptions += scrambleString(s1, i);
  });
  console.log(allValidOptions);
  return s1.includes(s2) || allValidOptions.includes(s2);
  // const options = [];
  // let index = 1;
  // options.push(scrambleString(s1, 1));
  // console.log(scrambleString(s1, 1)[0].length, scrambleString(s1, 1));
  // console.log(allValidOptions);
  // while (options) {
  //   for (let i = 0; i < options.length; i++) {
  //     if (!options[i][2]) {
  //       allValidOptions.push(options[i][0] + options[i][1]);
  //       options.splice(i, 1);
  //     }
  //     options[i] =
  //   }
  // }
  //   for (let i = 0; i < allValidOptions.length; i++) {
  //     if (allValidOptions[i].includes(s2)) return true;
  //   }
  //   return false;
  // };

  // const scrambleString = (s1, index) => {
  //   if (index >= s1.length) return s1;
  //   const firstString = s1.substring(0, index);
  //   const secondString = s1.substring(index);

  //   if (firstString === "a" && secondString === "b") {
  //     console.log(firstString, secondString);
  //     console.log("hello");
  //   }
  //   if (!canBeScruamble(firstString) && !canBeScruamble(secondString)) {
  //     return [
  //       secondString + firstString,
  //       firstString + secondString,
  //       scrambleString(s1, index + 1),
  //     ];
  //   }
  //   if (canBeScruamble(firstString) && canBeScruamble(secondString)) {
  //     return [
  //       secondString + firstString,
  //       firstString + secondString,
  //       firstString + scrambleString(secondString, 1).join(""),
  //       secondString + scrambleString(firstString, 1).join(""),
  //       scrambleString(firstString, 1).join("") + secondString,
  //       scrambleString(secondString, 1).join("") + firstString,
  //       scrambleString(secondString, 1).join("") +
  //         scrambleString(firstString, 1).join(""),
  //       scrambleString(firstString, 1).join("") +
  //         scrambleString(secondString, 1).join(""),
  //     ];
  //   }
  //   if (!canBeScruamble(firstString)) {
  //     return [
  //       firstString + secondString,
  //       secondString + firstString,
  //       firstString + scrambleString(secondString, 1).join(""),
  //       scrambleString(secondString, 1).join("") + firstString,
  //     ];
  //   }
  //   if (!canBeScruamble(secondString)) {
  //     if (firstString === "ab" && secondString === "c") {
  //       console.log(firstString);
  //       console.log("hello");
  //     }
  //     return [
  //       firstString + secondString,
  //       secondString + firstString,
  //       secondString + scrambleString(firstString, 1).join(""),
  //       scrambleString(firstString, 1).join("") + secondString,
  //     ];
  //   }

  // return [
  //   [
  //     firstString,
  //     secondString,
  //     canBeScruamble(firstString) || canBeScruamble(secondString),
  //   ],
  //   [
  //     secondString,
  //     firstString,
  //     canBeScruamble(firstString) || canBeScruamble(secondString),
  //   ],
  // ];
};

const b = [10, 1, 2, 7, 6, 1, 5].filter((num) => num <= 8).sort();
console.log(b.find((num) => num === 1));
// const canBeScruamble = (s1) => s1.length > 1;

// console.log(scrambleString("ba", 1));

// console.log(isScramble("abc", "bac"));

// const isScramble = (s1, s2) => {
//   const allValidOptions = [];
//   const options = [];
//   let index = 1;
//   // options.push(scrambleString(s1, 1));
//   console.log(scrambleString(s1, 1, []));
//   // console.log(allValidOptions);
//   // while (options) {
//   //   for (let i = 0; i < options.length; i++) {
//   //     if (!options[i][2]) {
//   //       allValidOptions.push(options[i][0] + options[i][1]);
//   //       options.splice(i, 1);
//   //     }
//   //     options[i] =
//   //   }
//   // }
//   return allValidOptions.includes(s2);
// };

// const scrambleString = (s1, index, options) => {
//   if (index >= s1.length) return "";
//   const firstString = s1.substring(0, index);
//   const secondString = s1.substring(index);
//   if (!canBeScruamble(firstString) && !canBeScruamble(secondString)) {
//     options.push(firstString, secondString);
//     options.push(scrambleString(s1, index + 1, []));
//     // return [
//     //   secondString + firstString,
//     //   firstString + secondString,
//     //   scrambleString(s1, index + 1),
//     // ];
//   } else if (!canBeScruamble(firstString)) {
//     options.push(firstString + scrambleString(secondString, 1, []));
//     options.push(scrambleString(secondString, 1, []), firstString);
//     // return [
//     //   firstString + scrambleString(secondString, 1),
//     //   scrambleString(secondString, 1) + firstString,
//     // ];
//   } else {
//     options.push(secondString + scrambleString(firstString, 1, []));
//     options.push(scrambleString(firstString, 1, []), secondString);
//     // return [
//   }
//   return options;
//   // return [
//   //   secondString + scrambleString(firstString, 1),
//   //   scrambleString(firstString, 1) + secondString,
//   // ];
//   // return [
//   //   [
//   //     firstString,
//   //     secondString,
//   //     canBeScruamble(firstString) || canBeScruamble(secondString),
//   //   ],
//   //   [
//   //     secondString,
//   //     firstString,
//   //     canBeScruamble(firstString) || canBeScruamble(secondString),
//   //   ],
//   // ];
// };

// const canBeScruamble = (s1) => s1.length > 1;

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  const allCombination = [];
  candidates = candidates
    .filter((num) => num <= target)
    .sort()
    .reverse();
  let currentTarget;
  candidates.forEach((num, i) => {
    currentTarget = target - num;
    if (candidates.find((num) => num === currentTarget)) {
      allCombination.push([num, currentTarget]);
    }
    for (let j = 0; j < i; j++) {
      allCombination.push(findSumInArr(candidates, currentTarget, [num]));
      // allCombination[j].push(num);
    }
  });
  console.log(allCombination);
  return allCombination.filter((arr) => arrSum(arr) === target);
};

const findSumInArr = (arr, target, lastNum) => {
  arr = arr.filter((num) => num < target);
  if (!arr || arr.length === 0) return [];

  let currentTarget;
  const validCombo = arr.map((num) => {
    currentTarget = target - num;
    if (arr.find((num) => num === currentTarget)) {
      console.log(target, currentTarget, lastNum);
      return [target, currentTarget].concat(lastNum);
    }
    const a = findSumInArr(arr, currentTarget, lastNum);
    console.log(a);
    return findSumInArr(arr, currentTarget, lastNum);
  });
  return validCombo;
};

const arrSum = (arr) => arr.reduce((a, num) => a + num, 0);
// isScramble("great");

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
