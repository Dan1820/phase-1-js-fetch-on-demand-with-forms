const init = () => {
    const inputForm=document.querySelector('form');
    // inputForm.addEventListener('submit', (event)=>{
    //     event.preventDefault();
    //     console.log(event.target.children[1].value)
    //     // console.log(event)
    // })
    inputForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        const input= document.querySelector('input#searchByID');
        console.log(input.value)
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response=>response.json())
        .then(response=>{
            const title= document.querySelector('section#movieDetails h4')
            const summary= document.querySelector('section#movieDetails p')

            title.innerText= response.title
            summary.innerText=response.summary
            // console.log(response)
        })
    })
}

document.addEventListener('DOMContentLoaded', init);