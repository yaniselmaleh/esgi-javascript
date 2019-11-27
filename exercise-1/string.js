// Ucfirst
function ucfirst(str){
    if(typeof str !== "string" || !str) return "";
        return str[0].toUpperCase() + str.substring(1); 
}


// Capitalize
function capitalize(str){
    if(typeof str !== "string" || !str) return "";

    return str.toLowerCase().split(" ").map(function(item){
            return ucfirst(item);
    }).join(" ");
}

// CamelCase
function camelCase(str){
    if(typeof str !== "string" || !str) return "";
        return capitalize(str).replace(/ /g, "");
}


// Snake_case
function snake_case(str){
    if(typeof str !== "string" || !str) return "";
        return str.toLowerCase().trim().replace(/ /g, "_");
}


//function leet(str) {
    //let data = {'a':4,'e':3,'i':1,'o':'0','U':'(_)','Y':7};
    //return data[str.toLowerCase()] || str;
  //}
   
  //let data = "anaconda";

function leet(str) {
    if(typeof str != "string" || !str) return "";
        str = str.toLowerCase();
        let code = { "a":4, "e":3, "i":1, "o":0, "u":"(_)", "y":7};

    for (let i in code){
        let regex = new  RegExp(i, "g");
         str = str.replace(regex, code[i]);
    }
    return str;
}


function verlan(str) {
    if(typeof str !== "string" || !str) return "";
        return str.split("").reverse().join("");
}



function yoda(str) {
    if(typeof str !== "string" || !str) return "";
        return str.toLowerCase().split(" ").reverse().map(function(item){
            return ucfirst(item);
        }).join(" ");
}


// Vig
//function vig(str){
  //  if(typeof str !== "string" || !str) return "";
    //    for (let str = 0; str < 5; str++) {
      //      console.log(str);
        //}
        //return str;
//}


//console.log(leet("anaconda"));
// Chiffré[i] = (Texte[i] + Clés[i]) modulo 26
// Texte[i] = (Chiffre[i] - Clés[i]) modulo 26
//console.log(vig("Hello World "));