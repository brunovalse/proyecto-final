
    const url = 'https://jsonplaceholder.typicode.com/posts'

    


    $('#btn'). click( () =>{
        $.get(url, (response, status) =>{
        console.log(status)
        if (status !== 'success'){
            throw new Error('error')


        }
        
        for (const article of response){

            $('#content').prepend(`
            <div>
                <h3>${ article.title}</h3>
                <p> ${ article.body}</p>
            </div>
            `)
        }
        
        })
    })