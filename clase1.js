const contenido = document.getElementById('mycontenido')
const boton=document.getElementById('btncargar')


boton.addEventListener('click',evt=>{
    const xhr= new XMLHttpRequest()
    xhr.open('GET','/data.html',true)//url relativasi es el mismo dominio se usa /
    xhr.addEventListener('load',e=>{
        console.log(e.target)
        contenido.innerHTML=e.target.responseText
    })

    ///realize la peticion

    xhr.send()
})