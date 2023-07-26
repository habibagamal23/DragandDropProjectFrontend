

function findmissingnumber(givennumb){
let alpha = "abcdefghij";
let start = alpha.indexOf[givennumb[0]];
for(let i =0 ; i<givennumb.length; i++){

    if(givennumb[i] !== alpha[start+i]){
        return alpha[start+i];

    }
    return "not missing value";
}

}

console.log(findmissingnumber("abdf"));