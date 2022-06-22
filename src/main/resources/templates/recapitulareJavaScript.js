/*To execute JS code, you can simply put it in <script> tag in your HTML.
● Just like with CSS, it is considered cleaner to create separate .js files to
contain the code.
● To do that just add an attribute to script tag like so:
    <script type="text/javascript">
    console.log("Example message displayed in the console");
    </script>

  Preferred way-------------------------------------------
    ● To execute JS code, you can simply put it in <script> tag in your HTML.
    The script must be placed at the final of the body hatml tag!
● Just like with CSS, it is considered cleaner to create separate .js files to
contain the code.
● To do that just add an attribute to script tag like so:
<script type="text/javascript" src="code.js"></script>    The script must be placed at the final of the body hatml tag!
/*-------------------------------------------------------------------------------------------------------------*/
/*
There are two commands of simple outputs of your JS code - alert and console.log.
  Ex:      alert("Hello world");
           console.log(foo);
/*-------------------------------------------------------------------------------------------------------------*/
/*

=======================================================================================================================
JAVASCRIPT CA SI LIMBAJ DE PROGRAMARE
=======================================================================================================================
JavaScript Data Types
There are eight basic data types in JavaScript. They are:

String	represents textual data	'hello', "hello world!" etc
Number	an integer or a floating-point number	3, 3.234, 3e-2 etc.
BigInt	an integer with arbitrary precision	900719925124740999n , 1n etc.
Boolean	Any of two values: true or false	true and false
undefined	a data type whose variable is not initialized	let a;
null	denotes a null value	let a = null;
Symbol	data type whose instances are unique and immutable	let value = Symbol('hello');
Object	key-value pairs of collection of data	let student = { };
/*-------------------------------------------------------------------------------------------------------------*/
/*
JS features a dynamic typing. That means that all variables can be declared
without specifying their type!
● Variables are declared using keyword var.
● For example:
...............

● Due to the dynamic types, it is often hard to compare the values of your
variables.
● There are two operators for comparison:
○ == compares values,
○ === compares values and types.
/*-------------------------------------------------------------------------------------------------------------*/
/*
Most operators work the same way as they would in Java:

Operator	      Name	        Example
=	Assignment operator      	a = 7; // 7
+=	Addition   assignment	a += 5; // a = a + 5
-=	Subtraction Assignment	a -= 2; // a = a - 2
*=	Multiplication Assignment	a *= 3; // a = a * 3
/=	Division   Assignment	a /= 2; // a = a / 2
%=	Remainder   Assignment	a %= 2; // a = a % 2
**=	Exponentiation Assignment	a **= 2; // a = a**2

+	Addition	x + y
-	Subtraction	x - y
*	Multiplication	x * y
/	Division	x / y
%	Remainder	x % y
++	Increment (increments by 1)	++x or x++
--	Decrement (decrements by 1)	--x or x--
**	Exponentiation (Power)	x ** y

==	Equal to: returns true if the operands are equal	x == y
!=	Not equal to: returns true if the operands are not equal	x != y
===	Strict equal to: true if the operands are equal and of the same type	x === y
!==	Strict not equal to: true if the operands are equal but of different type or not equal at all	x !== y
>	Greater than: true if left operand is greater than the right operand	x > y
>=	Greater than or equal to: true if left operand is greater than or equal to the right operand	x >= y
<	Less than: true if the left operand is less than the right operand	x < y
<=	Less than or equal to: true if the left operand is less than or equal to the right operand
/*-------------------------------------------------------------------------------------------------------------*/
/*
Reference types: All reference types are derived from Object
    1.Object
    2.Boards
    3.Functions

The "typeof" operator allows you to check the data type.
Ex: typeof 50; //number
Ex: typeof "lorem ipsum "; //string
Ex: typeof []; //object
Ex: typeof {}; //function
The "instanceof" operator checks whether an object is an instance of another object.
Ex: [] instanceof Array; // true
Ex: [] instanceof Oject; // true
Ex: Function instanceof Object; // true
Ex: "lorem ipsum" instanceof Object; // false
/*-------------------------------------------------------------------------------------------------------------*/
/*
Variables:
    1. const - the value must be assigned during the declaration and can not be modified
    Ex:
      */
                const foo = "lorem ipsum"
/*
    2. let - the value can be assigned later after declaration.The let variable with the same name cannot be re-declared
    3. var - the value can be assigned later after declaration. The var variable with the same name can be re-declared
                Ex:
   */              var foo = 10;
                    let bar = 20;

                    var foo = 15;
                    let bar = 30; // here we get an error

/*
The scope of variables:
    1.Global variables
    2.Functional variables
    3.Block (local) variables   // let and const created in a bloc scope which is defined by pair of braces{}.
                                    For example: visible only in a loop.
/*-------------------------------------------------------------------------------------------------------------*/
/*
Hoisting (urcarea declaratiilor la inceputul documentului): is about bringing up the scope of variable declarations.
                This occurs with var variables and functions declarations
Ex:    */
    console.log(foo);
    var foo = "loram ipsum";    // console.log is going to display undefined

    console.log(foo);
    var foo = "loram ipsum";  // we get an error

// De studiat pr net hoisting-ul   ----------------------------------------------------

/*-------------------------------------------------------------------------------------------------------------*/
/*

let numar = [1,3,4]

// FOR LOOP
for(numar=0;numar<3;numar++){ console.log(i);}

// FOR LOOP
numar.forEach(function (element, index){  // elenment is the element of array and index is the index
    console.log("element with index:" + index + "has a value" + element)
})

// WHILE LOOP
while(condition){statements
    continue;
    break;

};

//DO...WHILE LOOP
do {statements
    continue;
    break;
}
while(condition);

/*-------------------------------------------------------------------------------------------------------------*/
// FUNCTIONS : are separate code blocks designed to perform specific tasks.
              //  The function should meet the same name requirements as the variable name
            // In JavaScript you can declare functions in several ways.
function myFuncton(a,b) {
    // function code
}

//ANONIMUS FUNCTION
(function(a, b) {       // With the parenthesis befor and after the function we create a ANONYMOUS FUNCTION
    return a + b;
}) (10,20);

// Assigning a function to a variable
const numeVariasbila = function (a,b){
    return a +b;
}

// ARROW FUNCTION (lambda in Java)
const numeV = (a,b) => {
    return a + b;
}
/*-------------------------------------------------------------------------------------------------------------*/

// ARRAYS    are data structures that allow storing an ordered set of elements.

const numeArray = []  // empty array
const numeArray1 = [1,2,3,4]  // array with 4 elements
const numeArray2 = ["Jan", "Piotr", "Jan", "Daniel", "Gigi"]  // array with 4 elements of type string
const numeArray3 = ["Jan", 2, 4, "Daniel", functieMetoda]  // array with 5 different type of elements
/*-------------------------------------------------------------------------------------------------------------*/
// Arrays methods
/*
// push:       push/add a new element at the end of the array
const numeArray22 = [1,2,3,4];
numeArray22.push("marcel")
console.log(numeArray22);   // rezultat  numeArray22 = [1,2,3,4, "marcel"];


// pop:        delete the last element and then return it
const numeArray22 = [1,2,3,4];
let foo = numeArray22.pop();
console.log(numeArray22);   // rezultat  numeArray22 = [1,2,3,4];
console.log(foo);   // rezultat  foo = 4;


// shift:        delete the first element and then return it
const numeArray22 = [1,2,3,4];
let foo = numeArray22.shift();
console.log(numeArray22);   // rezultat  numeArray22 (3) [1,2,3,4];
console.log(foo);   // rezultat  foo = 1;

// unshift:        add a new element at the beginning of the array

// join:        combine the array elements  into one text
const numeArray22 = [1,2,3,4];
let foo = numeArray22.join();
console.log(foo);   // rezultat  1,2,3,4 (sub forma de text/string)


// reverse:        reversal of the array elements in array
const numeArray22 = [1,2,3,4];
numeArray22.reverse();
console.log(numeArray22);   // rezultat  [4,3,2,1]


// concat:        delete the first element and then return it
const numeArray22 = [1,2,3,4];
const numeArray23 = [1,2,3,4];
 let foo = numeArray22.concat(numeArray23);
console.log(foo);   // rezultat  Array(8) [1,2,3,4,1,2,3,4];


// forEach:        allows you to perform a specific function on each element of the array
const numeArray22 = [1,2,3,4];
 numeArray23.forEach( e => {console.log(e)}); // rezultat  1,2,3,4

const newArray = [1,2,3,"maecel"];
newArray.forEach(element => {console.log(element + 5)}); // rezultat  6,7,8,marcel5


newArray.forEach(function (element, index){    // variantA CLASICA fara arrow function
    console.log(element + 5)
    console.log("element:", element, "index:", index)
}); //rezultat
// element: 2 index: 1
// 9 8
// 10 element: 3 index: 2
// 9 maecel5
// element: maecel index: 3


newArray.forEach((element, index) => {     // variantA mai noua cu arrow function
    console.log(element + 5)
    console.log("element:", element, "index:", index)
}); // rezultat
        // element: 2 index: 1
        // 9 8
        // 10 element: 3 index: 2
        // 9 maecel5
        // element: maecel index: 3


// map:        creates a NEW ARRAY containing the results of the given function call for each element of the calling array
const numeArray22 = [1,2,3,4];
const numeArray23 = numeArray22.map(function (e){
    returne * e;
});
let foo = numeArray22.concat(numeArray23);
console.log(foo);   // rezultat  Array(8) [1,2,3,4,1,2,3,4];

// includes:        checks whether the arry contains the element

const arr = [1,2,3,4]
let foo = arr.includes(3);
console.log(foo);  // rezultat true


// filter:        creates a NEW ARRAY of elements that meet the test specified in the function
const numeArray22 = [1,2,3,4];
const numeArray23 = numeArray22.filter(function (e){
    returne e % 2 == 0;
});
console.log(numeArray23);    // rezultat  numeArray23 (2) [2,4]


// indexOf:       return the first smallest index in which the given value is located. Returns -1 if the element is not in array
const numeArray22 = [1,2,3,4];
const numeArray23 = numeArray22.indexOf(2);
console.log(numeArray23);    // rezultat  1


// slice:       creates a copy of a part of the array and returns it as a new array.
const numeArray22 = [1,2,3,4,5 ,6 ,7];
const numeArray23 = numeArray22.slice(2, 2);
console.log(numeArray23);    // rezultat  numeArray23(2) [3,4]

// splice:       modifies the array by removing items and adding new ones. If we don't give new elements, splice will remove
//               only old ones. As arguments ist accepts the start, the number of items removed and the items added
const numeArray22 = [1,2,3,4,5 ,6 ,7];
const numeArray23 = numeArray22.slice(2, 2, 9);
console.log(numeArray23);    // rezultat  numeArray23 (5) [1,2,9,5,6,7]

// length:        returns the number of elements in the array.
const numeArray22 = [1,2,3,4,5 ,6 ,7];
console.log(numeArray22.length);    // rezultat  6
/*-------------------------------------------------------------------------------------------------------------*/
/*
JAVA SCRIPT OBJECTS
--------------------------
JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property
is an association between a name (or key) and a value. A property's value can be a function, in which case the property
is known as a method.
In JavaScript, an object is a standalone entity, with properties and type.
A JavaScript object has properties associated with it. A property of an object can be explained as a variable
that is attached to the object.

CREATING OBJECTS
-----------------------
const myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
Objects and properties
A JavaScript object has properties associated with it.
A property of an object can be explained as a variable that is attached to the object.
Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects.
The properties of an object define the characteristics of the object. You access the properties of an object with a simple dot-notation:

objectName.propertyName
Copy to Clipboard
Like all JavaScript variables, both the object name (which could be a normal variable) and property name are case sensitive. You can define a property by assigning it a value. For example, let's create an object named myCar and give it properties named make, model, and year as follows:

const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
Copy to Clipboard
The above example could also be written using an object initializer, which is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}):

const myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};

CONSTRUCTOR FUNCTION------------

function Person(firstName, lastName){
this.firstName = firstName;
this.lastName = lastName;
}
cons foo = new Person("John", "Doe")

CLASS KEYWORD-----------

class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// expected output: "Polygon"

===============================================================================================================================
JAVASCRIPT CA SI LIMBAJ DE Interactionare intre Paginile Html si Css

===============================================================================================================================
Document Object Model (DOM)----------
The Document Object Model (DOM) is a programming interface for web documents.
It represents the page so that programs can change the document structure, style, and content.
The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
The DOM is a W3C (World Wide Web Consortium) standard. The DOM defines a standard for accessing documents:
 "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and
  scripts to dynamically access and update the content, structure, and style of a document."
A web page is a document that can be either displayed in the browser window or as the HTML source.
In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated.
As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.
---------------------------------------------------------
                  DOM MODEL

                            document
                              html
                              body
                 p
          class    lorem              ul
                                  li li li li

------------------------------------------------------------

<p class="className">NumeValoare</p>
  <ul>
        <li>Coloana 1</li>
        <li>Coloana 2</li>
        <li>Coloana 3</li>
    </ul>

-------------------------------------------------------------

The "document" object is the main object in the DOM model. Ir represents the entire website in the browser.
If you want to access any HTML element, you must always start referring trough the "document" object.
------------------------------------------------------------------------------------------------------------

SELECTING THE ELEMENTS - Accessing HTML
----------------------------------------
Select an element by ID using JavaScript-----------
// grab element from DOM
const numeVar = document.getElementById('id-name');
// change background color to red
numeVar.style.backgroundColor = 'red';

Select an element by class using JavaScript-----------
const numeVar = document.getElementByClassName('class-name');

Select an element by class using JavaScript-----------
const numeVar = document.getElementByTagName('li');

CSS selector---------------------------
let element = document.querySelector(".class-name");
let elements = document.querySelectorAll(".class-name");


DOM MANIPULATION------------------------- SCRIEREA PAGINII HTML CU AJUTORUL JAVAScript
--------------------------
// createElement(typeOfElement) -> creates an Html element from Js

let elements = document.createElement("div");

// appendChild(numeElement) - adds an element as a child of parent

let parent = document.getElementById("id-name");
let child = document.createElement("div");

parent.appendChild(child);

// innerHTML - is used to fetch and set the HTML code in a given element

document.getElementById('id-name').innerHTML = "<p>Set the HTML code in the element</p>"
let text = document.getElementById('id-name').innerHTML; // returns the html code of the children in the element


// innerText- is used to fetch and set the text code in a given element

document.getElementById('id-name').innerText = "<p>Set the text in the element</p>"
let text = document.getElementById('id-name').innerText; // returns the children's text in the element


classList API   (API = modul in care poti sa lucrezi cu clasele = o adresa la o metoda ca are un verb de actiune (get, put, post, delete))
----------------
classList allows you to work with classes of HTML elements,
by using on the element it returns the classes it has, in an array-like object

document.getElementById("id-name").classList;


// contains - checks whether the element has a particular class given as an argument

document.getElementById("id-name").classList.contains("class-name");

// add

document.getElementById("id-name").classList.add("new-class-name");




 */
/*-------------------------------------------------------------------------------------------------------------

CODUL URMATOR IA INFO DIN BACKEND SI IL EXPUNE PE FRONTEND


<ul id="gina-virgina">              // cod scris in pagina html
    <li>scrias in html</li>
</ul>




let getPanarame = function (){              // se face call la metoda panarame din backend si returneaza info din virgine
    let panarameList = http.get('/api/panarame')
}


const virgine =[                        // informatie ce ar trebui sa vina din backEnd
    {nume: 'Gina-', prenume: 'Alina' },
    {nume: 'Veta-', prenume: 'Georgeta' }
]

let caremaieVirgina = document.getElementById("gina-virgina")



virgine.forEach(element => {
    var newChildVariabilaNoua = document.createElement("li");
    newChildVariabilaNoua.innerHTML = element.nume + element.prenume;
    caremaieVirgina.appendChild(newChildVariabilaNoua)
    caremaieVirgina.classList.add('gina-virgina')  // ii adaugam style ul din clasei gina-virgina din css
})
// de sters, este doar de demo, pana aici


/*-------------------------------------------------------------------------------------------------------------
DE STUDIAT LIBRARIILE:
            - JQuery

/*-------------------------------------------------------------------------------------------------------------*/


/*-------------------------------------------------------------------------------------------------------------*/
