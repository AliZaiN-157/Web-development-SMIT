/// Chp 21 to 25 ///

//          Task 1  
// var firstname = prompt("Type your first name here")
// var lastname = prompt("Type your Last name here") 

// fullname = firstname + lastname

// alert("Hello ! " + fullname)

//          Task 2
// var favmobile = prompt("Favorite Mobile Phone")
// length = favmobile.length
// document.write("My favorite phone is : " + favmobile + "<br>")
// document.write("length of string : " + length + "<br>")

//           Task 3
// var x = "Pakistani"
// y = x.indexOf("n")
// document.write("String : " + x + "<br>")
// document.write("index of 'n' is : " + y)

//           Task 4 
// var x = "Hello World"
//  y = x.lastIndexOf("l")
//  document.write("String : " + x + "<br>")
//  document.write("Last index of 'l' is : " + y)

//           Task 5
// var x = "Pakistani"
// y = x.slice(3,4)
// document.write("String : " + x + "<br>")
// document.write("Character of index 3 :" + y + "<br>")

//           Task 6
// var firstname = prompt("Type your first name here")
// var lastname = prompt("Type your Last name here") 

// fullname = firstname.concat(lastname)

// alert("Hello ! " + fullname)

//           Task 7
// var City = "Hyderabad";
// var City1 = City.replace("Hyder","Islam");
// document.write("City : " + City + "<br>")
// document.write("After Replacement : " + City1 + "<br>")

//           Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var new_msg = message.replace(/and/g,"&")
// document.write(new_msg)

//           Task 9
// var str = "472"
// var int = parseInt(str)
// document.write(" String : " + str + "<br>")
// document.write(" Str data type  : " + typeof str + "<br>")
// document.write(" Integer : " + int + "<br>")
// document.write(" int data type : " + typeof int + "<br>")

//           Task 10
// var input = prompt("Type here","Hello World")
// x = input.toUpperCase();
// document.write(input + "<br>")
// document.write(x + "<br>")

//           Task 11
// var input = prompt("Type here","javascript")
// y = input.toLowerCase();
// z = y.slice(0,1)
// x = y.slice(1)

// output = z.toUpperCase()  + x + "<br>"
// document.write(output)

//           Task 12
// var num = 25.25
// document.write("number : " + num + "<br>")
// var s = num + '';
// s =s.replace('.', '');
// s = parseInt(s);
// str = s.toString()
// document.write("string : " + str + "<br>")

//           Task 13
// var input = prompt("Enter Username ")
// var error = "@,.!"
// for (var i = 0; i < input.length; i++) {
//     if (error.indexOf(input.charAt(i)) != -1){
//     alert (" enter a valid username"); 
     
//  }
//  }

 
//           Task 14
// var arr = ["cake","cookies","apple pie","chips","patties"]
// var user_input = prompt("Welcome to ABC Bakery...! what you want ?")
// x = user_input.toLowerCase()

// if (arr.indexOf(x) > -1){
//     document.write( x + " is avalaible at index " + arr.indexOf(x) + "<br>")
// }else{
//     document.write( x + " is not avalaible  <br>")
// }

//           Task 15
// var input = prompt("Enter password");
// input = input.toLowerCase()
// if (isNaN(parseInt(input[0])) && (input.length > 6)) {
//   alert("password is valid");
// } else {
//   alert("Enter a valid password");
// }

//           Task 16 
// var uni = "University of Karachi";
// x = uni.split("").join("<br />");
// document.write(x)

//           Task 17 
// var input = prompt("Enter here")
// x = input.length

// y = input.slice(x-1)
// document.write("The Last Character of " + input + " is " + y + "<br>")


//           Task 18
// var text = "The quick brown fox jumps over the lazy dog";
// document.write("Text : " + text + "<br>")
// y = text.split(" ")
// z = text.toLowerCase()
// x = z.match(/the/g).length
// document.write("There are " + x + " occurence(s) of word 'the' ")


////------------ Assignment Math Method (26-30)

//           Task 1

// var input = prompt(" Enter Any positive integer","3.45214")

// document.write("Number : " + input + "<br>")
// y = Math.round(input)
// document.write("Round Off value  : " + y + "<br>")
// a = Math.floor(input)
// document.write("Floor value : " + a + "<br>")
// b = Math.ceil(input)
// document.write("Ceil value : " + b + "<br>")

//           Task 2
// var input = prompt(" Enter Any negative integer","-3.45214")

// document.write("Number : " + input + "<br>")
// y = Math.round(input)
// document.write("Round Off value  : " + y + "<br>")
// a = Math.floor(input)
// document.write("Floor value : " + a + "<br>")
// b = Math.ceil(input)
// document.write("Ceil value : " + b + "<br>")

//          Task 3
// var input = prompt("Type any Positive or Negative integer ?")

// x = Math.abs(input)

// document.write("The aboslute value of " + input + " is " + x + "<br>" )

//          Task 4
// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);

//          Task 5
// var tosscoin = Math.floor( Math.random() * 2 ) +1;
// if ( tosscoin == 1){
//     alert(tosscoin + ' Random coin value : Tail');
// }else{
//     alert(tosscoin + ' Random coin value : Head');
// }

//           Task 6
// var Random_num = Math.floor( Math.random() * 100 ) +1;
// alert("Random number between 1 and 100 is : " + Random_num )

//           Task 7

// var weight_input = +prompt("Enter your weight");
// x =parseInt(weight_input);
// alert("The weight of user is " + x)

//           Task 8
// var input = prompt("Type any number from 1 to 10 ")
// alert(" Lets checks the number choosen by user and computer are same or not")
// var comp = Math.floor( Math.random() * 10 ) +1;
// if (input === comp){
//     alert(" Well done ...!")
// }else{
//     alert("Better Luck next time ")
// }

// Assignment Date Method (31-34)

//          Task 1
// var date = new Date ();
// document.write(date)

//          Task 2
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const d = new Date();
// alert("The current month is " + monthNames[d.getMonth()]);

//          Task 3
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var day = new Date();
// var DayName = day.toString().split(' ')[0];
// alert("Today is " + DayName);

//          Task 4
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var day = new Date();
// var DayName = day.toString().split(' ')[0];
// if (DayName == "Sat || Sun"){
// alert("It's Funday");
// }else{
//     alert("Today is " + DayName);
// }

//          Task 5
// var date = new Date ();
// var date = date.getDate();
// if (date < 16 ){
//     alert("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month");
// }

//           Task 7
// var date = new Date ();
// var time = date.getHours();
// alert(time)
// if (time >= 12 ){
//     alert("It's " + time + "PM")
// }else{
//     alert("It's " + time + "AM")
// }

//           Task 8
// var today = new Date();
// var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+7, 0);
// alert(lastDayOfMonth);

//           Task 9


//  Assignment function (35-38)

//           Task 1

// function date() {
//     var now = new Date();
//     alert(now)
// }
// date();

//          Task 2

// function greet(){
//     var firstname = prompt("Enter your first name")
//     var lastname = prompt("Enter your last name")

//     fullname = firstname + "" + lastname
//     alert("Good Morning " + fullname)
// }
// greet();

//          Task 3

// function add(a,b){
//     var addition = a + b 
//     alert(addition) 
// }
// add(3,3);

//          Task 4

// function cal(num1,opr,num2) {
//     var num1 = +prompt(" Enter first number ")
//     var opr = prompt(" Enter Operator")
//     var num2 = +prompt(" Enter Second number")

//     if (opr === "+"){
//         return num1 + num2
//     }
//     else if (opr === "-"){
//         return num1 - num2
//     }
//     else if (opr === "*"){
//         return num1 * num2
//     }
//     else if (opr === "/"){
//         return num1 / num2
//     }
//     else{
//         return "Incorrect Operator"
//     }
// }
// var result = cal();
// alert(result)

//            Task 5 
// function sqr(){
//     var a = +prompt("Enter any number and we will return you its square")
//     return  a * a
// }
// var result = sqr();
// alert(result)

//             Task 6

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var n = +prompt("Enter any number")
//   answer = factorial(n)
//   alert("The factorial of " + n + " is " + answer);


//               Task 7

// function counting(){
//     var a = +prompt("Enter Start Number")
//     var b = +prompt("Enter End Number")
    
//     for ( i = a ; i <= b ; i++){
//         console.log(i)
//     }
//     return i
// }
// counting();

//             Task 8 
//   function pythagoras(base,perp){        

//     var base = +prompt("Enter base value")
//     var perp = +prompt("Enter perpendicular value ")

//     function sqr(){
//         Base = base**2
//         Perp = perp**2 
//         Hyp = Base + Perp
//     }
//     sqr();
    
// }
 
//  pythagoras();
//  alert(Hyp)

//             Task 9
 
// function rectangle(){
//     Area = width * height
//     return Area
// }
// var width  = +prompt(" Enter the width ")
// var height = +prompt(" Enter the height ")

// rectangle();
// alert(Area)

//             Task 10 

// function palindrome(string){
//    var string = prompt("Enter any word")
//     var result = "";
//     for ( i = string.length - 1; i >= 0; i--){
//        result += string[i]
//     }
//     if(string === result){
//         alert(string + " is a palindrome word ")
//     }else{
//        alert(string + " is not a palindrome word ")
//      }
//   return result
// }

// palindrome();

//        Task 11 

// function pop(str){
//     var a = str.toLowerCase().split(" ")
//     for (var i = 0 ; i < a.length; i++){
//         a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1); 
//         a[i] = a[i].slice(0,1).toUpperCase() + a[i].slice(1);

//     }
//     return a.join(" ");
// }
// document.write(pop("the quick brown fox"));

//          Task 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(find_longest_word('Web Development Tutorial'));

//         Task 13



//         Task 14

// function circle(radius){
//     function calCircumference(){
//         Circumference = 2 * 3.142 * radius
//     }
//     calCircumference();
//     function calArea(){
//         Area = 3.142 * radius**2
//     }
//     calArea();
// }
// circle(3);
// alert( "Circumference of cirlce is "+ Circumference + " and Area of circle is " + Area)


