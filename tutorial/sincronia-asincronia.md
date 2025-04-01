# ¿Qué es JavaScript?

JavaScript es un lenguaje de programación de un solo procesamiento secuencial, no bloqueador, asíncrono, simultáneo y con mucha flexibilidad.

## ¿Qué es un solo proceso secuencial?

- **Ejecuta una sola tarea a la vez:**
  - JavaScript usa un solo hilo de ejecución, lo que implica que no puede hacer múltiples tareas simultáneamente en el mismo proceso.
  - Se ejecuta de arriba hacia abajo, línea por línea, sin pasar a la siguiente hasta que la otra termine.

- **El Event Loop maneja tareas asíncronas:**
  - Aunque JavaScript es secuencial, puede manejar tareas asíncronas con funciones como `setTimeout`, `fetch`, `promises` y `async/await`.
  - Estas tareas no bloquean la ejecución principal, sino que se delegan y se procesan más tarde cuando el hilo principal está libre.
  
### Ejemplo secuencial (bloqueante):

```js
console.log("Inicio");
for (let i = 0; i < 5e9; i++) {} // Bloquea el hilo principal
console.log("Fin");
```

### Ejemplo asíncrono (no bloqueante):

```js
console.log("Inicio");
setTimeout(() => {
    for (let i = 0; i < 5e9; i++) {} // Bucle pesado
}, 1000);
console.log("Fin");
```
