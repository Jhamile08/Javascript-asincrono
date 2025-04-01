function comprarProducto(precio, saldo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            saldo >= precio ? resolve("compra realizada exitosamente") : reject("tu compra ha sido rechazada");
        }, 2000);
    }
)
}

comprarProducto(50,100).then(mensaje => console.log(mensaje)).catch(error => console.log(error));
