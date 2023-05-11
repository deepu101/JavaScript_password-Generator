let inputslider = document.getElementById('inputslider');
let slidervalue = document.getElementById('slidervalue');
let passbox = document.getElementById('passBox');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let genBtn = document.getElementById('genBtn');
let copyicon = document.getElementById('copy');



// Showing Input value 
slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input',()=>{
    slidervalue.textContent = inputslider.value;
});

genBtn.addEventListener('click',()=>{
  passbox.value= generatePassword();
});

 let lowerChars = "abcdefghijklmnopqrstuvwxyz";
 let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let allnumbers = "0123456789";
 let allsymbol = "~`&)&(%%^#@!_-";

//Function to generatepasssword
function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allnumbers : "";
    allChars +=  symbols.checked ? allsymbol : "";


   let i = 1;
   while(i<=inputslider.value){
   genPassword +=  allChars.charAt(Math.floor(Math.random() * allChars.length)); // It is a Function to use generate random method 0 to 1
                  // Math.floor It is Remove to math radom decimals values
               i++;
   }
   return genPassword;

};

// __________copyicon__________________
copyicon.addEventListener('click', ()=>{
     navigator.clipboard.writeText(passbox.value);
     
     copyicon.title = "password Copy";
});
  
