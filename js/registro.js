$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

const formUsuarios = $('#form-usuario')


const usuario = $('#usuario')
const password = $('#password')
const email = $('#email')
const telefono = $('#telefono')
const btnUsuario = $('#btn-usuario')

const listaUsuarios = [ 
    {nombreLocal:'brunovalse',passwordLocal:'123456',emailLocal:'brunovalse@gmail.com', telefonoLocal:'1122334455' }
 ];

$(formUsuarios).on('submit',(event) =>{

    event.preventDefault();

    const nombreUsuario = $(usuario).val();

    const passwordUsuario = $(password).val();

    const emailUsuario = $(email).val();

    const telefonoUsuario = $(telefono).val();

    console.log(nombreUsuario)
    console.log(passwordUsuario)
    console.log(emailUsuario)
    console.log(telefonoUsuario)

    




    if(localStorage.getItem(nombreLocal) === nombreUsuario ) {
        alert('nombre')
    }
    else if(localStorage.getItem(passwordLocal) === passwordUsuario ) {
        alert('password')
    }
    else if(localStorage.getItem(emailLocal) === emailUsuario ) {
        alert('email')
    }
    else if(localStorage.getItem(telefonoLocal) ===telefonoUsuario ) {
        alert('telefono')
    }


    else (localStorage.getItem('telefonoLocal') === null, localStorage.getItem('emailUsuario') === null,localStorage.getItem('passwordUsuario') === null, localStorage.getItem('nombreUsuario') === null )   
        
       
        listaUsuarios.push({
            nombreLocal, passwordLocal, emailLocal, telefonoLocal


        })
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
        console.log(localStorage)

        

    }




 )










