let age1 = prompt("Plese Enter: ");

if(age1>=25){
    alert(age1 + "Adult ago");
    console.log(age1 + "year ago ");
    document.getElementById("hContnt").innerHTML=age1+" Adult ago";
}

else if(age1>=18 && age1<=25){
    alert(age1 + "Teenages");
    console.log(age1 + "year ago ");
    document.getElementById("hContnt").innerHTML=age1+" Teenages"
}
else if(age1>=1 && age1<18){
    alert(age1 + "chilldren");
    console.log(age1 + "year ago ");
    document.getElementById("hContnt").innerHTML=age1+" chilldren"
}
else{
    alert(age1 + "Error");
    console.log(age1+ "year ago");
    document.getElementById("hContnt").innerHTML=age1+" Error";
}