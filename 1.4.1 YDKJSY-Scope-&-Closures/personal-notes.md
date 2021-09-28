# You Don't Know JavaScript Yet - Scope & Closures by Kyle Simpson

## Kinds of emptiness
---
* undefined
* undeclared
* uninitialized (TDZ, temporal dead zone, ES6)

## Double and triple equals
---
You should prefer double equals in all possible cases (when you know the types).
If types are the same, `==` is identical to `===`
If you dont know the types, the most obvious signal is `===`.

## Scope
---
_Global, functions and blocks_

Scope is determined at compile time, "lexical scope".

If we cannot find a variable that is referenced within the scope, we go up one level.

_`let and const` keywords, are block scoped declarators._

````JavaScript
// outer/global scope: RED
var students = [
    { id:14, name:"Kyle" },
    { id:73, name:"Suzy" },
    { id:112, name:"Frank" },
    { id:6, name:"Sarah" }
];

function getStudentName(studentID) {
    // function scope: BLUE
    for (let student of students) {
        // loop scope: GREEN 
        if (student.id == studentID) {
            return student.name;
        }
    }
}
var nextStudent = getStudentName(73);
console.log(nextStudent); // Suzy

````
### **First pass:** compilation
Compiler & scope manager

### **Second pass:** execution

_Always declare the variables that you want to use in whatever scope you need them, but don't auto create them like this: (auto creates global variables)_

````JavaScript
var tecaher = 'Kyle';

function otherClass() {
     teacher = 'Susy';
     topic = 'React';
    console.log('Welcome');
}
````
A DOM element with an `id` attribute automatically creates a global variable that references it.

Different JS environments handle the scopes of your programs, especially the global scope, differently.

## Nested Scope
---
In the previous snippet, the scope for otherClass(..) is nested inside the global scope.

The `block scope of the for loops` are also nested inside the functions scope.

The connections between scopes that are nested within other scopes is called the `scope chain`.

_TDZ: Temporal Dead Zone_

**TypeError:** when you found the variable and the value is not legal to do whatever you're trying to do with it.

**ReferenceError:** It couldn't find that variable

##  Function expression & function declaration
---

````JavaScript
function teacher() {} // f.declaration

var myTeacher = function anotherTeacher() { // f.expression
     teacher = 'Susy';
     topic = 'React';
    console.log('Welcome');
}
````

_You should prefer the named function expression over the anonymous function expression._

### The principle of least exposure or privilege:
## **_You should default to keeping everything private, and only exposing the minimal necessary._**


## Closure
---
Is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope.

Is a preservation of the linkage to a variable, not the capturing of the value.

````JavaScript
var someoneSpeak = findSomeone();
someoneSpeak();
--> 'Why hello there, Prof Plum!';

function findSomeone() {
  function speak() {
    console.log(who);
  };

  const who = 'Why hello there, Prof Plum!';
  return speak;
}
````

_It worked because is gonna look first in its own context ( speak() ) and then it will look in the parent context._

## Shadowing
---
Each new scope offers a clean slate, a space to hold its own set of variables. `When a variable name is repeated at different levels of the scope chain, shadowing occurs`, which prevents access to the outer variable from that point inward.

### Function Declaration
> function myFunction() {}

### Named Function Expression
> var myFunction = function myFunction2 () {}

### Anonymous Function Expression
> var myFunction = function() {}

> var myFunction2 = () => {}

_Always use **var** for globals. Reserve **let** and **const** for blockscopes._

## Target & Source
---
### **Target**

If there is a value that is being assigned to it, it’s atarget. If not,then the variable is a source.

A function declaration is a special case of a target reference:
````JavaScript
function getStudentName(studentID) {}

// asigments operations in the code, are targets
for(letstudentofstudents) {}

getStudentName(73);

````

### **Source**

````JavaScript
for (let student of students)
//     __target__  __source__  

if (student.id == studentID) // sources

````

### _A JS program may or may not:_

* Declare a global variable in the top-level scope with var or function declarations—or let, const, and class.

* Also add global variables declarations as properties of the global scope object if var or function are used for the declaration.

* Refer to the global scope object (for adding or retrieving global variables, as properties) with window, self, or global.


## Hoisting
---
The term most commonly used for a variable being visible from the beginning of its enclosing scope, even though its declaration may appear further down in the scope, is called hoisting.

The hoisting (metaphor) proposes that JS pre-processes the original program and re-arranges it a bit, so that all the declarations have been moved to the top of their respective scopes, before execution.

The hoisting story suggests that program is re-arranged by the JS engine to look like this:

````JavaScript
// original code
studentName = "Suzy";
greeting(); // Hello Suzy!

function greeting() {
    console.log(`Hello${studentName}!`);
}

var studentName;

// JS engine
functiongreeting() {
    console.log(`Hello${studentName}!`);
}

var studentName;
studentName = "Suzy";

greeting(); // Hello Suzy!
````
## TDZ Errors
---
Always put your let and const declarations at the top of any scope. Shrink the TDZ window to zero (or nearzero) length, and then it’ll be moot.


**_Declare variables in as small and deeply nested of scopes as possible, rather than placing everything in the global (or even outer function) scope_**

## More about scope...
---
 Hiding `var or function` declarations in scopes, that can easily be done by wrapping a function scope around a declaration:

 ````JavaScript
var cache={};

function factorial(x) {
    if (x<2) return 1;
    if (!(x in cache)) {
        cache[x] = x*factorial(x-1);
    }
    return cache[x];
}
        
factorial(6);// 720
cache; 
// {
    //"2": 2,
    //"3": 6,
    //"4": 24,
    //"5": 120,
    //"6": 720
// }
factorial(7); // 5040


 ````
 Define another middle scope (between the outer/global scope and the inside of factorial(..)) for cache to be located:

````JavaScript
// outer/global scope

function hideTheCache() {
    // "middle scope", where we hide `cache`
    var cache = {};
    return factorial;
    // **********************
    function factorial(x) {
        // inner scope
        if (x<2) return 1;
        if (!(x in cache)) {
            cache[x] = x*factorial(x-1);
        } 
        return cache[x];
    }
}
var factorial = hideTheCache(); 
factorial(6); // 720
factorial(7); // 5040

````

## **_In general, any { .. } curly-brace pair which is a statement will act as a block, but not necessarily as a scope._** 
A block only becomes a scope if necessary, to contain its block-scoped declarations (i.e.,let or const).

Not all{ .. }curly-brace pairs create blocks (and thus areeligible to become scopes):

* Object literals use { .. } curly-brace pairs to delimit their key-value lists, but such object values are not scopes.
* class uses { .. } curly-braces around its body definition, but this is not a block or scope.
* A function uses { .. } around its body, but this is not technically a block—it’s a single statement for the function body. It is, however, a (function) scope.
* The { .. } curly-brace pair on a switch statement (around the set of case clauses) does not define a block/scope.


Another example with an explicit block scope:
````JavaScript

function getNextMonthStart(dateStr) {
    var nextMonth, year;
    {
        let curMonth;
        [ , year, curMonth ] = dateStr.match(
            /(\d{4})-(\d{2})-\d{2}/
            ) || [];
            
        nextMonth = (Number(curMonth)%12)+1;
     }
            
     if (nextMonth == 1) {
        year++;
     }
    return`${year}-${String(nextMonth).padStart(2,"0")}-01`;
}

getNextMonthStart("2019-12-25"); // 2020-01-01
````
_Kyle's Opinion: If a declaration belongs in a block scope, use `let`. If it belongs in the function scope, use `var`._

_`var and parameters` are function-scoped, and `let/const` signal block-scoped declarations._


## More about closure...
---
Closure is a behavior of functions and only functions. If you aren’t dealing with a function, closure does not apply.

````JavaScript
// outer/global scope: RED(1)
function lookupStudent(studentID) {
    // function scope: BLUE(2)
    var students = [
        { id:14, name:"Kyle"},
        { id:73, name:"Suzy"},
        { id:112, name:"Frank"},
        { id:6, name:"Sarah"}];
        return function greetStudent(greeting) {
            // function scope: GREEN(3
            var student = students.find(
                student => student.id == studentID
            );
            
            return`${greeting}, ${student.name}!`;
        };
}
        
var chosenStudents = [
    lookupStudent(6),
    lookupStudent(112)
];

// accessing the function's name:
chosenStudents[0].name;
// greetStudent
chosenStudents[0]("Hello");
// Hello, Sarah!
chosenStudents[1]("Howdy");
// Howdy, Frank!

````
References from the inner function to the variable in an outer scope is called a closure. In academic terms, each instance of greetStudent(..) closes over the outer variables students and studentID.

_Closure is observed when a function uses variable(s) from outer scope(s) even while runningin a scope where those variable(s) wouldn’t be accessible._

The key parts of this definition are:

* Must be a function involved
* Must reference at least one variable from an outer scope
* Must be invoked in a different branch of the scope chain from the variable(s)



## Modules
---
A module pattern requires the concept of encapsulation.

Is a collection of related data and functions, characterized by a division between hidden (**private**) details and accessible (**public**) details.

_Javascript is a delegation/prototype system, not a class system._


_The code must first be fully parsed before any execution occurs._

````JavaScript

var Student = (function defineStudent() {
    var records = [
        { id:14, name:"Kyle", grade:86},
        { id:73, name:"Suzy", grade:87},
        { id:112, name:"Frank", grade:75},
        { id:6, name:"Sarah", grade:91}
    ];
        
    var publicAPI = {
        getName
    };

    return publicAPI;
        
    // ************************
    function getName(studentID) {
        var student = records.find(
            student => student.id==studentID
        );
        return student.name;
    }
})();

Student.getName(73);// Suzy
````