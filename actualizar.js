const args = process.argv.slice(2)
const ingresoNombre = args[1]
const ingresoRut = args[2]
const ingresoCurso = args[3]
const ingresoNivel = args[4]

async function actualizar(client, release, pool) {
    const actualizar = {
        rowMode: 'array',
        name: 'actualizarEstudiante',
        text: 'UPDATE estudiantes SET nombre = $1, curso = $3, nivel = $4 WHERE rut = $2 RETURNING *;',
        values: [ingresoNombre, ingresoRut, ingresoCurso, ingresoNivel]
    }
    await client.query(actualizar, (errorConsulta, res) => {
        if (errorConsulta) {
            console.error('Error al actualizar la información, favor revise los datos', errorConsulta.code)
        } else {
            console.log('Estudiante actualizado con éxito ', res.rows[0])
            release()
            pool.end()
        }
    })
}

module.exports = actualizar