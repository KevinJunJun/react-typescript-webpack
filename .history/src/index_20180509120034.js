import _ from "lodash"

function component(){
    var elemene = document.createElement("div");
    element.innerHTML=_.join(["Hello","webpack"]," ");
    return element;
}

document.body.appendChild(component());