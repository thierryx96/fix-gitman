// 1) Camel-to-Title
// Convert a given sentence from camelCase to Title Case
const camelCase = "the simplestThings in LIFE are alwaysThe best"
const titleCase = text => {
  var out = "", prev = 0, curr, temp;
  for (var i=0; i < text.length; i++){
    // look at current and previous characters for decisions
    curr = text.charCodeAt(i);
    temp = text[i].toLowerCase();
    if (i == 0 || prev == 32){
      // if beginning or previous character was space
      temp = text[i].toUpperCase();
    }
    if (curr > 64 && curr < 91 && prev > 96 && prev < 123) {
        // add a space and revert to uppercase if prev was lowercase
        temp = " " + temp.toUpperCase();
    }
    out += temp
    // store prev char code here
    prev = text.charCodeAt(i);
  }
  return out;
}

console.log(titleCase(camelCase))

// 2) Title-to-Camel
// Convert the Title Case back to camelCase
const newTitle = "These Words Should Go In Pairs"
const newCamel = text => {
  // We know/assume that because its title case the format will always
  // have the first letter capitalised so we split them by this property
  var out = "";
  var temp = text.split(" ")
  for (var i=0; i<temp.length; i++){
    if (i%2==1){
      // convert first character to lowercase.
      out += temp[i-1][0].toLowerCase() +
          temp[i-1].slice(1,temp[i-1].length) + temp[i];
    }
    if (i%2==0){
      // if no more items left to add then we add the last item.
      if (i+1 == temp.length) { out += " " + temp[i] }
      else { out += " "; }
    }
  }
  return out;
}

console.log(newCamel(newTitle))
