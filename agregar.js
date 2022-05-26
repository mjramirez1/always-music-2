const args = process.argv.slice(2)
const ingresoNombre = args[1]
const ingresoRut = args[2]
const ingresoCurso = args[3]
const ingresoNivel = args[4]

async function agregar(client, release, pool) {
    const agregar = {
        rowMode: 'array',
        name: 'agregarEstudiante',
        text: 'INSERT INTO estudiantes (nombre, rut, curso, nivel) values ($1, $2, $3, $4)RETURNING *;',
        values: [ingresoNombre, ingresoRut, ingresoCurso, ingresoNivel]
    }
    await client.query(agregar, (errorConsulta, res) => {
        if (errorConsulta) {
            console.error('Error en su consulta, vuelva a ingresar datos', errorConsulta.code)
        } else {
            console.log('Estudiante agregado con éxito', res.rows[0])
            release()
            pool.end()
        }
    })
}

module.exports = agregar
