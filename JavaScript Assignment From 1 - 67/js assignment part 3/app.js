// Assignment 38 - 42

// Task 1 : Write a custom function power ( a, b ) to calculate the value of a raised to b.

// var a = +prompt("enter any number :")
// var b = +prompt("enter any number :")

// function power() {
//     x = a ** b
//     return x
// }
// power();
// document.write(x)

// Task 2 : Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

// let year = prompt("Type any Year to check whether it's Leap year or not")

// function Leapyear() {
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//         return (year + " is leap year ")
//     }
//     else {
//         return (year + " is not leap year ")
//     }
// }
// document.write(Leapyear())

// Task 3 : If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2


// function Area() {
//     var a = +prompt("Type first side of triangle")
//     var b = +prompt("Type second side of triangle")
//     var c = +prompt("Type third side of triangle")
//     var S = (a + b + c) / 2
//     area = Math.sqrt(S * (S - a) * (S - b) * (S - c))
//     alert(area);

//     return (area)

// }
// Area()


// Task 4: Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// Task 5:
// function studentResult() {
//     sub1 = +prompt("Enter marks out of 100")
//     sub2 = +prompt("Enter marks out of 100")
//     sub3 = +prompt("Enter marks out of 100")
//     OBM = sub1 + sub2 + sub3
//     TM = 300

//     function Average() {
//         Avg = OBM / 3
//         document.write("Average Result is " + Avg)
//     }
//     Average();
//     document.write("<br>")

//     function Percentage() {
//         Percent = (OBM / TM) * 100
//         document.write("Percentage is " + Percent)
//     }
//     Percentage();

// }
// studentResult();


// function index() {
//     var string = prompt("Type any string").toLowerCase()
//     var char = prompt("Type which character index you want").toLowerCase()
//     let i = 0;
//     while (i < string.length) {
//         if (string[i] == char) {
//             return i
//         }
//         i++
//     }
//     return -1;

// }
// document.write(index())

// Task 6: Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

// function terminate() {
//     var sentence = prompt("Type any sentence").trim()
//     if (sentence.length > 25) {
//         alert("Type sentence less than 25 character")
//     }
//     else {
//         y = sentence.replace(/[aeiou]/g, '')
//         document.write(y)

//     }
// }
// terminate()

// Task 7 : I tried but it doesnt work

// var input = "Pleases read this application and give me gratuity"
// var count = 0

// function vremoval() {

//     switch (input) {
//         case "ea":
//             count += 1;
//             break
//         case "ui":
//             count += 1;
//             break
//         default:
//             count
//     }

// }
// vremoval();
// alert(count)


// Task 8 : The distance between two cities (in km.) is input through the keyboard.Write four functions to convert 
// and print this distance in meters, feet, inches and centimeters.

// var Distance = +prompt("Type Distance in kilometer")
// function meters() {
//     meter = Distance * 1000
//     return meter
// }
// document.write("Distance in meters = " + meters() + "<br>")
// function inches() {
//     inche = Distance * 39370
//     return inche
// }
// document.write("Distance in inches = " + inches() + "<br>")
// function cms() {
//     cm = Distance * 100000
//     return cm
// }
// document.write("Distance in cms = " + cms() + "<br>")
// function feets() {
//     feet = Distance * 3281
//     return feet
// }
// document.write("Distance in feets = " + feets() + "<br>")

// Task 9 : 
// var salary = +prompt("Type your salary here :")
// var hours = +prompt("Type your working hours here :")

// function overpaid() {
//     if (hrs > 40) {
//         overTime = (hours - 40) * 12;
//         salary = salary + OverTime;
//         document.write(" Over time Salary is " + salary)

//     } 
//     else if (hours <= 40) {
//         Overtime = hrs * 12;
//         document.write("salaries of Office hours" + Salary)

//     }
// }

// Task 10 : unclear 


/// Assignment 43-48 Events

// Task 1 : Show an alert box on click on a link.

// function msg() {
//     alert("Someone Clicked on the link")
// }

// Task 2: 
// function buy() {
//     alert("Thanks For Purchasing a Phone from Us")
// }
// Task 3:
// function Remove1() {
//     document.getElementById("tr1").remove();
// }
// function Remove2() {
//     document.getElementById("tr2").remove();
// }
// function Remove3() {
//     document.getElementById("tr3").remove();
// }
// function Remove4() {
//     document.getElementById("tr4").remove();
// }
// function Remove5() {
//     document.getElementById("tr5").remove();
// }
// function Remove6() {
//     document.getElementById("tr6").remove();
// }
// function Remove7() {
//     document.getElementById("tr7").remove();
// }
// function Remove8() {
//     document.getElementById("tr8").remove();
// }
// function Remove9() {
//     document.getElementById("tr9").remove();
// }
// function Remove10() {
//     document.getElementById("tr10").remove();
// }


// Task 4;
// function newimg() {
//     var img = document.getElementById("mp");
//     img.src = "img/samsung-galaxy-s10.jpg"
// }
// function preimg() {
//     var img = document.getElementById("mp");
//     img.src = "img/oppo-f11-pro.jpg"
// }

// Task 5:
// let CounterBtn = document.getElementById("counter").innerHTML
// function increase() {
//     CounterBtn++;
//     document.getElementById('counter').innerHTML = CounterBtn;
// }
// function decrease() {
//     CounterBtn--;
//     document.getElementById('counter').innerHTML = CounterBtn;
// }

// Assignment  49 - 52 

// Task 1 
// function Check() {

//     const form = document.getElementById('form');
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const password2 = document.getElementById('password2').value;

//     document.getElementById('form').innerHTML += "<br>" + "Username = " + username + "<br>" +
//         "Email = " + email + "<br>" +
//         "Password = " + password + "<br>" +
//         "Confirm password = " + password2 + "<br>"
// }

//  Task 2

// function extend() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

//   Task 3 

// function Check() {

// }

// Assignment 53 - 58

// Task 1
// var modal = document.getElementById("myModal");
// var images = document.querySelectorAll(".pics");
// var modalImg = document.getElementById("img01");

// for (var i = 0; i < images.length; i++) {
//     images[i].onclick = function () {
//         modal.style.display = "block";
//         modalImg.src = this.src;
//     }
// }
// var span = document.getElementsByClassName("close")[0];
// span.onclick = function () {
//     modal.style.display = "none";
// }


// Task 2 
// function zoomIn() {
//     var x = document.getElementById("test")
//     var style = window.getComputedStyle(x, null).getPropertyValue('font-size');
//     var fontSize = parseFloat(style);
//     x.style.fontSize = (fontSize + 10) + "px";
// }
// function zoomOut() {
//     var x = document.getElementById("test")
//     var style = window.getComputedStyle(x, null).getPropertyValue('font-size');
//     var fontSize = parseFloat(style);
//     x.style.fontSize = (fontSize - 10) + "px"
// }
// Assignment 58 - 67

// Task 1 :
// i. Get element of id “main-content” and assign them in a variable.

// var element = document.getElementById("main-content")
// console.log(element)

// ii. Display all child elements of “main-content” element.

// ANS :  var child = document.getElementById("main-content")
// console.log(child.childNodes)

// iii. Get all elements of class “render” and show their innerHTML in browser.

// var elements = document.getElementsByClassName("render")
// console.log(elements)

// iv.  Fill input value whose element id first-name using javascript.
// var fname = document.getElementById("first-name")
// fname.value = "JavaScript Assignment";

// v. Repeat part iv for id ”last-name” and “email”.
// var lname = document.getElementById("last-name")
// lname.value = "JavaScript Final Assignment";

// var email = document.getElementById("email")
// email.value = "Java@script.com";

// Task 2: 

// i. What is node type of element having id “form-content”.
// var fcon = document.getElementById("form-content")
// console.log(fcon.nodeType)

// ii. Show node type of element having id “lastName” and its child node.

// var lname = document.getElementById("lastName")
// console.log(lname.nodeType)
// console.log(lname.childNodes)

// iii. Update child node of element having id “lastName”.

// var lname = document.getElementById("lastName")
// var ChildNode = lname.childNodes[0]
// ChildNode.value = "ABC";

// iv. Get First and last child of id “main-content”.

// var mcon = document.getElementById(main - content)
// console.log(mcon.firstChild)
// console.log(mcon.lastChild)

// v. Get next and previous siblings of id “lastName”.

// var lname = document.getElementById("lastName")
// console.log(lname.nextSibling)
// console.log(lname.previousSibling)

// vi. Get parent node and node type of element having id “email”
// var email = document.getElementById("email")
// console.log(email.parentNode)
// console.log(email.nodeType)





