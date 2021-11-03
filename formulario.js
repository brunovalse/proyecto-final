const formRevistas = document.getElementById("form-revistas")

const inputNombre = document.getElementById("input-nombre-revista");

const inputPaginas = document.getElementById("input-pagina-revista");

const inputAño = document.getElementById("input-año-revista");

const btn = document.getElementById('btn')

let revistaStorage = [];

formRevistas.addEventListener('submit', (event) =>{

    event.preventDefault();

    const nombre = inputNombre.value

    const paginas = inputPaginas.value

    const año = inputAño.value

    console.log(nombre)
    console.log(paginas)
    console.log(año)

    
    


    if(nombre == 'ole'){

        alert('Ya existe')
    
    }
    
    else if( nombre == 'el grafico'){
        alert('Ya existe')
    }
        
    else if(nombre == 'gente'){
        alert('Ya existe')
    }
    
    else if(nombre == 'billboard'){
        alert('Ya existe')
        }
    
    else if(nombre == 'forbes'){
        alert('Ya existe')
    }
    else {
        const div1 = document.getElementById('div1')
        const newDiv = document.createElement('div')
        newDiv.textContent = 'La revista ' + nombre + ' ya esta siendo revisada'
    
        div1.appendChild(newDiv)
        console.log(newDiv)
        
        revistaStorage.push(event);
        let nombreJSON = JSON.stringify(nombre);
        localStorage.setItem("inputNombre", nombreJSON );

        revistaStorage.push(event);
        let paginasJSON = JSON.stringify(paginas);
        localStorage.setItem("inputPaginas", paginasJSON );

        revistaStorage.push(event);
        let añoJSON = JSON.stringify(año);
        localStorage.setItem("inputAño", añoJSON );

        alert('gracias por ayudar')
    }
    
    




})







btn.addEventListener('click',() =>{
console.log('Haz hecho click')

}
)
