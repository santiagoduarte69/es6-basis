const materias = require('./materias');

// recorrido del arreglo
materias.forEach(function (materia) {
    if(materia.instructor === 'Cristian Buitrago')
        console.log(`nombre: ${materia.nombre}`)
})


const profesores = materias.map(function (materia) {
    return materia.instructor;
})
console.log(profesores)

//find 

const PHP = materias.find(()=>{
    return materia.insttructor === "Cristian Buitrago";
})  
console.log(PHP);