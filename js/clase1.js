const contenido = document.getElementById('mycontenido')
const boton=document.getElementById('btncargarJSON')


boton.addEventListener('click',evt=>{
    const xhr= new XMLHttpRequest()
    console.log('objeto crado',xhr.readyState)

    xhr.open('GET','/json',true)//url relativasi es el mismo dominio se usa /
    console.log('objeto abierto',xhr.readyState)
    
    xhr.addEventListener('load',e=>{
        console.log(e.target)
        console.log('objeto cargado',xhr.readyState)
    })

    ///realize la peticion

    xhr.send()
    console.log('accion solicitado',xhr.readyState)
})