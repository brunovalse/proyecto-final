const formRevistas = $('#form-revistas')

const inputNombre = $('#input-nombre-revista');

const inputPaginas = $('#input-pagina-revista');

const inputAño = $('#input-año-revista');

const btn = $('#btn');  

let revistaStorage = [];

$(formRevistas).on('submit',(event) =>{

    event.preventDefault();

    const nombre = $(inputNombre).val();

    const paginas = $(inputPaginas).val();

    const año = $(inputAño).val();

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
        
        var divJS = $("<p></p>").text('la revista ' + nombre + ' ya esta siendo revisada')
        $('body').append(divJS)   

        revistaStorage.push({
            nombre, paginas, año


        })
        localStorage.setItem("revistaStorage", JSON.stringify(revistaStorage))
        console.log(localStorage)

        

    }
    
    




})




$('#btn').click(function(){
    console.log('Haz hecho click')
    
    }
    )
/*const div1 = document.getElementById('div1')
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

*/


