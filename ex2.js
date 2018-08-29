/*
Write a program that returns a list that contains only the elements that
are common between the lists (without duplicates).

Take two lists, say for example these two:

[1, 1, 2, 3, 5, 8]
[3, 4, 5, 6, 7, 8, 9]

Should returns :
[3, 5]
*/

const l1 = [1, 1, 2, 3, 5, 8];
const l2 = [3, 4, 5, 6, 7, 8, 9];

const intersect = (a, b) => {
  a = a.sort();
  b = b.sort();
  var i=0, j=0, out=[];
  while (i<a.length && j<b.length) {
    if (a[i] < b[j]){
      i++;
    }else if (a[i] > b[j]){
      j++;
    } else if (a[i]==b[j] && a[i] != out[-1]){
      // dont be equal to the last item in the intersection array
      // which is the largest intersecting item and is unique already
      out.push(a[i]);
      i++;
      j++;
    }
  }
  return out
}


console.log(intersect(l1, l2));    //[3, 5, 8]
