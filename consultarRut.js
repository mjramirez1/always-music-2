const args = process.argv.slice(2)
const ingresoRut = args[1]

async function consultarRut(client, release, pool) {
    const consultarRut = {
        rowMode: 'array',
        name: 'consultarRutEstudiante',
        text: 'SELECT * FROM estudiantes WHERE rut = $1',
        values: [ingresoRut]
    }
    await client.query(consultarRut, (errorConsulta, res) => {
        if (errorConsulta) {
            console.error('Error en su consulta, vuelva a ingresar datos', errorConsulta.code)
        } else {
            console.log('El estudiante consultado rut: ', res.rows[0])
            release()
            pool.end()
        }
    })
}

module.exports = consultarRut