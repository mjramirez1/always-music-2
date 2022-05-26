const args = process.argv.slice(2)

const ingresoRut = args[1]

async function eliminar(client, release, pool) {
    const eliminar = {
       // rowMode: 'array',
        name: 'eliminarEstudiante',
        text: 'DELETE FROM estudiantes WHERE rut = $1 RETURNING *;',
        values: [ingresoRut]
    }

    await client.query(eliminar, (errorConsulta, res) => {
        if (errorConsulta) {
            console.error('Error al eliminar datos', errorConsulta.code)
        } else {
            console.log('El estudiante ha sido eliminado correctamente', res.rows)
            release()
            pool.end()
        }
    })
}

module.exports = eliminar
