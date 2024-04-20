

[CoddyTech](https://coddy.tech/)

# Why JavaScript?

Today, programming has grown in to one of the biggest career fields out there. Countless languages, frameworks, libraries and other extensions are created every day! So, out of all the options, why should you choose JavaScript? JavaScript is a programming language that is one of the core technologies of the World Wide Web.

 
## Uses

Web Development: JavaScript is used to create dynamic and interactive web content like applications and browsers. JavaScript is the most used programming language in the world, used as a client-side programming language by 97.0% of all websites. The push of a button, the changing of colors, every click, every like and every comment on every website is possible thanks to JavaScript.

Game Development: JavaScript is frequently used to create in-browser games. Developers use JavaScript to create 2D and 3D puzzles, role-playing games, racing games, platform games, and more.

 
## What will you learn?

In this course, you will learn the fundamentals of the most modern version of JavaScript. We will start from the most basic concepts and move on to more complicated topics. We will be working in the console for now, because making websites with JavaScript requires you to be fully familiar with the fundamentals of coding. Once you learn those, you can move on to the next courses which teach JavaScript more in depth and teach you how to use it in the browser to make websites. Have fun and take your time!

# Hello World!

In the programming world, once a new apprentice wants to learn the magic of code, they are introduced with a program called "Hello, World!". This is one of the most simple programs you can write with any language.

The program consists of printing "Hello, World!" to the screen. In JavaScript, we can print words, numbers and data with the command console.log().

For example, if we want to print "Hello, World!" we would write:

console.log('Hello, World!');

When we want to print text, we have to write the text in the parentheses of console.log(). We also have to wrap the text with ' ' or " " so the compiler that runs the program knows that the text we wrote isn't code, but actual text we want to print.


# 'Clean Code' and its meaning

Imagine you are a professional developer in a team of 15 developers. You are all working on one website. What would happen if every developer started writing code with their own principles and in their own distinct way? Chaos, of course! That's why it's important not just to write code, but to write clean code.

Clean code is code that is easy to read and understand. Any developer should be able to look at your code, read it, understand it easily and be able to continue it. As a beginner don't stress too much about this, but it's better to start early. During the course you will learn some principles that will help you make sure your code is always clean. Believe it or not, you can already learn some principles:

 
## Keep you code DRY

By DRY, we mean Don't Repeat Yourself. You will learn more about this later.

## Use semicolons

In most programming languages, at the end of every line of code you have to put a semicolon ;. In JavaScript, it is not necessary to put a semicolon at the end of lines, but it is a good practice to put them. Some developers choose not to. Whatever you choose, stick to one and don't mix the two.

# Variables

In JavaScript, you will work with a lot of data. Variables are containers for data. Every variable has a name and a value. We can get the value of the variable by using it's name.

An example for variables is:

let someNumber = 5;
const randomText = 'Hello, World!';
var lightIsOn = false;

Now, in order to use a variable in our application we have to declare the variable. In JavaScript we can declare variables with these three key words: var, let, const.

You can declare variables by writing: 

let/const/var variableName = variableValue

## Const

We use const to declare a constant piece of data that we know won't change. For example: const PI = 3.14159. Once we declare a constant with a value, we cannot change it's value. If we try to change it, the program will crash.

## Let & var

These two are used to declare variables that can change their value. There are differences between let  and var, but we haven't gotten that far yet. For now, all you need to know is that var is very outdated and should be avoided. You should only use let. For example: let itemPrice = 10.25. In order to change the value of the variable we write: itemPrice = 11.50.

 
## Using variables

When you want to get the value from a variable, we can just use the name. Let's print a variable:

const PI = 3.14159;
console.log(PI);

This will output: 3.14159. Notice how we didn't use ' ' or " " in console.log() because we want to print the value of the variable PI, and not the actual text 'PI'. console.log('PI') would output PI.

# Data types

There are lots of types of data you will encounter while programming. 15, 3.1415, true, 'Hello, World!' are all different types of data.

In JavaScript, we declare all variables with let and const, but it's still very valuable to know the different data types:

## Number

We have already worked with numbers. There are integers, which are whole numbers without decimals. Floats are numbers with decimal points. In JavaScript, all types of numbers are just called Number.

let age = 41;

## String

A string is what we usually call text. An example for a string would be: 'Hi, my name is Jack!', or 'teleportation123'. A single character is called a char: 'a'. For example:

let name = 'John';
const lastName = 'Doe';
let myChar = 'A';

## Boolean

Booleans have two values. True or false. Booleans are like a switch that can be turned on or off. For example:

let isFriday = true;
let isTwoOClock = false;

## Undefined & Null

Undefined is a variable that has not been assigned a value: let myVariable;

Null is an intentional empty value: let unknownValue = null;

## Objects and Arrays

There are two more types of data called Objects and Arrays. We will cover Arrays later in this course. If you want to learn about Objects, which are very important in JavaScript, you can check out my next course called Object Oriented Programming in JavaScript.


