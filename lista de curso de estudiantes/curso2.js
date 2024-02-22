const todoElCodigo = (top = 0) =>{
  const studentList = [
    {
      id: 1,
      name: 'jhon',
      courses: [
        {
          id: 1,
          name: 'algebra',
          isPaid: true,
        },
        {
          id: 2,
          name: 'mathematics',
          isPaid: false,
        },
        {
          id: 3,
          name: 'physics',
          isPaid: true,
        },
      ],
    },
    {
      id: 2,
      name: 'pepe',
      courses: [
        {
          id: 4,
          name: 'laws',
          isPaid: true,
        },
        {
          id: 5,
          name: 'chemistry',
          isPaid: true,
        },
        {
          id: 6,
          name: 'P.E.',
          isPaid: true,
        },
      ],
    },
    {
      id: 3,
      name: 'michael',
      courses: [
        {
          id: 1,
          name: 'algebra',
          isPaid: true,
        },
        {
          id: 5,
          name: 'chemistry',
          isPaid: true,
        },
        {
          id: 3,
          name: 'physics',
          isPaid: true,
        },
      ],
    },
    {
      id: 3,
      name: 'Juan Luis',
      courses: [
        {
          id: 1,
          name: 'algebra',
          isPaid: true,
        },
        {
          id: 5,
          name: 'chemistry',
          isPaid: true,
        },
        {
          id: 3,
          name: 'physics',
          isPaid: true,
        },
      ],
    },
  ];

  const alumnosYCursos = [];

  studentList.forEach((student) => {
    student.courses.forEach((course) => {
        if (course.isPaid){
            let AlumnosPorCurso = {name: course.name, cantidadDeAlumnos: 1};
            let CursoExistente = alumnosYCursos.find((cursos) => cursos.name === course.name)
            CursoExistente ? CursoExistente.cantidadDeAlumnos ++ : alumnosYCursos.push(AlumnosPorCurso);
        }
    })
  })  

  alumnosYCursos.sort((a, b) => b.cantidadDeAlumnos - a.cantidadDeAlumnos)
  let buscador = top > 0 && top <= alumnosYCursos.length  ? alumnosYCursos.slice(0,top) : alumnosYCursos;
  console.log(buscador)
}

todoElCodigo(17)