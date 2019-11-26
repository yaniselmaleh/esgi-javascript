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


// leet
function leet(str) {
    let data = {'a':'4','e':'3','i':'1','O':'0','U':'_','Y':'7'};
    return data[str.toLowerCase()] || str;
  }
   
  let data = "anaconda";
  console.log( data.replace(/[aei0UY]/g, leet) );