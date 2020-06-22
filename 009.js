function removeDuplicates(city) {
  var x,
      len=city.length,
      out=[],
      obj={};
 
  for (x=0; x<len; x++) {
    obj[city[x]]=0;
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
}
var Mycity = ["Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"];
              
result = removeDuplicates(Mycity);
console.log("City :" + Mycity);

console.log("New City :" + result);
