// Question # 01

var firstName = prompt('Enter your First name:');
var lastName = prompt('Enter your Last name:');
var fullName = firstName + ' ' + lastName;
alert('Hello! ' + fullName );

// Question # 02
// Phone modal length

var phoneModal = prompt('Enter your phone modal i can tell you the length of your phone modal');
var lengthofPhoneModal = alert(phoneModal.length);

// Question # 03

var indexword = 'pakistani';
alert('The index number of letter n is ' + indexword.indexOf('n') + ' in word ' + indexword);

// Question # 04

var lastindexword = 'Hello World';
alert('The index number of last l is ' + lastindexword.lastIndexOf('l') + ' in word ' + lastindexword);

// Question # 05

var thirdindexword = 'Pakistani';

for(var i = 0; i < thirdindexword.length; i++){
    if(i == 3){
        alert(thirdindexword[i])
    }
}

// Question # 06

var firstName = prompt('Enter your First name:');
var lastName = prompt('Enter your Last name:');

alert(firstName.concat(' ' + lastName));

// Question # 07

var string = 'Hyderabad';
var replacetext ;
for(var i = 0; i < string.length; i++){
    if(string.slice(i,i+5) == 'Hyder'){
        replacetext = 'Islam' + string.slice(i+5);
    }

}
alert(replacetext);

// Question # 08

var sentence = 'Ali and sami are bestfriend. They play football or cricket together';
var replaceAnd;
for(var i = 0; i < sentence.length; i++){
    if(sentence.slice(i,i+3) == 'and'){
        replaceAnd = sentence.slice(0,i) + '&' + sentence.slice(i+3);
    }

}
alert(replaceAnd);

// Question # 09

var value = '472'
console.log(value +' Type is ' + typeof(value));

var changevaluetype = +'472'
console.log(changevaluetype +' Type is ' + typeof(changevaluetype));

// Question # 10
// Changing word into upperCase

var userPrompt = prompt('Enter a word i will change it in upperCase');
var upperCase = userPrompt.toUpperCase();
console.log(upperCase);

// Question # 11
// Changing word into title case

var userPrompt = prompt('Enter a word i will chage it into titleCase');
var ChangingCaseletter = userPrompt.slice(0,1).toUpperCase() + userPrompt.slice(1).toLowerCase();
console.log(ChangingCaseletter);

// Question # 12
// Change number to string and rounding off number

var num = 35.63;
var numRoundOff = Math.floor(num);
var changeNumToString = numRoundOff.toString()

console.log(numRoundOff + ' is a ' + typeof(numRoundOff));
console.log(changeNumToString + ' is now ' + typeof(changeNumToString));

// Question # 13


// Question # 14
// find user item in my array

var bakeryItems = ['cake' , 'apple pie' , 'cookie' , 'chips', 'patties'];
var usersearchItem = prompt('Tell me your favourite item of bakery');
var userItemtoLowerCase = usersearchItem.toLowerCase()
var match = false;

for(var i = 0; i < bakeryItems.length; i++){
    if(bakeryItems[i] == userItemtoLowerCase){
        match = true;        
    }
}

if(match == true){
    alert(usersearchItem + ' is available at index ' + bakeryItems.indexOf(userItemtoLowerCase));
}
else{
    alert('Sorry! ' + usersearchItem + ' is not available in bakery')
}

// Question # 15
// VAlid user password

var userPassword = prompt('Enter your password');

for(var i = 0; i < userPassword.length; i++){
    if(userPassword.length < 6){
        if(userPassword[0] >= 0 && userPassword[0] <= 9 ){
            if(userPassword[i] >! 64 && userPassword[i] <= 91 && userPassword[i] >= 96 && userPassword[i] <= 123){
                alert('Password must contain capital or small letters');
                
            }
            alert('Password cannot begin with a number')
        
        }
        alert('Password must contain atleast 6 character');
    }
    else{
        alert('Correct Password!');
        break;
    }
    
}
if(userPassword.slice(0,1) > 30 && userPassword.slice(0,1) < 39){
    console.log(true);
};


// Question # 16

var university = 'University of Karachi';
var splitStringtoArray = university.split("");

for(var i = 0; i < splitStringtoArray.length; i++){
    console.log(splitStringtoArray[i]);
}

// Question # 17

var userinput = prompt('Enter a word i will show the last character of your word');
var lastLetter = userinput.slice(userinput.lastIndexOf());
console.log(lastLetter);

// Question # 18
// number of words in the sentence

var sentencemix = 'The quick brown fox jumps over the lazy dog';
var sentence = sentencemix.toLowerCase()
var occurance = [];

for(var i = 0; i < sentence.length; i++){
    if(sentence.slice(i,i+4) == 'the '){
        occurance += sentence.slice(i , i+4);
    }
}
console.log(occurance);