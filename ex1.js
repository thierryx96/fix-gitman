// Write a function to manipulate the provided string

// 1. Padded Number
// Pad given single numbers in array to look like "10", "05", "16", "02"
const nums = ['2', '4', '25', '10', '3']
const paddedNum = text => {
  for (i = 0; i < text.length; i++) {
    if (text[i].length === 02) {
      text[i] = '0' + text[i]
    }
  }
  return text
}
console.log(paddedNum(nums))
