function menu() {
    console.log("Menú");
    console.log("1) Agregar curso");
    console.log("2) Editar curso");
    console.log("3) Eliminar curso");
    console.log("4) Mostrar cursos");
    console.log("5) Filtrar curso por nombre");
    console.log("0) Cerrar programa");
}

var cursos = [
    {nombre: "Introducción a Python", descripcion: "Este curso enseña las bases iniciales de Python", contenido: "Clase 1"},
    {nombre: "Python Avanzado", descripcion: "Este curso enseña Python Avanzado", contenido: "Clase 2"},
    {nombre: "HTML", descripcion: "Este curso enseña HTML", contenido: "Clase 3"},
    {nombre: "CSS", descripcion: "Este curso enseña CSS", contenido: "Clase 4"},
    {nombre: "JavaScript", descripcion: "Este curso enseña JavaScript", contenido: "Clase 5"}
];

function agregarCurso(cursos) {
    let curso = {
        nombre: prompt("Ingrese el nombre del curso"),
        descripcion: prompt("Ingrese la descripción detallada del curso"),
        contenido: prompt("Ingrese el contenido del curso")
    };
    cursos.push(curso);
    console.log("Curso registrado con éxito");
    return cursos;
}

function editarCurso(cursos) {
    let cursoBuscado = prompt("Ingrese el nombre del curso que desea editar");
    let curso = cursos.find(c => c.nombre === cursoBuscado);
    if (curso) {
        curso.nombre = prompt("Ingrese el nuevo nombre del curso", curso.nombre);
        curso.descripcion = prompt("Ingrese la nueva descripción del curso", curso.descripcion);
        curso.contenido = prompt("Ingrese el nuevo contenido del curso", curso.contenido);
        console.log("Curso editado con éxito");
    } else {
        console.log("Curso no encontrado.");
    }
}

function eliminarCurso(cursos) {
    let nombreCurso = prompt("Ingrese el nombre del curso a eliminar");
    let index = cursos.findIndex(c => c.nombre === nombreCurso);
    if (index !== -1) {
        cursos.splice(index, 1);
        console.log("Curso eliminado con éxito");
    } else {
        console.log("Curso no encontrado.");
    }
}

function mostrarCursos(cursos) {
    console.log("Cursos:");
    cursos.forEach(curso => {
        console.log(`Nombre: ${curso.nombre}`);
        console.log(`Descripción: ${curso.descripcion}`);
        console.log(`Contenido: ${curso.contenido}`);
        console.log("------------------------------");
    });
}

function filtroCursoNombre(cursos) {
    let cursoBuscado = prompt("Ingrese el nombre del curso a buscar");
    let curso = cursos.find(c => c.nombre === cursoBuscado);
    if (curso) {
        mostrarInformacion(curso);
    } else {
        console.log("Curso no encontrado.");
    }
}

function mostrarInformacion(curso) {
    console.log(
        "--------------------------------------------------------------------\n" +
        "Información completa:\n" +
        "--------------------------------------------------------------------"
    );
    for (const llave in curso) {
        console.log(`${llave}: ${curso[llave]}`);
    }
    console.log("--------------------------------------------------------------------");
}

do {
    menu();
    var opcion = Number(prompt("Ingrese la opción"));
    switch (opcion) {
        case 1:
            cursos = agregarCurso(cursos);
            break;
        case 2:
            editarCurso(cursos);
            break;
        case 3:
            eliminarCurso(cursos);
            break;
        case 4:
            mostrarCursos(cursos);
            break;
        case 5:
            filtroCursoNombre(cursos);
            break;
        case 0:
            console.log("Cerrando el programa");
            break;
        default:
            console.log("Opción no válida. Por favor, intente nuevamente.");
    }
} while (opcion != 0);
