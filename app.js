var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";
function getURL(text){
    return serverURL + "?" + "text=" + text;
}
function clickHandler(){
    var inputValue=txtInput.value;
    fetch(getURL(inputValue))
        .then(response => response.json())
        .then(json => outputDiv.innerText = json.contents.translated
        );
    
    
}

btnTranslate.addEventListener("click",clickHandler)