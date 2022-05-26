const { Pool } = require('pg')
const args = process.argv.slice(2)
const agregar = require('./agregar')
const consultar = require('./consultar')
const consultarRut = require('./consultarRut')
const actualizar = require('./actualizar')
const eliminar = require('./eliminar')

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'alwaysmusic_db',
    password: '1234',
    port: 5432,
    max: 20,
    min: 0, 
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000, 
}
const pool = new Pool(config)

const programaComando = args[0]

const programa = async (programa) => {
    pool.connect(async (errorConexion, client, release) => {
        if (errorConexion) {
            console.error(errorConexion.code)
        } else {
            if (programa === 'agregar') {
                agregar(client, release, pool)
            }
        }
        if (errorConexion) {
            console.error(errorConexion.code)
        } else {
            if (programa === 'consultar') {
                consultar(client, release, pool)
            }
        }
        if (errorConexion) {
            console.error(errorConexion.code)
        } else {
            if (programa === 'consultarRut') {
                consultarRut(client, release, pool)
            }
        }
        if (errorConexion) {
            console.error(errorConexion.code)
        } else {
            if (programa === 'actualizar') {
                actualizar(client, release, pool)
            }
        }
        if (errorConexion) {
            console.error(errorConexion.code)
        } else {
            if (programa === 'eliminar') {
                eliminar(client, release, pool)
            }
        }

    })
}

programa(programaComando)