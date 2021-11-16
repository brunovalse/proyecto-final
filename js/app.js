
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener('click', function(){
  Next();
});

btnLeft.addEventListener('click', function(){
  Prev();
});

setInterval(function(){
  Next();
}, 5000);







/*
const carrousel = document.querySelector("#carrousel");
let sliderSection = document.querySelectorAll(".carrousel__div");
let sliderSectionLast = sliderSection[sliderSection.length -1]

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

function derecha() {

    let sliderSectionFirst = document.querySelectorAll(".carrousel__div")[0];
    carrousel.style.marginLeft="-200%";
    carrousel.style.transition = "all 0.5s";
    setTimeout(function () {
        carrousel  .style.transition = "none"
        carrousel.insertAdjacentElement('beforeend', sliderSectionFirst)     
        carrousel.style.marginLeft="-100%";
   
    }, 500);
}
btnRight.addEventListener('click', function () {
    derecha
    
})
*/
/*
let precioRevistas = 50
let precioLibros = 200










const revistasStock = [' Olé', ' El grafico', ' Gente', ' Billboard', ' Forbes']

alert('las revistas que poseemos son:' + revistasStock + ' todas al mismo valor')
 
console.log('las revistas que poseemos son:' + revistasStock + ' todas al mismo valor')


console.log('<--------------------->')


const librosStock = [' El Señor De Los Anillos', ' Harri Potter', ' Instinto', ' La Ciencia de la Matematica', ' Akasha']

alert('los libros que poseemos son:' + librosStock + ' todos al mismo valor')
 
console.log('los libros que poseemos son:' + librosStock + ' todos al mismo valor')


console.log('<--------------------->')




function suma(){
    let a = prompt("Ingresar la cantidad de revistas que usted quiera")

    let b = prompt("Ingresar la cantidad de libros que usted quiera")
        alert ("Usted solcita la cantidad de  " + a +" revistas y de " + b +" libros" );

    let cantidadRevistas = precioRevistas * a;
    console.log ("el pago debe ser de $ " + cantidadRevistas + " revistas"  );

    let cantidadLibros = precioLibros * b ;
    console.log("el pago debe ser de $ " + cantidadLibros + " libros");

    let sumaTotal = cantidadRevistas + cantidadLibros;
    alert("El monto total de pagar es de $ " + sumaTotal)

    let envioCaba = sumaTotal + 200;
    alert("con envio a CABA es un valor de $" +envioCaba)
    
    let envioGba = sumaTotal + 300;
    alert("con envio a GBA es un valor de $" +envioGba)

}
suma()


alert("Muchas gracias por realizar su pedido")

*/
