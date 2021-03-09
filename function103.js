let gen = prompt("Plese Enter year : ");

if(gen>=2540 && gen<=2564){
    if(gen>=2540 && gen<=2553){
        alert(gen + "Gen Z");
        console.log(gen + "year 2540 to 2553");
        document.getElementById("hContnt2").innerHTML=gen+" Gen Z"
    }
    else if(gen>=2523 && gen<2540){
        alert(gen + "Gen Y");
        console.log(gen + "year 2523 to 2540");
        document.getElementById("hContnt2").innerHTML=gen+" Gen Y"
    }
    else{
        alert(gen + "Gen Alpha");
        console.log(gen + "year 2553 to 2564");
        document.getElementById("hContnt2").innerHTML=gen+" Gen Alpha"
    }
    
}

else if(gen>=2508 && gen<2522){
    alert(gen + "Gen X");
    console.log(gen + "year 2508 to 2522");
    document.getElementById("hContnt2").innerHTML=gen+" Gen X"
}
else if(gen>=2489 && gen<2507){
    alert(gen + "Baby Boomer");
    console.log(gen + "year 2489 to 2507");
    document.getElementById("hContnt2").innerHTML=gen+" Baby Boomer"
}
else if(gen>=2468 && gen<2488 ){
    alert(gen + "Silent Generation");
    console.log(gen + "year 2468 to 2488");
    document.getElementById("hContnt2").innerHTML=gen+" Silent Generation"
}
else if(gen>=2444 && gen<2467){
    alert(gen + "Greatest Generation");
    console.log(gen + "year 2444 to 2467");
    document.getElementById("hContnt2").innerHTML=gen+" Greatest Generation"
}
else{
    alert(gen + "Error");
    console.log(gen+ "year ago");
    document.getElementById("hContnt2").innerHTML=gen+" Error";
}
