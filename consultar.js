async function consultar(client, release, pool) {
    const consultar = {
        rowMode: 'array',
        name: 'consultarEstudiante',
        text: 'SELECT * FROM estudiantes',
        values: []
    }

    await client.query(consultar, (errorConsulta, res) => {
        if (errorConsulta) {
            console.error('Error en su consulta, vuelva a ingresar los datos', errorConsulta.code)
        } else {
            console.log('Los estudiantes registrados son: ', res.rows)
            release()
            pool.end()
        }
    })
}

module.exports = consultar
