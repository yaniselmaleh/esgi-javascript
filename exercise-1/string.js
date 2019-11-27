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
        //return str.toLowerCase().trim().replace(/ /g, "_");
        return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '_');
}

function leet(str) {
    if(typeof str != "string" || !str) return "";
       return str.replace(/[aeiouy]/gi, function(item){
            switch(item){
                case 'a':
                case 'A':
                    return 4;
                case 'e':
                case 'E':
                    return 3;
                case 'i':
                case 'I':
                    return 1;
                case 'o':
                case 'O':
                    return 0;
                case 'u':
                case 'U':
                    return '(_)';
                case 'y':
                case 'Y':
                    return 7;
            }
       });
}

function verlan(str) {
    if(typeof str !== "string" || !str) return "";
        return str.split(" ").map(function(word){
            return word.split("").reverse().join("");
        }).join(" ");
}

function yoda(str) {
    if(typeof str !== "string" || !str) return "";
    return str.split(" ").reverse().join(" ");
}

console.log(yoda("hello world"));