function loginBtn(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let username1 = "owethu",password1 = "owethulogin";
    let username2 = "jazzjuune",password2 = "jazzjuunelogin";
    let username3 = "wooks",password3 = "wookslogin";

   if(username == username1 && password == password1){
        alert("welcome owethu");
   }else if(username == username2 && password == password2){
        alert("welcome jazzjuune");
   }else if(username == username3 && password == password3){
        alert("welcome wooks");
   }else{
        alert("wrong details");
   }

}


//event handler for increase or decrease in number of items
let currentValueGloves;
function increaseGloves(){

     currentValueGloves = parseInt(document.getElementById("howManyItemsGloves").value);

     if(currentValueGloves >=0){
     document.getElementById("howManyItemsGloves").value = currentValueGloves + 1;
 }
}

function decreaseGloves(){

     currentValueGloves = parseInt(document.getElementById("howManyItemsGloves").value);

     if(currentValueGloves >0){
     document.getElementById("howManyItemsGloves").value = currentValueGloves - 1;
 }
}

let currentValueJacket;
function increaseJacket(){

     currentValueJacket = parseInt(document.getElementById("howManyItemsJacket").value);

     if(currentValueJacket >=0){
     document.getElementById("howManyItemsJacket").value = currentValueJacket + 1;
 }
}

function decreaseJacket(){

     currentValueJacket = parseInt(document.getElementById("howManyItemsJacket").value);

     if(currentValueJacket >0){
     document.getElementById("howManyItemsJacket").value = currentValueJacket - 1;
 }
}

let currentValueShirt;
function increaseShirt(){

     currentValueShirt = parseInt(document.getElementById("howManyItemsShirt").value);

     if(currentValueShirt >=0){
     document.getElementById("howManyItemsShirt").value = currentValueShirt + 1;
 }
}

function decreaseShirt(){

     currentValueShirt = parseInt(document.getElementById("howManyItemsShirt").value);

     if(currentValueShirt >0){
     document.getElementById("howManyItemsShirt").value = currentValueShirt - 1;
 }
}

let currentValueShort;
function increaseShort(){

     currentValueShort = parseInt(document.getElementById("howManyItemsShort").value);

     if(currentValueShort >=0){
     document.getElementById("howManyItemsShort").value = currentValueShort + 1;
 }
}

function decreaseShort(){

     currentValueShort = parseInt(document.getElementById("howManyItemsShort").value);

     if(currentValueShort >0){
     document.getElementById("howManyItemsShort").value = currentValueShort - 1;
 }
}

let currentValueSportBag;
function increaseSportBag(){

     currentValueSportBag = parseInt(document.getElementById("howManyItemsSportBag").value);

     if(currentValueSportBag >= 0){
     document.getElementById("howManyItemsSportBag").value = currentValueSportBag + 1;
 }
}

function decreaseSportBag(){

     currentValueSportBag = parseInt(document.getElementById("howManyItemsSportBag").value);

     if(currentValueSportBag > 0){
     document.getElementById("howManyItemsSportBag").value = currentValueSportBag - 1;
 }
}

let currentValueHoodie;
function increaseHoodie(){

     currentValueHoodie = parseInt(document.getElementById("howManyItemsHoodie").value);

     if(currentValueHoodie >= 0){
     document.getElementById("howManyItemsHoodie").value = currentValueHoodie + 1;
 }
}

function decreaseHoodie(){

     currentValueHoodie = parseInt(document.getElementById("howManyItemsHoodie").value);

     if(currentValueHoodie > 0){
     document.getElementById("howManyItemsHoodie").value = currentValueHoodie - 1;
}
}