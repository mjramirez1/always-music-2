# Always Music 2.0

## Requerimientos

1. Realizar la conexión con PostgreSQL, utilizando la clase Pool y definiendo un
máximo de 20 clientes, 5 segundos como tiempo máximo de inactividad de un
cliente y 2 segundos de espera de un nuevo cliente.
2. Hacer todas las consultas con un JSON como argumento definiendo la propiedad
name para el Prepared Statement.
3. Hacer las consultas con texto parametrizado.
4. Liberar a un cliente al concluir su consulta.
5. Capturar los posibles errores en todas las consultas.
6. Retornar por consola un mensaje de error en caso de haber problemas de conexión.
7. Obtener el registro de los estudiantes registrados en formato de arreglos.

