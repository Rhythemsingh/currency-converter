const URL="https://api.exchangerate.host/convert?from=USD&to=INR";

const dropdown=document.querySelectorAll(".dropdown select");

for(let select of dropdown){
    for(currcode in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        flag(evt.target);
    });
}
const flag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let parent = element.parentElement;
    let imgs = element.parentElement.querySelectorAll("img");
   
    if (element.id === "option1") {
        imgs[0].src = newsrc; // LEFT flag
    } else {
        imgs[1].src = newsrc; // RIGHT flag
    }
};
let button=document.querySelector("button");
let input=document.querySelector("input");
let heading=document.querySelector("h2");

button.addEventListener("click",async()=>{
    let amount=Number(input.value);
    let from=document.querySelector("#option1").value;
    let to=document.querySelector("#option2").value;
    let URL= `https://api.exchangerate-api.com/v4/latest/${from}`;
     let response = await fetch(URL);
    let data = await response.json();

    let rate = data.rates[to];

    let final = amount * rate;

    heading.innerText = `${amount} ${from} = ${final.toFixed(2)} ${to}`;
});