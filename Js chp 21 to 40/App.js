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

//           Task 8
// var input = prompt("Type any number from 1 to 10 ")
// alert(" Lets checks the number choosen by user and computer are same or not")
// var comp = Math.floor( Math.random() * 10 ) +1;
// if (input === comp){
//     alert(" Well done ...!")
// }else{
//     alert("Better Luck next time ")
// }

//








