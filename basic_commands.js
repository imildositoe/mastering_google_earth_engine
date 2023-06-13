//// INTRODUCTION TO JAVASCRIPT ////
//// INTRODUÇÃO AO JAVASCRIPT ////

// Line comments start with two forward slashes. Like this line.
// Os comentários de linha começam com duas barras. Como esta linha.

/* Multi line comments start with a forward slash and a star,
and end with a star and a forward slash. */
/* Comentários de várias linhas começam com uma barra e uma estrela,
e termine com uma estrela e uma barra. */

// Variables are used to store objects, and are defined using the keyword var.
// As variáveis ​​são usadas para armazenar objetos e são definidas usando a palavra-chave var.
var the_answer = 42;

// String objects start and end with a single quote.
// Os objetos String começam e terminam com aspas simples.
var my_variable = 'I am a string';

// String objects can also start and end with double quotes.
// But don't mix and match them.
// Objetos string também podem começar e terminar com aspas duplas.
// Mas não os misture e combine.
var my_other_variable = "I am also a string";

// Statements should end in a semi-colon, or the editor complains.
// As declarações devem terminar em ponto e vírgula, ou o editor reclama.
var test = 'I feel incomplete...'

// Parentheses are used to pass parameters to functions.
// Parênteses são usados para passar parâmetros para funções.
print('This string will print in the Console tab.');

// Square brackets are used for selecting items within a list.  
// The zero index refers to the first item in the list.
// Colchetes são usados ​​para selecionar itens em uma lista.
// O índice zero refere-se ao primeiro item da lista.
var my_list = ['eggplant', 'apple', 'wheat'];

print(my_list[0]);

for (var i = 0; i < my_list.length; i++) {
  console.log(my_list[i])
}

my_list.forEach((item) => {
  console.log(item)
})

// Curly brackets (or braces) can be used to define dictionaries
// (key:value pairs).
// Colchetes (ou chaves) podem ser usados ​​para definir dicionários
// (pares chave:valor).
//var my_dict = {'food':'bread', 'color':'red', 'number': 42};

// Square brackets can be used to access dictionary items by key.
// Os colchetes podem ser usados ​​para acessar os itens do dicionário por chave.
//print(my_dict['color']);

// Or you can use the dot notation to get the same result.
// Ou você pode usar a notação de ponto para obter o mesmo resultado.
//print(my_dict.color);

// Functions can be defined as a way to reuse code and make it easier to read.
// As funções podem ser definidas como uma forma de reutilizar o código e torná-lo mais fácil de ler.
//var my_hello_function = function(string) {
//  return 'Hello ' + string + '!';
//};
//print(my_hello_function('world'));
