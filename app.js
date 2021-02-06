// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var ProGrad_1 = "Bhargavi";
console.log("The driver's name is " + ProGrad_1);
var ProGrad_2 = "Jahnavi";
console.log("The navigator's name is " + ProGrad_2);


// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (ProGrad_1.length > ProGrad_2.length) {
    console.log("The driver has the longest name, it has "+ProGrad_1.length+" characters");
}
else if (ProGrad_1.length < ProGrad_2.length) {
    console.log("It seems that the navigator has the longest name, it has "+ProGrad_2.length+" characters");
}
else {
    console.log("Wow, you both have equally long names,"+ProGrad_1.length+" characters!");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 
function vowelchecker(string) {
    var c = 0;
    var indexes="";
    var value="";
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u" || string.charAt(i) == "A" || string.charAt(i) == "E" || string.charAt(i) == "I" || string.charAt(i) == "O" || string.charAt(i) == "U") {
            c=c+1;
            indexes=indexes.concat(i.toString(),' ');
            value = value.concat(string.charAt(i),' ');
        }
    }
    if (c >= 1) {
        console.log(string + " " + value + "" + indexes);
    }
    else
        console.log("no vowels\n");
}
vowelchecker(ProGrad_1);
vowelchecker(ProGrad_2);
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
function casechecker(string) {
    var uc=0;
    var lc=0;
    for (var i=0;i<string.length;i++) {

        if (string.charAt(i)>='a' && string.charAt(i)<='z')
            lc=lc+1;
        else if(string.charAt(i)>='A' && string.charAt(i)<='Z'){
            uc=uc+1;
        }
    }
    console.log("the number of upper case characters " + uc);
    console.log("the number of lower case characters " + lc);
}
casechecker(ProGrad_1);
casechecker(ProGrad_2);
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
function serialprint(string) {
    var resword="";
    for (var i=0;i<string.length;i++) {
        if(string.charAt(i)>='a' && string.charAt(i)<='z'){
        resword=resword.concat(string.charAt(i).toUpperCase(),' ');
        }
        else{
            resword=resword.concat(string.charAt(i),' ');
        }
    }
    console.log(resword);
}
serialprint(ProGrad_1);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
function reversePrint(string) {
    var reverseword="";
    for (var i=string.length-1;i>=0;i--) {
        reverseword=reverseword.concat(string[i]);
    }
    return reverseword;
}
res=reversePrint(ProGrad_2);
console.log(res);
// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
function lexicographic(string1,string2) {
    if (string1<string2) {
        console.log("The driver's name goes first.");
    }
    else if(string1>string2) {
        console.log("Yo, the navigator goes first definitely");
    }
    else
        console.log("What?! You both have the same name?");
}
lexicographic(ProGrad_1,ProGrad_2);
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
var phraseToCheck="A man, a plan, a canal, panama!";
var res="";
var res1="";
for(var i=0;i<phraseToCheck.length;i++){
    if((phraseToCheck.charAt(i)>='65' && phraseToCheck.charAt(i)<='97') || (phraseToCheck.charAt(i)>='65' && phraseToCheck.charAt(i)<='97')){
        res=res+phraseToCheck.charAt(i);
    }
}
res1=reversePrint(res);
if(!res1.localeCompare(res)){
console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}