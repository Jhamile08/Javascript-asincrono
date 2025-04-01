Que es un callback en javascript?

Es una funcion que se pasa como argumento otra funcion y se ejecuta después de que esta termine su proceso.

para mejorar las tareas asincronas se usa setTimeout, peticiones de APIs (fech), o la manipulacion de eventos en el DOM

Ejemplo de un callback:

function saludo(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();
}

function despedida() {
    console.log("¡Adiós!");
}

saludo("Ana", despedida);

Ejemplo en tiempo real (ordenar la función):

console.log("Inicio");

setTimeout(() => {
    console.log("Mensaje 1");
}, 2000);

setTimeout(() => {
    console.log("Mensaje 2");
}, 1000);

console.log("Fin");

//solucion

console.log("Inicio");

setTimeout(() => {
    console.log("Mensaje 1");
    setTimeout(() => {
        console.log("Mensaje 2");
    }, 1000);
}, 2000);

console.log("Fin");

Promesas

Una promesa es un objeto que representa una operación que aún no ha terminado, pero que lo hará en el futuro.

Puede estar en tres estados:

Pending (Pendiente): La operación aún no ha finalizado.

Fulfilled (Cumplida): La operación se resolvió con éxito.

Rejected (Rechazada): Hubo un error en la operación.

function pedirHamburguesa() {
    return new Promise((resolve, reject) => {
        console.log("Pedido realizado...");

        setTimeout(() => {
            let exito = Math.random() > 0.3; // 70% de éxito, 30% de error
            
            if (exito) {
                resolve("🍔 Hamburguesa lista!");
            } else {
                reject("❌ No hay ingredientes.");
            }
        }, 2000); // Simula un tiempo de espera
    });
}

// Usamos la promesa
pedirHamburguesa()
    .then((mensaje) => console.log(mensaje))  // Si se cumple la promesa
    .catch((error) => console.error(error)); // Si la promesa falla


Ejercicio: Simular una compra en línea 🛒
Crea una función comprarProducto(precio, saldo).

Usa una promesa que:

Se resuelve (resolve) si el saldo es suficiente.

Se rechaza (reject) si el saldo es insuficiente.

Usa setTimeout() para simular un tiempo de espera de 2 segundos.

Maneja el resultado con .then() y .catch().

Ejemplo esperado

comprarProducto(50, 100); // ✅ Compra realizada
comprarProducto(150, 100); // ❌ Saldo insuficiente


Async/await

¿Qué es async/await?

Es una forma más limpia y fácil de manejar promesas en JavaScript.

Hace que el código asíncrono parezca síncrono, evitando .then() y .catch()

Vamos a tranformar el anterior ejercicio en async

function comprarProducto(precio, saldo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            saldo >= precio ? resolve("✅ Compra realizada") : reject("❌ Saldo insuficiente");
        }, 2000);
    });
}

// Usando .then() y .catch()
comprarProducto(50, 100)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error));

Ahora con await

async function procesarCompra(precio, saldo) {
    try {
        const mensaje = await comprarProducto(precio, saldo);
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    }
}

// Llamar la función
procesarCompra(50, 100);
