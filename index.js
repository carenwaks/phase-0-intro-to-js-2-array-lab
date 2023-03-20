// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
    return cats.push(name);
} 

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}


function destructivelyRemoveLastCat () {
     cats.pop ();
}
function destructivelyRemoveFirstCat () {
     cats.shift ();
}

function  appendCat () {
    let newCatsArray =[...cats, "Broom"]
    return newCatsArray;
}
function prependCat () {
    let newCatsArray = ["Arnold", ...cats];
    return newCatsArray;
}


function removeLastCat () {
    let newCatsArray =cats.slice(0,cats.length-1);
    return newCatsArray;
}
    
function removeFirstCat () {
    let newCatsArray =cats.slice(1,cats.length);
    return newCatsArray;
}
