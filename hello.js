//let x = prompt("Quel est le nombre d'euro a convertir ?");
//let somme_dollars = x * 1.13
//if (somme_dollars > 15) {
//   alert("on prend");
//} else {
//    alert("on laisse c'est trop chère");
//}


//let xx=prompt("que vaut xx ?");
//let y=prompt("que vaut y ?");
//let z=prompt("que vaut z?");
//alert(x^2 + (3 * y) * z);


//for (var iter = 0; iter < 1000; iter = iter+10) {
//   alert('Tu as genere  ' + iter + '  de gemmes');
//   }

//let i = 0;
//while (i<10){
//   alert("hello " + i);
//   i = i + 1
//}

//function carre(i){
//   return(i*i);

//    }

//let x = prompt("Que veux-tu calculer ?");
//let somme = x ^ 2 - (3 * x) + 1
//alert(somme);
//function f(x){
//   return(x**2 - (3*x)+ 1)

//}
//document.write(f(e));

// let compteur=0;
//function suivant(){
//compteur=compteur+1;
//let v=document.getElementById("valeur");
//v.innerHTML=compteur;
//}

function suivant() {
    alert('de la couleur')
}

function quit() {
    if (confirm("Tu veux vraiment partir ? :"));
    alert("à bientôt !");
    close();
}

function text_rouge() {
    let paragraphe = document.querySelector("p");
    paragraphe.style.color = "red";
}
document.body.style.background = "white";

let d = document.getElementById("valeur");
d.style.color = "blue";
d.style.fontWeight = "bold";
d.style.border = "1 pt dashed green"

function solution() {
    if (confirm("Tu veux la première solution ? :"));
    alert("La voici");
    alert("x vaut 2");
}


function solution2() {
    if (confirm("Tu veux la première solution ? :"));
    alert("La voici");
    alert("x vaut 19");
}

