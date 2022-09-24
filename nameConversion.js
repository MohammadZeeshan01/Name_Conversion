function oneClick(){

//For Camel Case.

var txt = document.getElementById("text").value
console.log(txt);
var case1 = document.getElementById("camel-case")

function camelCase(txt) {
    return txt.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}
console.log(camelCase(txt));
case1.innerHTML = camelCase(txt);


//For Pascal Case.

var case2 = document.getElementById("pascal-case")

const toPascalCase = str => (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
case2.innerHTML = toPascalCase(txt);


//For Snake Case.

var case3 = document.getElementById("snake-case")

function snake_case_string(txt) {
    return txt && txt.match(
/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(s => s.toLowerCase())
        .join('_');
}
case3.innerHTML = snake_case_string(txt);

// For Screaming Snake Case

var case4 = document.getElementById("screaming-snake-case")

function snake_case_scrm(txt) {
    return txt && txt.match(
/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(s => s.toUpperCase())
        .join('_');
}
case4.innerHTML = snake_case_scrm(txt);
console.log(snake_case_scrm(txt));

// For Kebab Case
var case5 = document.getElementById("kebab-case")

const kebabCase = string => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s_]+/g, '-')
.toLowerCase();

case5.innerHTML = kebabCase(txt);


// For Screaming Kebab Case
var case6 = document.getElementById("screaming-kebab-case")

const ScreamkebabCase = string => string
.replace(/([a-z])([A-Z])/g, "$1-$2")
.replace(/[\s_]+/g, '-')
.toUpperCase();

case6.innerHTML = ScreamkebabCase(txt);

}
