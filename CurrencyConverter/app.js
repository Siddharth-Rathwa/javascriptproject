const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";
let dropdowns=document.querySelectorAll(".dropdowns select");
let btn=document.querySelector("form button");
for(let select of dropdowns){
    for(let currcode in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;
        if(select.name==="from" && currcode==="USD"){
            newoption.selected="selected";
        }
        else if(select.name==="to" && currcode==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })
}
// flag change 
const updateflag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
}
// fetch api
btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector("form input");
    let amtval=amount.value;
    if(amtval===""|| amtval<1){
        amtval=1;
        amount.value="1";
    }

})
