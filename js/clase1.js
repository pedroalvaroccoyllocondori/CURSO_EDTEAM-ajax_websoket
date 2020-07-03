const contenido = document.getElementById('mycontenido')
const boton=document.getElementById('btncargarJSON')
const cargar=document.getElementById('cargar')
///ocultar
cargar.style.display='none'

boton.addEventListener('click',evt=>{
    cargar.style.display='block'
    setTimeout(()=>{
        const xhr= new XMLHttpRequest()
        console.log('objeto crado',xhr.readyState)
    
        xhr.open('GET','/json',true)//url relativasi es el mismo dominio se usa /
        console.log('objeto abierto',xhr.readyState)
        
        xhr.addEventListener('load',e=>{
    
            console.log(e.target)
            console.log('objeto cargado',xhr.readyState)
            //ocultar 
            cargar.style.display='none'
        })
    
        ///realize la peticion
    
        xhr.send()
        console.log('accion solicitado',xhr.readyState)

    },10000)
   
})