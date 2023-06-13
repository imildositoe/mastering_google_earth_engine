// Create a variable called my_age and assign your age to it.
var my_age = 24;


// Create a string called my_name and assign your name to it.
var my_name = 'Imildo Sitoe';


// Print your age.
console.log('The age of ' + my_name + ' is ' + my_age)


// Create a list called my_dishes with three of your favorite dishes.
// Print the second element of the list.
var my_dishes = ['Frango', 'Batata', 'Couve'];

for (var i = 0; i < my_dishes.length; i++) {
  if (i == 1) {
    console.log(my_dishes[i]);
  }
}


// Create a dictionary called my_info (key:value pairs) with your country, 
// city and year of birth.
var my_info = {country: 'Mozambique', city: 'Maputo', year_of_bith: 1998};


// Print your city of birth.
console.log()
for (var i in my_info) {
  if (i == 'city'){
    console.log(my_info[i])
  }
}


// Write a function called my_hello_function that returns a meaningful 
// description of yourself using some of the variables defined above.
// Print the function output in the console.
(function my_hello_function() {
  var description = 'My name is ' + my_name + ' and I am ' + my_age + ' years old.\nMy favourite dish is ' + my_dishes[1] + ' and I am a ' + my_info['country'] + ', living in ' + my_info['city'];
  console.log(description);
})();