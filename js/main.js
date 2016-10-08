var first_name = "Alfonso";
var last_name = "Wilches";

var full_name = first_name+ " "+last_name;
var name = "";

console.log(full_name);
name = name.concat(first_name);

console.log(name);
name = name.concat(" ",last_name);
console.log(name);
name = name.concat(null);
console.log(name);


var lorem = "Lorem ipsum dolor sit amet,\n consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
console.log(lorem.length);
console.log(lorem);



var comilla = '\'';
console.log(comilla);





console.log(lorem);


String.jiberish = function (str){
  if(!str){
    str = this;
  }
  var i = 0;
  for (i = 0; i<str.length; i++) {
    if(str[i] === "a" | str[i] === "e" | str[i] === "i" | str[i] === "o" | str[i] === "u"){
      str = str.replace(str[i], "a");
        }
      }
      return str;
};

String.prototype.jiberish = String.jiberish;
var amiguita = String.jiberish("Tengo una amiguita que me hace muchas cosquillitas");
console.log(amiguita);

console.log("la cucaracha la cucaracha ya no puede caminar".jiberish());

var ar1 = [1, 2, 3, 4, 5];
var ar2 = [6, 7, 8, 9, 0];

var ar3 = ar1.concat(ar2);

console.log(ar3);

ar3.forEach(function(index, element, array){
  console.log("index " + index + " element " + element);
});
