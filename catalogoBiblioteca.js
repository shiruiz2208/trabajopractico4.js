/*

Catálogo de biblioteca: Tienes un array que almacena títulos de libros
en una biblioteca. Debes crear funciones que permitan a los usuarios 
buscar libros por título, verificar si un libro específico está 
disponible para préstamo 
y llevar un registro de la disponibilidad de los libros.
*/

let biblioteca = ['CEl Alquimista , Paulo Coelho','Cien años de Soledad, Gabriel García Márquez','El Principito ,Antoine de Saint-Exupéry','Un mundo feliz, de Aldous Huxley.','Orgullo y prejuicio, de Jane Austen.','Crimen y castigo, de Fiódor Dostoyevski.','Los Miserables , Víctor Hugo','Ulises, de James Joyce','Crimen y castigo, de Fiódor Dostoyevski','En busca del tiempo perdido, de Marcel Proust']
let disponibilidad = [true,true,false,false,true,false,false,true,true,false]


let registro = (biblioteca) => {

    console.log('Estos son los libros que estan disponibles: ')
    
    for (let index = 0; index < disponibilidad.length; index++) {
        if(disponibilidad[index]){
            console.log(biblioteca[index])
        }
        
    }
    
}


let buscar = (nombre) => {
    let libro;
    let disponible;
    biblioteca.forEach((e,i) => {
      if(e.includes(nombre)){
            libro = e
        if(disponibilidad[i]){
            disponible = true
        }
      }
    })

    return `el libro: ${libro} ${disponible ? 'Si' : 'No'} esta disponible`
}

console.log(biblioteca.length)

console.log(registro(biblioteca))
console.log(buscar('Cocina'))